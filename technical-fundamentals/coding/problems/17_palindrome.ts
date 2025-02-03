// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  if (!head) return true;
  let list = new LinkedList(head);
  let p = list.head;
  let len = list.length();
  let str = "";
  for (let i = 0; i < len; i++) {
    str += p?.value ? p.value : "";
    p = p?.next;
  }
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
