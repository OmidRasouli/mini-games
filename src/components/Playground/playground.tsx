import { useState } from "react";
import Timer from "../Timer/Timer";
import HighOrLow from "../Games/HighOrLow/HighOrLow";
import FlickMaster from "../Games/FlickMaster/FlickMaster";
import FollowTheLeader from "../Games/FollowTheLeader/FollowTheLeader";
import UnfollowTheLeader from "../Games/UnfollowTheLeader/UnfollowTheLeader";
import style from "./playground.module.scss";

export function PlayGround(props: { game: string }) {
  const [choosenGame] = useState<string>(props.game);
  const [score, setScore] = useState<number>(0);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 20);

  const checkAnswer = (getScore: number) => {
    setScore(getScore + score);
  };
  function RenderGame(game: string) {
    switch (game) {
      case "HighOrLow":
        return (
          <HighOrLow
            count={60}
            checkAnswer={checkAnswer}
          />
        );
      case "FlickMaster":
        return (
          <FlickMaster
            count={60}
            checkAnswer={checkAnswer}
          />
        );
      case "FollowTheLeader":
        return (
          <FollowTheLeader
            count={60}
            checkAnswer={checkAnswer}
          />
        );
      case "UnfollowTheLeader":
        return (
          <UnfollowTheLeader
            count={60}
            checkAnswer={checkAnswer}
          />
        );

      default:
        return <></>;
    }
  }

  return (
    <div className={style.playground}>
      <Timer expiryTimestamp={time} />
      <div>score: {score}</div>
      {RenderGame(choosenGame)}
    </div>
  );
}
