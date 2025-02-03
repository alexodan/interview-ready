// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number
): Node<T> | undefined {
  let list = new LinkedList(head);
  let len = list.length();
  if (k < 1 || k > len) {
    return;
  }
  let slow: Node<T> | undefined = head;
  let fast: Node<T> | undefined = head;
  if (!head) return;
  for (let i = 0; i < k; i++) {
    fast = fast?.next;
  }
  while (fast) {
    slow = slow?.next;
    fast = fast.next;
  }
  return slow;
}
