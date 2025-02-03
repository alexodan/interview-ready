// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a->b->c->d->e->f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number
): Node<T> | undefined {
  let p: Node<T> | undefined = head;
  let list = new LinkedList(head);
  let len = list.length();
  if (position < 1 || len <= 2) {
    return head;
  }
  for (let i = 0; i < position; i++) {
    p = p?.next;
  }
  if (!p) {
    return head;
  }
  let next = p.next;
  p.value = next!.value;
  p.next = next!.next;
  return head;
}
