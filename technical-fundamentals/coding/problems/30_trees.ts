// Write the basic tree algorithms of Depth-first-search and Breadth-first search.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export class Tree<T> {
  private bfsHelper(
    visit: (node: TreeNode<T>) => void,
    queue: Queue<TreeNode<T>>
  ) {
    while (!queue.isEmpty()) {
      const n = queue.dequeue()!;
      visit(n);
      if (n.left) queue.enqueue(n.left);
      if (n.right) queue.enqueue(n.right);
    }
  }

  bfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) return;
    let queue = new Queue<TreeNode<T>>();
    queue.enqueue(node);
    this.bfsHelper(visit, queue);
  }

  dfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) return;
    visit(node);
    this.dfs(node.left, visit);
    this.dfs(node.right, visit);
  }
}

export class Queue<T> {
  arr: T[];

  constructor() {
    this.arr = [];
  }

  enqueue(val: T): void {
    this.arr.push(val);
  }

  dequeue(): T | undefined {
    return this.arr.shift();
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }

  peek(): T | undefined {
    return this.arr[0];
  }

  size(): number {
    return this.arr.length;
  }

  clear(): void {
    this.arr = [];
  }
}
