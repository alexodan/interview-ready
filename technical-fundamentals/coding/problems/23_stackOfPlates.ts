// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
  capacity: number;
  arr: T[];
  last: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.arr = new Array(capacity);
    this.last = -1;
  }

  push(value: T): void {
    if (this.last + 1 === this.capacity) {
      this.arr = this.arr.concat(new Array(this.capacity));
      this.capacity += this.capacity;
    }
    this.last++;
    this.arr[this.last] = value;
  }

  pop(): T | undefined {
    if (this.last === -1) return;
    let val = this.arr[this.last];
    this.last--;
    return val;
  }
}
