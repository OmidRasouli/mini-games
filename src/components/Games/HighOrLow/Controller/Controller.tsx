import { useState } from "react";
import style from "./Controller.module.scss";

interface Point {
  x: number;
  y: number;
}

function Controller({ returnSwipe }) {
  const [mouseDownPosition, setMouseDownPosition] = useState<Point>();
  const threshold: number = 50;

  function MouseDown(e) {
    setMouseDownPosition({ x: e.clientX, y: e.clientY });
  }
  function MouseUp(e) {
    const mouseDirection = e.clientY - mouseDownPosition.y;

    let state = mouseDirection < 0 ? "up" : "down";
    state = Math.abs(mouseDirection) < threshold ? "none" : state;
    returnSwipe(state);
  }

  return (
    <div
      onMouseDown={MouseDown}
      onMouseUp={MouseUp}
      className={style.controller}
    ></div>
  );
}

export default Controller;
