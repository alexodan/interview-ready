// *Sum Lists*: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295
// 617 + 295 = 912
// Output:9 -> 1 -> 2,That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined
): Node<number> | undefined {
  let str1 = "",
    str2 = "";
  let p1 = list1;
  let p2 = list2;
  let list = new LinkedList<number>();
  if (!p1 && !p2) {
    return undefined;
  }
  while (p1 || p2) {
    str1 += p1 ? p1.value : "";
    str2 += p2 ? p2.value : "";
    p1 = p1?.next;
    p2 = p2?.next;
  }
  let sum = Number(str1) + Number(str2);
  sum
    .toString()
    .split("")
    .forEach((c) => {
      list.push(Number(c));
    });
  return list.head;
}
