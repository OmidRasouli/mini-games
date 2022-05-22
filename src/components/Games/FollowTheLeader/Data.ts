import { Clamp, Random } from "../../Math/Math";

export function Data({ count }) {
  const gameData: Array<Array<number>> = [];
  let buttonsCount = 3;
  for (let i = 1; i < count + 1; i++) {
    const level: Set<number> = new Set();
    while (level.size < buttonsCount) {
      level.add(new Random(0, 9).Random);
    }
    if (i % 11 == 0) Clamp(++buttonsCount, 3, 9);
    gameData.push(Array.from(level));
  }
  return Array.from(gameData);
}
