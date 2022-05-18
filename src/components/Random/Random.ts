class Random {
  number: number;
  constructor(max: number);
  constructor(min: number, max: number);
  constructor(min?: number, max?: number) {
    this.number = Math.floor(Math.random() * max + (min ?? 0));
  }
}

export default Random;
