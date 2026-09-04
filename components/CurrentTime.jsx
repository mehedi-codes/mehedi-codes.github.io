"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {useEffect, useState} from "react";
const CurrentTime = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const time = dayjs().tz("Asia/Dhaka").format("hh:mm:ss A");
      setCurrentTime(time);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="text-lg  lg:text-2xl border border-gray-400 rounded-full px-4 py-2 hover:bg-[#0E0E0C] hover:text-white transition duration-500 ease-in-out cursor-pointer" style={{ width: "180px" }}>
      {currentTime}
    </div>
  );
};

export default CurrentTime;
