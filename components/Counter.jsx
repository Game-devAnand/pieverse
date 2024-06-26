"use client";
import React, { useEffect, useState } from "react";
const Counter = () => {
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [mins, setmins] = useState(0);
  const [secs, setsecs] = useState(0);

  const deadline = "May, 04, 2024";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
    sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setmins(Math.floor((time / 1000 / 60) % 60));
    setsecs(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-row text-primary  poppins-semibold mt-4 text-3xl md:text-4xl lg:text-6xl">
    <div className="flex flex-col justify-center items-center">
      <div>
        {days < 10 ? "0" + days : days}
      </div>
      <p className="underline text-xs text-secondary text-white">Days</p>
    </div>

    <p className="text-3xl md:text-4xl lg:text-7xl ml-2 mr-2">:</p>

    <div className="flex flex-col justify-center items-center">
      <div>
        {hours < 10 ? "0" + hours : hours}
      </div>

      <p className="underline text-xs text-secondary text-white">Hours</p>
    </div>

    <p className="text-3xl md:text-4xl lg:text-7xl ml-2 mr-2">:</p>

    <div className="flex flex-col justify-center items-center">
      <div>
        {mins < 10 ? "0" + mins : mins}
      </div>

      <p className="underline text-xs text-secondary text-white">Minutes</p>
    </div>

    <p className="text-3xl md:text-4xl lg:text-7xl ml-2 mr-2">:</p>

    <div className="flex flex-col justify-center items-center">
      <div>
        {secs < 10 ? "0" + secs : secs}
      </div>

      <p className="underline text-xs text-secondary text-white">Seconds</p>
    </div>
  </div>
  );
};

export default Counter;
