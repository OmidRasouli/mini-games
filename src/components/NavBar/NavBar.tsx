import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={style.navBar}>
      <Link to={"/"}>
        <FaHome />
        <span>Home</span>
      </Link>
    </nav>
  );
}
