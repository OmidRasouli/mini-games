import { useEffect, useState } from "react";
import Data from "./Data";
import { motion, Transition } from "framer-motion";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import style from "./FlickMaster.module.scss";
import SwipeDetector from "../../Controller/SwipeDetector/SwipeDetector";

interface Animation {
  animate: {
    scale?: Array<number>;
    opacity?: Array<number>;
    rotate?: number;
  };
  transition: Transition;
}

interface Parameters {
  count: number;
  CheckAnswer: Function;
  AnswerResult: Function;
}

function FlickMaster({ count, CheckAnswer, AnswerResult }: Parameters) {
  const [gameData, setGameData] = useState<Array<Array<number>>>(
    Data({ count })
  );
  const [turn, setTurn] = useState<number>(0);
  const [colorClass, setColorClass] = useState<string>(style.blue);
  const [animation, setAnimation] = useState<Animation>();

  useEffect(() => {
    setColorClass(gameData[turn][1] === 0 ? style.blue : style.pink);
    setAnimation({
      animate: {
        rotate: gameData[turn][0] * 90,
      },
      transition: { duration: 0.2 },
    });
  }, [gameData, turn]);

  const GetSwipe = (swipeState: string) => {
    if (swipeState === "none") return;

    if (Validation(swipeState)) {
      setTurn(turn + 1);
      CheckAnswer(10);
      AnswerResult(1);
    } else {
      CheckAnswer(-10);
      AnswerResult(-1);
      setAnimation({
        animate: {
          rotate: gameData[turn][0] * 90,
          scale: [1, 1.1, 1],
          opacity: [1, 0.9, 1],
        },
        transition: { duration: 0.13, repeat: 3 },
      });
    }
  };

  const Validation = (swipeDirection: string) => {
    if (swipeDirection === "up") {
      if (
        (gameData[turn][0] === 0 && gameData[turn][1] === 0) ||
        (gameData[turn][0] === 2 && gameData[turn][1] === 1)
      ) {
        return true;
      }
    } else if (swipeDirection === "down") {
      if (
        (gameData[turn][0] === 2 && gameData[turn][1] === 0) ||
        (gameData[turn][0] === 0 && gameData[turn][1] === 1)
      ) {
        return true;
      }
    } else if (swipeDirection === "right") {
      if (
        (gameData[turn][0] === 1 && gameData[turn][1] === 0) ||
        (gameData[turn][0] === 3 && gameData[turn][1] === 1)
      ) {
        return true;
      }
    } else if (swipeDirection === "left") {
      if (
        (gameData[turn][0] === 3 && gameData[turn][1] === 0) ||
        (gameData[turn][0] === 1 && gameData[turn][1] === 1)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={style.container}>
      <motion.div className={style.container} {...animation}>
        <BsFillArrowUpSquareFill className={`${style.arrow} ${colorClass}`} />
      </motion.div>
      <SwipeDetector returnSwipeCross={GetSwipe} />
    </div>
  );
}

export default FlickMaster;
