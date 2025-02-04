// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
  arr: T[];
  mins: T[];

  constructor() {
    this.arr = [];
    this.mins = [];
  }

  push(value: T): void {
    let currMin = this.mins[this.mins.length - 1];
    if (currMin === undefined) {
      this.mins.push(value);
    }
    if (currMin > value) {
      this.mins.push(value);
    }
    this.arr.push(value);
  }

  pop(): T | undefined {
    if (this.arr.length === 0) return undefined;
    let val = this.arr.pop();
    if (val === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }
    return val;
  }

  min(): T | undefined {
    return this.mins[this.mins.length - 1];
  }
}
