// 7. *Build Order*:

// You are given a list of projects and a list of dependencies
// (which is a list of pairs of projects, where the second project is
// dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built. If there is no valid build order, return an error.

// ```
// EXAMPLE Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: F, e, a, b, d, c
// ```

function buildOrder(
  projects: string[],
  dependencies: [string, string][]
): string[] {
  const graph: Map<string, string[]> = new Map();
  const inDegree: Map<string, number> = new Map();

  for (const project of projects) {
    graph.set(project, []);
    inDegree.set(project, 0);
  }

  for (const [prerequisite, dependent] of dependencies) {
    const dependents = graph.get(prerequisite) || [];
    dependents.push(dependent);
    graph.set(prerequisite, dependents);

    inDegree.set(dependent, (inDegree.get(dependent) || 0) + 1);
  }

  const nodesWithNoDependencies: string[] = [];
  for (const project of projects) {
    if (inDegree.get(project) === 0) {
      nodesWithNoDependencies.push(project);
    }
  }

  const result: string[] = [];

  while (nodesWithNoDependencies.length > 0) {
    nodesWithNoDependencies.sort((a, b) => a.localeCompare(b));

    const current = nodesWithNoDependencies.shift()!;
    result.push(current);

    const dependents = graph.get(current) || [];
    for (const dependent of dependents) {
      const newInDegree = (inDegree.get(dependent) || 0) - 1;
      inDegree.set(dependent, newInDegree);

      if (newInDegree === 0) {
        nodesWithNoDependencies.push(dependent);
      }
    }
  }

  if (result.length !== projects.length) {
    throw new Error("No valid build order exists");
  }

  return result;
}

export default buildOrder;
