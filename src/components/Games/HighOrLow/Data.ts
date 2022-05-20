import { Random } from "../../Math/Math";

function Data(props: { count: number }) {
  let i = 1;
  const gameData = [0];
  while (i < props.count) {
    let number = new Random(1, 100).Random;
    if (number == gameData[i - 1]) continue;
    gameData.push(number);
    i++;
  }
  return gameData;
}

export default Data;
