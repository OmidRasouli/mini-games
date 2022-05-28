import style from "./Home.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={style.home}>
      <div className={style.welcome}>
        Welcome to the{" "}
        <div className={style.omid}>
          <span className={style.o}>O</span>M
          <span className={style.i}>
            <span className={style.dot}></span>
            <span className={style.rect}></span>
          </span>
          D
        </div>
        &apos;s Playground!
      </div>
      <div className={style.menu}>
        <motion.div
          className={style.button}
          animate={{ x: [-40, 0], opacity: [0, 1] }}
          initial={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut", delay: 0.5 }}
        >
          <Link to={"/menu"}>Play</Link>
        </motion.div>
        <motion.div
          className={style.button}
          animate={{ x: [40, 0], opacity: [0, 1] }}
          initial={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut", delay: 0.6 }}
        >
          <Link to={"/help"}>Help</Link>
        </motion.div>
        <motion.div
          className={style.button}
          animate={{ x: [-40, 0], opacity: [0, 1] }}
          initial={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut", delay: 0.7 }}
        >
          <Link to={"/about"}>About</Link>
        </motion.div>
        <motion.div
          className={style.button}
          animate={{ x: [40, 0], opacity: [0, 1] }}
          initial={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut", delay: 0.8 }}
        >
          <Link to={"/quit"}>Quit</Link>
        </motion.div>
      </div>
    </div>
  );
}
