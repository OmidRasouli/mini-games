import Random from "../../Random/Random";

function Data(props: { count: number }): Array<Array<number>> {
  const gameData = [[new Random(0, 4).number, new Random(0, 2).number]];
  while (gameData.length < props.count) {
    const direction = new Random(0, 4).number;
    const revert = new Random(0, 2).number;
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
