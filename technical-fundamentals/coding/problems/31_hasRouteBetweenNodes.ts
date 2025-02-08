// 1. *Route Between Nodes*:

import { Queue } from "./30_trees";

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode
): boolean {
  // 1 -> 2 -> 3 -> 4
  //      |         |
  //      5         6

  // start = 1, end = 4
  if (!start || !end) return false;
  if (start === end) return true;
  let queue = new Queue<GraphNode>();
  let visited = new Set<GraphNode>();
  queue.enqueue(start);
  return helper(end, queue, visited);
}

function helper(
  end: GraphNode,
  queue: Queue<GraphNode>,
  visited: Set<GraphNode>
): boolean {
  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    if (visited.has(node)) continue;
    visited.add(node);
    if (node === end) return true;
    node.neighbors.forEach((ne) => {
      queue.enqueue(ne);
    });
  }
  return false;
}
