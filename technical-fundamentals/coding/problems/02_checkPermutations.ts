// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < s1.length; i++) {
    let c1 = s1[i];
    let c2 = s2[i];
    if (!map1.get(c1)) {
      map1.set(c1, 0);
    }
    if (!map2.get(c2)) {
      map2.set(c2, 0);
    }
    map1.set(c1, map1.get(c1) + 1);
    map2.set(c2, map2.get(c2) + 1);
  }
  let keys1 = Array.from(map1.keys());
  let keys2 = Array.from(map2.keys());
  return (
    keys1.length === keys2.length &&
    keys1.filter((k1) => map1.get(k1) !== map2.get(k1)).length === 0
  );
}
