import Head from "next/head";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import style from "./Layout.module.scss";

export function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className={style.navBar}>
        <Link href={"/"}>
          <a>
            <FaHome />
            <span>Home</span>
          </a>
        </Link>
      </nav>
      <>{props.children}</>
    </div>
  );
}
