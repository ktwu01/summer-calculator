import { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ targetDate, title }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-2xl font-bold">时间到!</span>;
    }
    return (
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold">
          {days}天 {hours}时 {minutes}分 {seconds}秒
        </div>
        <div className="mt-2 text-lg">{title}</div>
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
