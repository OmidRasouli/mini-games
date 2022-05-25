import Link from "next/link";
import style from "./Sad.module.scss";

export function Sad() {
  return (
    <div className={style.sad}>
      <div className={style.face}>
        <div className={style.eyes}>
          <div></div>
          <div></div>
        </div>
        <div className={style.mouth}>
          <Link href="/">
            <a>Let&apos;s play</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
