// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

// Stack | Queue
// 4     | 1
// 3     | 2
// 2     | 3
// 1     | 4

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

export default class MyQueue<T> {
  stack: Stack<T>;
  queue: Stack<T>;

  constructor() {
    this.stack = new Stack();
    this.queue = new Stack();
  }

  enqueue(value: T): void {
    this.stack.push(value);
  }

  dequeue(): T | undefined {
    if (this.queue.isEmpty()) {
      while (!this.stack.isEmpty()) {
        let val = this.stack.pop();
        this.queue.push(val!);
      }
    }
    return this.queue.pop();
  }

  peek(): T | undefined {
    if (this.queue.isEmpty()) {
      while (!this.stack.isEmpty()) {
        let val = this.stack.pop();
        this.queue.push(val!);
      }
    }
    return this.queue.peek();
  }

  isEmpty(): boolean {
    return this.queue.isEmpty() && this.stack.isEmpty();
  }
}
