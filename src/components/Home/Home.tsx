import style from "./Home.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <Link href="/menu">
          <motion.a
            className={style.button}
            animate={{ x: [-40, 0], opacity: [0, 1] }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut", delay: 0.5 }}
          >
            Play
          </motion.a>
        </Link>
        <Link href="/help">
          <motion.a
            className={style.button}
            animate={{ x: [40, 0], opacity: [0, 1] }}
            initial={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut", delay: 0.6 }}
          >
            Help
          </motion.a>
        </Link>
        <Link href="/about">
          <motion.a
            className={style.button}
            animate={{ x: [-40, 0], opacity: [0, 1] }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut", delay: 0.7 }}
          >
            About
          </motion.a>
        </Link>
        <Link href="/quit">
          <motion.a
            className={style.button}
            animate={{ x: [40, 0], opacity: [0, 1] }}
            initial={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut", delay: 0.8 }}
          >
            Quit
          </motion.a>
        </Link>
      </div>
    </div>
  );
}
