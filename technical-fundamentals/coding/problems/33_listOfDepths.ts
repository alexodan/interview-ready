// 3. *List of Depths*:

import { LinkedList } from "./10_LinkedList";
import { Queue } from "./30_trees";

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

export default function listOfDepths<T>(
  root: TreeNode<T> | null
): ListNode<T>[] {
  if (!root) return [];
  let queue = new Queue<TreeNode<T>>();
  queue.enqueue(root);
  return helper(queue);
}

function helper<T>(queue: Queue<TreeNode<T>>) {
  let lists: ListNode<T>[] = [];
  while (!queue.isEmpty()) {
    let list = new LinkedList<T>();
    let size = queue.size();
    for (let i = 0; i < size; i++) {
      const n = queue.dequeue()!;
      list.push(n.value);
      if (n.left) queue.enqueue(n.left);
      if (n.right) queue.enqueue(n.right);
    }
    lists.push(list.head as ListNode<T>);
  }
  return lists;
}
