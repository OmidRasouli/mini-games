import { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";
import { Data } from "./Data";
import style from "./FollowTheLeader.module.scss";

interface Animation {
  animate: {
    opacity?: number;
  };
  transition: Transition;
}

function FollowTheLeader({ count }) {
  const [gameData, setGameData] = useState<Array<Array<number>>>(
    Data({ count })
  );
  const [turn, setTurn] = useState<number>(0);
  const [animation, setAnimation] = useState<Array<Animation>>(new Array(9));

  useEffect(() => {
    const animationList: Array<Animation> = new Array(9);
    console.log(gameData[turn]);
    for (let i = 0; i < 9; i++) {
      animationList[i] = {
        animate: { opacity: gameData[turn].includes(i) ? 1 : 0 },
        transition: {
          delay: gameData[turn].indexOf(i) * 0.2 + 0.1,
          duration: 0.3,
        },
      };
    }
    setAnimation(animationList);
  }, [turn]);

  return (
    <div className={style.container}>
      <div className={style.followTheLeader}>
        {animation.map((animate, i) => (
          <motion.button
            key={i}
            className={style.button}
            {...animate}
            initial={{ opacity: 0 }}
          ></motion.button>
        ))}
      </div>
    </div>
  );
}

export default FollowTheLeader;
