// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

/**
 *         30
 *      /     \
 *    12       40
 *   /  \
 * 10   25
 *      / \
 *    8(I) 35(D)
 * 
 * 
 *               3
                / \
               2   5
              / \
             1   4
 */
export default function validateBST<T>(node: TreeNode<T> | undefined): boolean {
  if (!node) {
    return true;
  }
  return helper(node, -Infinity, Infinity);
}

function helper<T>(
  node: TreeNode<T> | undefined,
  min: number,
  max: number
): boolean {
  if (!node) return true;

  let val = node.value as number;

  if (val > max || val < min) return false;

  return helper(node.left, min, val) && helper(node.right, val, max);
}
