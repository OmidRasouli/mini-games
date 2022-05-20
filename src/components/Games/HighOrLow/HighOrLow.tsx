import { useEffect, useRef, useState } from "react";
import SwipeDetector from "../../Controller/SwipeDetector/SwipeDetector";
import Data from "./Data";
import { motion, Transition } from "framer-motion";
import style from "./HighOrLow.module.scss";

interface Animation {
  animate: {
    x?: Array<number>;
    y?: Array<number>;
    scale?: Array<number>;
    opacity?: Array<number>;
  };
  transition: Transition;
}

function HighOrLow({ count = 0 }) {
  const [gameData, setGameData] = useState<Array<number>>(Data({ count }));
  const [score, setScore] = useState<number>(0);
  const [turn, setTurn] = useState<number>(1);
  const divMotion = useRef<HTMLInputElement>();
  const [numberToShow, setNumberToShow] = useState<number>(0);
  const [animation, setAnimation] = useState<Animation>();

  const CenterHorizontal = () => {
    const widthElement = divMotion.current.clientWidth;
    return (screen.width - widthElement) * 0.5;
  };

  useEffect(() => {
    setNumberToShow(0);
    const width = CenterHorizontal();

    setAnimation({
      animate: {
        x: [-200, width, width, width, width, screen.width + 300],
      },
      transition: {
        duration: 1,
      },
    });
    setTimeout(() => {
      setNumberToShow(gameData[turn]);
      setAnimation({
        animate: { x: [-200, width], y: [0, 0], scale: [1, 1] },
        transition: { duration: 0.17 },
      });
    }, 1000);
  }, [count]);

  const getSwipe = (swipeState: string) => {
    if (swipeState === "none") return;
    if (
      (swipeState === "up" && gameData[turn] > gameData[turn - 1]) ||
      (swipeState === "down" && gameData[turn] < gameData[turn - 1])
    ) {
      setScore(score + 10);
      let turnCache = turn;
      setTurn(turn + 1);
      console.log(gameData);

      const width = CenterHorizontal();
      setAnimation({
        animate: {
          x: [width, width],
          y: [0, (screen.height + 200) * (swipeState === "up" ? -1 : 1)],
        },
        transition: {
          duration: 0.17,
        },
      });
      setTimeout(() => {
        setNumberToShow(gameData[turnCache + 1]);
        setAnimation({
          animate: { x: [-200, width], y: [0, 0] },
          transition: { duration: 0.17 },
        });
      }, 170);
    } else {
      setAnimation({
        animate: {
          x: animation.animate.x,
          y: animation.animate.y,
          scale: [1, 1.1, 1],
          opacity: [1, 0.9, 1],
        },
        transition: { duration: 0.13, repeat: 3 },
      });
      setScore(Math.max(0, score - 10));
    }
  };

  return (
    <div className={style.container}>
      <motion.div
        ref={divMotion}
        {...animation}
        className={style.frame}
        initial={{ x: -200, y: 0, scale: 1 }}
      >
        {numberToShow}
      </motion.div>
      <SwipeDetector returnSwipeVertical={getSwipe} />
    </div>
  );
}

export default HighOrLow;
