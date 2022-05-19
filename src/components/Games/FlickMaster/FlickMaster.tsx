import { useState } from "react";
import Data from "./Data";

function FlickMaster({ count }) {
  const [gameData, setGameData] = useState<Array<Array<number>>>(
    Data({ count })
  );
  return <></>;
}

export default FlickMaster;
