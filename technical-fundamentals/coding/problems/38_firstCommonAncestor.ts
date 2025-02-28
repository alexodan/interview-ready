// 8. *First Common Ancestor*:

// Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

/**
 *          5
 *    2     |      1
 * 10 |     |  12  |  20
 */

export default function firstCommonAncestor<T>(
  root: TreeNode<T> | undefined,
  p: TreeNode<T>,
  q: TreeNode<T>
): TreeNode<T> | undefined {
  if (!root) {
    return undefined;
  }
  if (root === p || root === q) {
    return root;
  }

  let left = firstCommonAncestor(root.left, p, q);
  let right = firstCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}
