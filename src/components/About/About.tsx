import { FaGithub, FaLinkedin } from "react-icons/fa";
import style from "./About.module.scss";

export default function About() {
  return (
    <div className={style.details}>
      <h1>I'm OMiD</h1>
      <h2>30 years old</h2>
      <p className={style.description}>
        You can follow me on{" "}
        <a
          href="https://www.linkedin.com/in/omid-rasouli-15115695/"
          target={"_blank"}
        >
          <FaLinkedin className={style.social} />
        </a>
        or you can check out my{" "}
        <a href="https://github.com/OmidRasouli?tab=overview" target={"_blank"}>
          <FaGithub className={style.social} />
        </a>
      </p>
    </div>
  );
}
