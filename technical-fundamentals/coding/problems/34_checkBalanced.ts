// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
  if (!tree) return true;
  let leftHeight = height(tree.left);
  let rightHeight = height(tree.right);
  let diff = Math.abs(leftHeight - rightHeight);
  if (diff > 1) {
    return false;
  }
  return checkBalanced(tree.left) && checkBalanced(tree.right);
}

function height<T>(tree?: TreeNode<T> | null): number {
  if (!tree) {
    return 0;
  }
  let left = height(tree.left);
  let right = height(tree.right);
  return 1 + Math.max(left, right);
}
