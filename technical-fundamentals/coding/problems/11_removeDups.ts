// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  let ptr = head;
  if (!ptr) return;
  let set = new Set<T>([ptr.value]);
  while (ptr) {
    let next = ptr.next;
    if (next && set.has(next.value)) {
      ptr.next = next.next;
      continue;
    }
    if (next) {
      set.add(next.value);
    }
    ptr = ptr.next;
  }
  return head;
}
