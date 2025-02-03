// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = this.head;
  }

  push(value: T) {
    if (!this.head) {
      this.head = { value };
      this.tail = this.head;
    } else {
      let newNode = { value };
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  filter() {}
  visit() {}
  remove() {}
  merge() {}

  print() {
    let ptr = this.head;
    let output = "";
    while (ptr) {
      output += ptr.value;
      if (ptr.next) {
        output += "->";
      }
      ptr = ptr.next;
    }
    return output;
  }

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length() {
    let ptr = this.head;
    let i = 0;
    while (ptr) {
      i++;
      ptr = ptr.next;
    }
    return i;
  }
}

const list = new LinkedList();
