import { useState } from "react";
import style from "./SwipeDetector.module.scss";

interface Point {
  x: number;
  y: number;
}

interface CallBackFunctions {
  returnSwipeVertical?: any;
  returnSwipeHorizontal?: any;
  returnSwipeCross?: any;
}

function SwipeDetector(props: CallBackFunctions) {
  const [mouseDownPosition, setMouseDownPosition] = useState<Point>();
  const threshold: number = 50;

  function MouseDown(e) {
    setMouseDownPosition({ x: e.clientX, y: e.clientY });
  }
  function MouseUp(e) {
    const verticalDirection = e.clientY - mouseDownPosition.y;
    const horizontalDirection = e.clientX - mouseDownPosition.x;

    let stateVertical = verticalDirection < 0 ? "up" : "down";
    stateVertical =
      Math.abs(verticalDirection) < threshold ? "none" : stateVertical;

    let stateHorizontal = horizontalDirection < 0 ? "left" : "right";
    stateHorizontal =
      Math.abs(horizontalDirection) < threshold ? "none" : stateHorizontal;

    props.returnSwipeVertical && props.returnSwipeVertical(stateVertical);
    props.returnSwipeHorizontal && props.returnSwipeHorizontal(stateHorizontal);

    const cross =
      Math.abs(horizontalDirection) > Math.abs(verticalDirection)
        ? stateHorizontal
        : stateVertical;

    props.returnSwipeCross && props.returnSwipeCross(cross);
  }

  return (
    <div
      onMouseDown={MouseDown}
      onMouseUp={MouseUp}
      className={style.controller}
    ></div>
  );
}

export default SwipeDetector;
