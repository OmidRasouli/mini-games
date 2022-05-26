import { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";
import { Data } from "./Data";
import style from "./FollowTheLeader.module.scss";

interface Animation {
  animate: {
    opacity?: Array<number>;
  };
  transition: Transition;
}

function FollowTheLeader({ count, checkAnswer, AnswerResult }) {
  const [gameData, setGameData] = useState<Array<Array<number>>>(
    Data({ count })
  );
  const [turn, setTurn] = useState<number>(0);
  const [animation, setAnimation] = useState<Array<Animation>>(new Array(9));
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  let animationDelay = turn === 0 ? 0.2 : 0.1;
  let animationGap = 0.15;
  let animationDuration = 0.2;

  useEffect(() => {
    setTimeout(() => {
      const animationList: Array<Animation> = new Array(9);
      for (let i = 0; i < 9; i++) {
        animationList[i] = {
          animate: { opacity: [0, gameData[turn].includes(i) ? 1 : 0] },
          transition: {
            delay: gameData[turn].indexOf(i) * animationGap + animationDelay,
            duration: animationDuration,
          },
        };
      }
      setAnimation(animationList);
    }, 500);
  }, [turn]);

  const FollowButton = (order) => {
    if (!gameData[turn].includes(order)) return;
    if (gameData[turn][buttonIndex] === order) {
      let buttonIndexCache = buttonIndex + 1;
      setButtonIndex(buttonIndexCache);
      const animationList = animation;
      animationList[order] = {
        animate: { opacity: [animation[order].animate.opacity[1], 0] },
        transition: {
          delay: 0,
          duration: animationDuration,
        },
      };
      setAnimation(animationList);
      if (gameData[turn].length === buttonIndexCache) {
        setTurn(turn + 1);
        checkAnswer(10);
        AnswerResult(1);
        setButtonIndex(0);
      }
    } else {
      const animationList: Array<Animation> = new Array(9);
      for (let i = 0; i < 9; i++) {
        animationList[i] = {
          animate: {
            opacity: [animation[i].animate.opacity[1], 0],
          },
          transition: {
            delay: 0,
            duration: animationDuration,
          },
        };
      }
      setAnimation(animationList);
      setButtonIndex(0);
      checkAnswer(-10);
      AnswerResult(-1);
      setTimeout(() => {
        const animationReplay: Array<Animation> = new Array(9);
        for (let i = 0; i < 9; i++) {
          animationReplay[i] = {
            animate: { opacity: [0, gameData[turn].includes(i) ? 1 : 0] },
            transition: {
              delay: gameData[turn].indexOf(i) * animationGap + animationDelay,
              duration: animationDuration,
            },
          };
        }
        setAnimation(animationReplay);
      }, 500);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.followTheLeader}>
        {animation.map((animate, i) => (
          <motion.button
            key={i}
            className={style.button}
            {...animate}
            initial={{ opacity: 0 }}
            onClick={() => FollowButton(i)}
          ></motion.button>
        ))}
      </div>
    </div>
  );
}

export default FollowTheLeader;
