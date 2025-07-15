import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Share2, Clock, BookOpen, Sun, Trophy, Award, Gamepad2, Trophy as TrophyIcon, Smartphone, Cloud, Utensils } from "lucide-react";
import Countdown from "react-countdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  WeiboShareButton,
} from "react-share";

const Index = () => {
  // 暑假时间配置 (可自定义)
  const [summerVacationStart, setSummerVacationStart] = useState(new Date("2025-07-01"));
  const [summerVacationEnd, setSummerVacationEnd] = useState(new Date("2025-09-06"));

  const [hasHomework, setHasHomework] = useState(true);
  const [homeworkCompleted, setHomeworkCompleted] = useState(0);
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [achievements, setAchievements] = useState({
    internship: false,
    travel: false,
    relationship: false,
    postgraduate: false,
    studyAbroad: false,
    job: false,
    lottery: false,
    custom1: false,
    custom2: false,
    // 新增日常成就
    gaming: false,
    competition: false,
    douyin: false,
    daydreaming: false,
    goodPoop: false,
    deliciousFood: false
  });

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const addActivity = () => {
    if (newActivity.trim()) {
      setActivities([...activities, newActivity.trim()]);
      setNewActivity("");
    }
  };

  const removeActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const toggleAchievement = (key) => {
    setAchievements(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getScoreComment = (score) => {
    if (score === 0) return "你的暑假太不值了，退学吧";
    if (score < 29) return "你的暑假太不值了";
    if (score >= 29 && score < 39) return "你的暑假要再加把劲了";
    if (score >= 39 && score < 49) return "勉强及格，但还是很废";
    if (score >= 49 && score < 59) return "还行吧，至少没完全浪费";
    if (score >= 59 && score < 69) return "不错不错，有点东西";
    if (score >= 69 && score < 79) return "哇塞，你是暑假卷王吧";
    if (score >= 79 && score < 89) return "你TMD真是个人才！";
    if (score >= 89 && score < 99) return "你怎么不上天呢？";
    return "神仙下凡辛苦了";
  };

  const getNextMilestone = (score) => {
    const milestones = [29, 39, 49, 59, 69, 79, 89, 99, 109, 119, 129, 139];
    const next = milestones.find(m => m > score);
    return next ? `距离下一个里程碑只剩${next - score}分` : "你已经达到最高里程碑！";
  };

  const calculateSummerValue = () => {
    let score = 0;
    
    // 基础分 - 作业完成度按比例计算
    if (hasHomework) {
      score += (29 * homeworkCompleted) / 100;
    } else {
      score += 29; // 没有作业直接给满分
    }
    
    // 大成就加分 (每个10分)
    if (achievements.internship) score += 10;
    if (achievements.travel) score += 10;
    if (achievements.relationship) score += 10;
    if (achievements.postgraduate) score += 10;
    if (achievements.studyAbroad) score += 10;
    if (achievements.job) score += 10;
    if (achievements.lottery) score += 10;
    if (achievements.custom1) score += 20;
    if (achievements.custom2) score += 20;
    
    // 小成就加分 (每个3分)
    if (achievements.gaming) score += 3;
    if (achievements.competition) score += 3;
    if (achievements.douyin) score += 3;
    if (achievements.daydreaming) score += 3;
    if (achievements.goodPoop) score += 3;
    if (achievements.deliciousFood) score += 3;
    
    // 活动加分 (每个活动加10分)
    score += activities.length * 10;
    
    return Math.round(score);
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-4xl font-bold">暑假已结束!</span>;
    }
    return (
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {days}天 {hours}时 {minutes}分 {seconds}秒
        </div>
        <div className="mt-4 text-xl">
          距离暑假结束还有
        </div>
      </div>
    );
  };

  const summerValue = calculateSummerValue();
  const scoreComment = getScoreComment(summerValue);
  const nextMilestone = getNextMilestone(summerValue);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 导航栏 */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">你的暑假值不值</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              校历
            </Button>
          </div>
        </div>

        {/* 倒计时卡片 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Clock className="h-6 w-6" />
              <span>暑假倒计时</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center py-8">
              <Countdown
                date={summerVacationEnd}
                renderer={countdownRenderer}
              />
            </div>
          </CardContent>
        </Card>

        {/* 暑假价值评估 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">你的暑假值不值?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* 暑假日期设置 */}
              <div>
                <h3 className="font-medium mb-2">暑假日期设置</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">暑假开始日期</label>
                    <input
                      type="date"
                      value={summerVacationStart.toISOString().split('T')[0]}
                      onChange={(e) => setSummerVacationStart(new Date(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">暑假结束日期</label>
                    <input
                      type="date"
                      value={summerVacationEnd.toISOString().split('T')[0]}
                      onChange={(e) => setSummerVacationEnd(new Date(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* 作业完成情况 */}
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>暑假作业</span>
                </h3>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={hasHomework}
                      onChange={(e) => setHasHomework(e.target.checked)}
                      className="h-4 w-4"
                    />
                    有暑假作业
                  </label>
                  {hasHomework && (
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span>完成度:</span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={homeworkCompleted}
                          onChange={(e) => setHomeworkCompleted(parseInt(e.target.value))}
                          className="w-full max-w-xs"
                        />
                        <span>{homeworkCompleted}%</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 暑假成就 */}
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  <span>暑假成就</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {/* 大成就 */}
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.internship}
                      onChange={() => toggleAchievement('internship')}
                      className="h-4 w-4"
                    />
                    <span>找到了实习</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.travel}
                      onChange={() => toggleAchievement('travel')}
                      className="h-4 w-4"
                    />
                    <span>去旅行了</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.relationship}
                      onChange={() => toggleAchievement('relationship')}
                      className="h-4 w-4"
                    />
                    <span>脱单了</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.postgraduate}
                      onChange={() => toggleAchievement('postgraduate')}
                      className="h-4 w-4"
                    />
                    <span>保研了</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.studyAbroad}
                      onChange={() => toggleAchievement('studyAbroad')}
                      className="h-4 w-4"
                    />
                    <span>出国留学</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.job}
                      onChange={() => toggleAchievement('job')}
                      className="h-4 w-4"
                    />
                    <span>找到工作了</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.lottery}
                      onChange={() => toggleAchievement('lottery')}
                      className="h-4 w-4"
                    />
                    <span>中彩票1000万</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.custom1}
                      onChange={() => toggleAchievement('custom1')}
                      className="h-4 w-4"
                    />
                    <span>自定义成就1</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.custom2}
                      onChange={() => toggleAchievement('custom2')}
                      className="h-4 w-4"
                    />
                    <span>自定义成就2</span>
                  </label>
                  
                  {/* 新增小成就 */}
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.gaming}
                      onChange={() => toggleAchievement('gaming')}
                      className="h-4 w-4"
                    />
                    <Gamepad2 className="h-4 w-4" />
                    <span>打游戏</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.competition}
                      onChange={() => toggleAchievement('competition')}
                      className="h-4 w-4"
                    />
                    <TrophyIcon className="h-4 w-4" />
                    <span>打比赛</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.douyin}
                      onChange={() => toggleAchievement('douyin')}
                      className="h-4 w-4"
                    />
                    <Smartphone className="h-4 w-4" />
                    <span>刷抖音</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.daydreaming}
                      onChange={() => toggleAchievement('daydreaming')}
                      className="h-4 w-4"
                    />
                    <Cloud className="h-4 w-4" />
                    <span>发呆</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.goodPoop}
                      onChange={() => toggleAchievement('goodPoop')}
                      className="h-4 w-4"
                    />
                    <span>💩通畅</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.deliciousFood}
                      onChange={() => toggleAchievement('deliciousFood')}
                      className="h-4 w-4"
                    />
                    <Utensils className="h-4 w-4" />
                    <span>吃了好吃的</span>
                  </label>
                </div>
              </div>

              {/* 暑假活动 */}
              <div>
                <h3 className="font-medium mb-2">暑假活动</h3>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="添加你的暑假活动 (如: 实习、旅行、学习等)"
                    value={newActivity}
                    onChange={(e) => setNewActivity(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md shadow-sm"
                  />
                  <Button onClick={addActivity}>添加</Button>
                </div>
                <div className="space-y-2">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                      <span>{activity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeActivity(index)}
                      >
                        删除
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 评估结果 */}
              <div className="pt-4 border-t">
                <h3 className="text-xl font-bold mb-4 text-center">
                  你的暑假价值评分: {summerValue}
                </h3>
                <div className="text-center text-lg font-medium mb-2">
                  {scoreComment}
                </div>
                <div className="text-center text-sm text-gray-600 mb-4">
                  {nextMilestone}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${
                      summerValue >= 70
                        ? "bg-green-500"
                        : summerValue >= 40
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(summerValue, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 分享功能 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Share2 className="h-6 w-6" />
              <span>分享给你的朋友</span>
            </CardTitle>
            <p className="text-sm text-gray-500">让你的朋友一起破防</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                分享到朋友圈
              </Button>
              <FacebookShareButton url={shareUrl} quote={`我的暑假价值评分: ${summerValue} - ${scoreComment}`}>
                <Button variant="outline">分享到 Facebook</Button>
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={`我的暑假价值评分: ${summerValue} - ${scoreComment}`}>
                <Button variant="outline">分享到 Twitter</Button>
              </TwitterShareButton>
              <WeiboShareButton url={shareUrl} title={`我的暑假价值评分: ${summerValue} - ${scoreComment}`}>
                <Button variant="outline">分享到 微博</Button>
              </WeiboShareButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
