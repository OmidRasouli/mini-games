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
  const [correct, setCorrect] = useState<number>(0);
  const [wrong, setWrong] = useState<number>(0);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 20);

  const checkAnswer = (getScore: number) => {
    setScore(getScore + score);
  };
  const AnswerResult = (result: number) => {
    if (result === 1) {
      setCorrect(correct + 1);
    } else if (result === -1) {
      setWrong(wrong + 1);
    }
  };

  function RenderGame(game: string) {
    switch (game) {
      case "HighOrLow":
        return (
          <HighOrLow
            count={60}
            checkAnswer={checkAnswer}
            AnswerResult={AnswerResult}
          />
        );
      case "FlickMaster":
        return (
          <FlickMaster
            count={60}
            checkAnswer={checkAnswer}
            AnswerResult={AnswerResult}
          />
        );
      case "FollowTheLeader":
        return (
          <FollowTheLeader
            count={60}
            checkAnswer={checkAnswer}
            AnswerResult={AnswerResult}
          />
        );
      case "UnfollowTheLeader":
        return (
          <UnfollowTheLeader
            count={60}
            checkAnswer={checkAnswer}
            AnswerResult={AnswerResult}
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
