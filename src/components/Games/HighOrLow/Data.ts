import Random from "../../Random/Random";

function Data(props: { count: number }) {
  let i = 1;
  const gameData = [0];
  while (i < props.count) {
    let number = new Random(1, 100).number;
    if (number == gameData[i - 1]) continue;
    gameData.push(number);
    i++;
  }
  return gameData;
}

export default Data;
