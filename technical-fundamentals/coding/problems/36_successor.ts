// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  parent?: TreeNode<T>; // Link to parent node
};

export default function successor<T>(
  node: TreeNode<T>
): TreeNode<T> | undefined {
  if (!node) return;
  let arr: TreeNode<T>[] = [];
  let parent = node;
  let search = node;
  while (node.parent) {
    parent = node.parent;
    node = node.parent;
  }
  helper(parent!, arr);
  for (let i = 0; i < arr.length; i++) {
    if (search === arr[i]) {
      return arr[i + 1];
    }
  }
  return undefined;
}

function helper<T>(node: TreeNode<T> | undefined, arr: TreeNode<T>[]) {
  if (!node) return;
  helper(node.left, arr);
  arr.push(node); // arr = [2, 3]
  helper(node.right, arr);
}
