import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const { seconds, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  useEffect(() => {
    if (seconds == 0) pause();
  }, [pause, seconds]);

  return <>{seconds}</>;
}

export default Timer;
