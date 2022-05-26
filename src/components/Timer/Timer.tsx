import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import style from "./Timer.module.scss";

function Timer({ expiryTimestamp }) {
  const router = useRouter();
  const { seconds, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => router.push("/"),
  });
  useEffect(() => {
    if (seconds == 0) pause();
  }, [pause, seconds]);

  return (
    <div className={style.timer}>
      00:{`${seconds < 10 ? "0" : ""}${seconds}`}
    </div>
  );
}

export default Timer;
