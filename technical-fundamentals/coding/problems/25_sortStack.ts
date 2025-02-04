// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export class Stack<T> {
  arr: T[];

  constructor() {
    this.arr = [];
  }

  push(val: T) {
    this.arr.push(val);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  peek(): T | undefined {
    return this.arr[this.arr.length - 1];
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }
}

export default class SortStack<T> {
  helper: Stack<T>;
  stack: Stack<T>;

  constructor() {
    this.helper = new Stack<T>();
    this.stack = new Stack<T>();
  }

  debug() {
    return this.stack;
  }

  push(value: T): void {
    if (this.stack.isEmpty()) {
      this.stack.push(value);
      return;
    }
    while (!this.stack.isEmpty() && this.stack.peek()! < value) {
      this.helper.push(this.stack.pop()!);
    }
    this.stack.push(value);
    while (!this.helper.isEmpty()) {
      this.stack.push(this.helper.pop()!);
    }
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack.peek();
  }

  isEmpty(): boolean {
    return this.stack.isEmpty();
  }
}
