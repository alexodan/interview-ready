// 9. *BST Sequences*: A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// ```
// EXAMPLE Input:
// Output: {2, 1, 3}, {2, 3, 1}
// ```

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function bstSequences<T>(root: TreeNode<T>): T[][] {
  if (!root) return [[]];

  const result: T[][] = [];
  const start: T[] = [root.value];

  const leftSeq = bstSequences(root.left!);
  const rightSeq = bstSequences(root.right!);

  for (const left of leftSeq) {
    for (const right of rightSeq) {
      const permutations: T[][] = [];
      permutateLists(left, right, permutations, start);
      result.push(...permutations);
    }
  }

  return result;
}

function permutateLists<T>(first: T[], second: T[], lists: T[][], start: T[]) {
  if (first.length === 0 || second.length === 0) {
    const result = [...start, ...first, ...second];
    lists.push(result);
    return;
  }

  const headFirst = first[0];
  const tailFirst = first.slice(1);
  start.push(headFirst);
  permutateLists(tailFirst, second, lists, start);
  start.pop();

  const headSecond = second[0];
  const tailSecond = second.slice(1);
  start.push(headSecond);
  permutateLists(first, tailSecond, lists, start);
  start.pop();
}
