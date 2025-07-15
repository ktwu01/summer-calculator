import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Share2, Clock, BookOpen, Sun, Trophy, Award, Gamepad2, Trophy as TrophyIcon, Smartphone, Cloud, Utensils, Heart, Plane, GraduationCap, Briefcase, DollarSign, Music, Film, Dumbbell, Coffee, Moon, Wifi, ShoppingBag, Smile, Frown, Meh, ThumbsUp, ThumbsDown, Battery, Wrench, Bike, Car, Bus, Train, Ship, Anchor, Camera, Headphones, Book, PenTool, Mic, Phone, Mail, MessageSquare, User, Users, Home, Map, Navigation, Compass, Globe, Watch, Calendar, CreditCard, Key, Lock, Unlock, Gift, Bell, Star, Flag, Trash2, Download, Upload, Edit, Copy, Save, Plus, Minus, X, Check, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCw, RefreshCw, Power, Volume2, VolumeX, Sliders, Settings, HelpCircle, AlertCircle, Info, Lightbulb, Zap, Shield, Feather, Droplet, Wind, Thermometer, Umbrella, Leaf, Trees as Tree, Bug, Fish, Bird, Cat, Dog, PawPrint, Wine, Image, Wallet, Package } from 'lucide-react'
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
    // 大成就保持不变
    internship: false,
    travel: false,
    relationship: false,
    postgraduate: false,
    studyAbroad: false,
    job: false,
    lottery: false,
    learnedSkill: false,
    madeFriend: false,
    
    // 小成就 - 新增更多有趣的日常事件
    gaming: false,
    douyin: false,
    daydreaming: false,
    goodPoop: false,
    deliciousFood: false,
    expelled: false, // 被退学
    sleptWell: false,
    watchedMovie: false,
    listenedMusic: false,
    workedOut: false,
    drankCoffee: false,
    stayedUpLate: false,
    connectedWifi: false,
    wentShopping: false,
    feltHappy: false,
    feltSad: false,
    feltMeh: false,
    likedSomething: false,
    dislikedSomething: false,
    chargedPhone: false,
    fixedSomething: false,
    rodeBike: false,
    gotFired: false,
    brokeUp: false,
    gotDrunk: false,
    madeMeme: false,
    lostWallet: false,
    foundMoney: false,
    gotHaircut: false,
    boughtClothes: false,
    ateSpicy: false,
    criedAlone: false,
    laughedAloud: false,
    watchedSunset: false,
    sleptPastNoon: false,
    forgotPassword: false,
    metStranger: false,
    tookSelfie: false,
    deletedSocialMedia: false,
    reinstalledSocialMedia: false,
    arguedOnline: false,
    wonArgument: false,
    // 新增更多有趣的小事情
    lostGame: false, // 游戏连跪
    wonLottery: false, // 中了5块钱彩票
    missedBus: false, // 错过末班车
    brokePhone: false, // 手机摔碎
    atePizza: false, // 吃披萨
    watchedCat: false, // 看猫咪视频
    playedMahjong: false, // 打麻将
    sangKTV: false, // 唱K
    dancedAlone: false, // 一个人跳舞
    burntFood: false, // 把饭煮糊了
    plantedFlower: false, // 种了一盆花
    killedPlant: false, // 花养死了
    learnedRecipe: false, // 学会新菜
    forgotMask: false, // 出门忘带口罩
    sawRainbow: false, // 看到彩虹
    stepInPoop: false, // 踩到狗屎
    sawCelebrity: false, // 偶遇明星
    gotScammed: false, // 被骗钱
    wonRedPacket: false, // 抢到大红包
    missedDelivery: false, // 快递放丢了
    foundOldThing: false, // 翻到老物件
    triedNewFood: false, // 尝试新食物
    gotAllergic: false, // 食物过敏
    brokeGlasses: false, // 眼镜摔坏
    lostKey: false, // 丢钥匙
    stuckInElevator: false, // 电梯卡住
    sawShooting: false, // 看到流星
    madeIceCream: false, // 自制冰淇淋
    burnedTongue: false, // 烫到舌头
    ranInRain: false, // 雨中奔跑
    sawFireworks: false, // 看到烟花
    builtLego: false, // 拼乐高
    drewPicture: false, // 画画
    wrotePoem: false, // 写诗
    playedInstrument: false, // 弹琴
    tookNap: false, // 午睡
    watchedSunrise: false, // 看日出
    foldedPaper: false, // 折纸
    playedWithPet: false, // 逗宠物
    cleanedRoom: false, // 大扫除
    organizedPhotos: false, // 整理照片
    deletedExes: false, // 删前任照片
    stalkedCrush: false, // 偷看暗恋对象
    sentWrongMessage: false, // 发错群消息
    recoverMessage: false, // 撤回消息
    blockedEx: false, // 拉黑前任
    unblockedEx: false, // 取消拉黑
    changedHairstyle: false, // 换新发型
    dyedHair: false, // 染头发
    gotPiercing: false, // 打耳洞
    gotTattoo: false, // 纹身
    joinedGym: false, // 办健身卡
    quitGym: false, // 健身卡闲置
    startedDiet: false, // 开始减肥
    brokeDict: false, // 破戒
    learnedDance: false, // 学跳舞
    forgotDance: false, // 忘记舞步
    playedBasketball: false, // 打篮球
    playedFrisbee: false, // 玩飞盘
    wentSwimming: false, // 游泳
    gotSunburned: false, // 晒伤
    hadHotpot: false, // 吃火锅
    hadBBQ: false, // 烧烤
    orderedTakeout: false, // 点外卖
    cookedMeal: false, // 自己做饭
    watchedDrama: false, // 追剧
    bingeDrama: false, // 熬夜追剧
    playedSwitch: false, // 玩switch
    boughtGame: false, // 买新游戏
    completedGame: false, // 通关游戏
    uninstalledGame: false, // 卸载游戏
    installedGame: false, // 重装游戏
    watchedAnime: false, // 看动漫
    readManga: false, // 看漫画
    readNovel: false, // 看小说
    wroteStory: false, // 写小说
    startedBlog: false, // 开始写博客
    abandonedBlog: false, // 放弃写博客
    learnedLanguage: false, // 学新语言
    forgotLanguage: false, // 忘记语言
    madePlaylist: false, // 做歌单
    deletedPlaylist: false, // 删歌单
    watchedTutorial: false, // 看教程
    failedTutorial: false, // 教程没看懂
    joinedClub: false, // 加入社团
    quitClub: false, // 退出社团
    startedHobby: false, // 开始新爱好
    quitHobby: false, // 放弃爱好
    gotLost: false, // 迷路
    foundWayBack: false, // 找到路
    brokePromise: false, // 失约
    keptPromise: false, // 守约
    lostBet: false, // 打赌输了
    wonBet: false, // 打赌赢了
    gotPranked: false, // 被整蛊
    prankedOthers: false, // 整蛊他人
    toldJoke: false, // 讲笑话
    laughedAtJoke: false, // 笑话被笑
    startedDiary: false, // 开始写日记
    quitDiary: false, // 放弃写日记
    triedMeditation: false, // 尝试冥想
    fellAsleep: false, // 冥想睡着
    joinedParty: false, // 参加派对
    leftEarly: false, // 提前离场
    gotCompliment: false, // 被夸奖
    gaveCompliment: false, // 夸奖他人
    helpedStranger: false, // 帮助陌生人
    gotHelped: false, // 被帮助
    madeWish: false, // 许愿
    wishCameTrue: false, // 愿望成真
    brokeRule: false, // 违反规定
    gotCaught: false, // 被抓到
    escapedTrouble: false, // 逃过一劫
    causedTrouble: false, // 惹祸
    savedMoney: false, // 存钱
    spentAll: false, // 花光存款
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
    const bigAchievements = [
      'internship', 'travel', 'relationship', 'postgraduate',
      'studyAbroad', 'job', 'lottery', 'learnedSkill', 'madeFriend'
    ];
    
    bigAchievements.forEach(achievement => {
      if (achievements[achievement]) score += 10;
    });
    
    // 所有其他成就都算作小成就 (每个3分)
    Object.keys(achievements).forEach(key => {
      if (!bigAchievements.includes(key) && achievements[key]) {
        score += 3;
      }
    });
    
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
                {/* 大成就 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                      checked={achievements.learnedSkill}
                      onChange={() => toggleAchievement('learnedSkill')}
                      className="h-4 w-4"
                    />
                    <span>学会新技能</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
                    <input
                      type="checkbox"
                      checked={achievements.madeFriend}
                      onChange={() => toggleAchievement('madeFriend')}
                      className="h-4 w-4"
                    />
                    <span>交到新朋友</span>
                  </label>
                </div>
                {/* 小成就列表 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {Object.entries(achievements).map(([key, value]) => {
                    // 跳过大成就
                    if (['internship', 'travel', 'relationship', 'postgraduate', 'studyAbroad', 'job', 'lottery', 'learnedSkill', 'madeFriend'].includes(key)) {
                      return null;
                    }
                    
                    // 获取显示名称和图标
                    const getAchievementDisplay = (key) => {
                      const displays = {
                        gaming: { name: "打游戏", icon: Gamepad2 },
                        douyin: { name: "刷抖音", icon: Smartphone },
                        daydreaming: { name: "发呆", icon: Cloud },
                        goodPoop: { name: "拉屎通畅", icon: ThumbsUp },
                        deliciousFood: { name: "吃好吃的", icon: Utensils },
                        expelled: { name: "被退学", icon: GraduationCap },
                        sleptWell: { name: "睡得好", icon: Moon },
                        watchedMovie: { name: "看电影", icon: Film },
                        listenedMusic: { name: "听音乐", icon: Music },
                        workedOut: { name: "健身", icon: Dumbbell },
                        drankCoffee: { name: "喝咖啡", icon: Coffee },
                        stayedUpLate: { name: "熬夜", icon: Moon },
                        connectedWifi: { name: "连上WiFi", icon: Wifi },
                        wentShopping: { name: "购物", icon: ShoppingBag },
                        feltHappy: { name: "感到开心", icon: Smile },
                        feltSad: { name: "感到难过", icon: Frown },
                        feltMeh: { name: "感到无聊", icon: Meh },
                        likedSomething: { name: "点赞", icon: ThumbsUp },
                        dislikedSomething: { name: "点踩", icon: ThumbsDown },
                        chargedPhone: { name: "充电", icon: Battery },
                        fixedSomething: { name: "修东西", icon: Wrench },
                        rodeBike: { name: "骑自行车", icon: Bike },
                        gotFired: { name: "被炒鱿鱼", icon: Briefcase },
                        brokeUp: { name: "分手", icon: Heart },
                        gotDrunk: { name: "喝醉", icon: Wine },
                        madeMeme: { name: "制作表情包", icon: Image },
                        lostWallet: { name: "丢钱包", icon: Wallet },
                        foundMoney: { name: "捡到钱", icon: DollarSign },
                        // ... 为新增的成就添加显示名称和图标
                        lostGame: { name: "游戏连跪", icon: Gamepad2 },
                        wonLottery: { name: "中了5块钱", icon: DollarSign },
                        missedBus: { name: "错过末班车", icon: Bus },
                        brokePhone: { name: "手机摔碎", icon: Smartphone },
                        atePizza: { name: "吃披萨", icon: Utensils },
                        watchedCat: { name: "看猫咪视频", icon: Cat },
                        playedMahjong: { name: "打麻将", icon: Gamepad2 },
                        sangKTV: { name: "唱K", icon: Mic },
                        dancedAlone: { name: "一个人跳舞", icon: Music },
                        burntFood: { name: "把饭煮糊了", icon: Utensils },
                        plantedFlower: { name: "种了一盆花", icon: Leaf },
                        killedPlant: { name: "花养死了", icon: Leaf },
                        learnedRecipe: { name: "学会新菜", icon: Utensils },
                        forgotMask: { name: "忘带口罩", icon: Shield },
                        sawRainbow: { name: "看到彩虹", icon: Sun },
                        stepInPoop: { name: "踩到狗屎", icon: PawPrint },
                        sawCelebrity: { name: "偶遇明星", icon: Star },
                        gotScammed: { name: "被骗钱", icon: AlertCircle },
                        wonRedPacket: { name: "抢到大红包", icon: Gift },
                        missedDelivery: { name: "快递放丢了", icon: Package },
                        // ... 继续添加其他成就的显示配置
                      };
                      return displays[key] || { name: key, icon: Check };
                    };

                    const display = getAchievementDisplay(key);
                    const Icon = display.icon;

                    return (
                      <label key={key} className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => toggleAchievement(key)}
                          className="h-4 w-4"
                        />
                        {Icon && <Icon className="h-4 w-4" />}
                        <span className="text-sm">{display.name}</span>
                      </label>
                    );
                  })}
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
