import { SetStateAction, useEffect, useState } from "react";
import Controller from "./Controller/Controller";
import Data from "./Data";

function HighOrLow({ count = 0 }) {
  const [gameData, setGameData] = useState<Array<number>>(null);
  const [swipeState, setSwipeState] = useState<string>();
  const [score, setScore] = useState<number>(0);
  const [turn, setTurn] = useState<number>(1);

  useEffect(() => {
    const data = Data({ count });
    setGameData(data);
  }, [count]);

  const getSwipe = (swipeState: SetStateAction<string>) => {
    setSwipeState(swipeState);
    if (swipeState === "none") return;
    if (
      (swipeState === "up" && gameData[turn] > gameData[turn - 1]) ||
      (swipeState === "down" && gameData[turn] < gameData[turn - 1])
    ) {
      setScore(score + 10);
      setTurn(turn + 1);
    } else {
      setScore(Math.max(0, score - 10));
    }
  };

  return (
    <>
      {gameData && (
        <>
          This number: {gameData[turn]}
          <br />
          Last number: {gameData[turn - 1]}
        </>
      )}
      <br />
      State: {swipeState}
      <br />
      Turn: {turn}
      <br />
      Score: {score}
      <Controller returnSwipe={getSwipe} />
    </>
  );
}

export default HighOrLow;
