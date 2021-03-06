import { Random } from "../../Math/Math";

function Data(props: { count: number }): Array<Array<number>> {
  const gameData = [[new Random(0, 4).Random, new Random(0, 2).Random]];
  while (gameData.length < props.count) {
    const direction = new Random(0, 4).Random;
    const revert = new Random(0, 2).Random;
    gameData.push([direction, revert]);
    if (
      gameData[gameData.length - 1][0] === gameData[gameData.length - 2][0] &&
      gameData[gameData.length - 1][1] === gameData[gameData.length - 2][1]
    )
      gameData.pop();
  }
  return gameData;
}

export default Data;
