import style from "./Home.module.scss";

export function Home() {
  return (
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
  );
}
