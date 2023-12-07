import { useCallback, useEffect, useState } from "react";

import { getPadTime } from "../utils/getPadTime";

export const useTimer = (time: number) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isCounting, setIsCounting] = useState(true);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  // @ts-ignore
  const seconds = getPadTime(timeLeft - minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const restart = useCallback((newTime: number) => {
    setIsCounting(true);
    setTimeLeft(newTime);
  }, []);

  return [{ minutes, seconds }, restart] as [
    { minutes: string; seconds: string },
    (value: number) => void
  ];
};
