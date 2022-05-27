import { useRouter } from "next/router";
import { FaStar, FaCheck, FaTimes, FaMoon } from "react-icons/fa";
import style from "./ScoreBoard.module.scss";
import { motion } from "framer-motion";

export default function ScoreBoard() {
  const router = useRouter();
  const { game } = router.query;
  return (
    <div className={style.container}>
      {localStorage.getItem(`currentScore${game}`) >
        localStorage.getItem(`highScore${game}`) && (
        <div className={style.newHighScore}>
          <motion.span
            animate={{ scale: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaMoon className={style.faMoon} />
          </motion.span>
          New high score
          <motion.span
            animate={{ scale: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaMoon className={style.faMoon} />
          </motion.span>
        </div>
      )}
      <div>Current score</div>
      <div>
        <span>
          <FaStar className={style.faStar} />
        </span>
        <span>{localStorage.getItem(`currentScore${game}`)}</span>
      </div>
      <div>
        <span>
          <FaCheck className={style.faCheck} />
        </span>
        <span>{localStorage.getItem(`currentWrongAnswers${game}`)}</span>
      </div>
      <div>
        <span>
          <FaTimes className={style.faTimes} />
        </span>
        <span>{localStorage.getItem(`currentCorrectAnswers${game}`)}</span>
      </div>
      <div className={style.highScore}>
        <div>High score: {localStorage.getItem(`highScore${game}`)}</div>
        <div>
          Correct answers: {localStorage.getItem(`correctAnswers${game}`)}
        </div>
        <div>Wrong answers: {localStorage.getItem(`wrongAnswers${game}`)}</div>
      </div>
    </div>
  );
}
