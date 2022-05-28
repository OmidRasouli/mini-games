export class Random {
  private number: number;
  constructor(max: number);
  constructor(min: number, max: number);
  constructor(min?: number, max?: number) {
    this.number = Math.floor(Math.random() * (max ?? 1) + (min ?? 0));
  }

  public get Random(): number {
    return this.number;
  }
}

export function Clamp(value: number, min: number, max: number) {
  if (min > max) [max, min] = [min, max];
  return Math.min(max, Math.max(value, min));
}
