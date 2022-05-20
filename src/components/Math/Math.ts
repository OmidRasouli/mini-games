export class Random {
  private number: number;
  constructor(max: number);
  constructor(min: number, max: number);
  constructor(min?: number, max?: number) {
    this.number = Math.floor(Math.random() * max + (min ?? 0));
  }

  public get Random(): number {
    return this.number;
  }
}
