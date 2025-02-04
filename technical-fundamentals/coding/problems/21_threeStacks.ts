// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
  private array: T[];
  private last: number[];

  constructor(arrayLength: number) {
    this.array = new Array(arrayLength * 3);
    this.last = [-1, -1, -1];
  }

  push(stackNum: number, value: T): void {
    if (stackNum < 0 || stackNum > 2) return;
    let stack = stackNum * (this.array.length / 3);
    this.last[stackNum]++;
    this.array[stack + this.last[stackNum]] = value;
  }

  pop(stackNum: number): T | undefined {
    if (stackNum < 0 || stackNum > 2) return;
    if (this.last[stackNum] === -1) return undefined;
    let stack = stackNum * (this.array.length / 3);
    let value = this.array[stack + this.last[stackNum]];
    this.last[stackNum]--;
    return value;
  }

  peek(stackNum: number): T | undefined {
    if (stackNum < 0 || stackNum > 2) return;
    let stack = stackNum * (this.array.length / 3);
    return this.array[stack];
  }
}
