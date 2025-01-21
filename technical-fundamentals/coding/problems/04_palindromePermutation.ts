// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  // count character occurrences, check number of odds
  let map = new Map();
  let cleanup = str.toLowerCase().replaceAll(" ", "");
  for (let c of cleanup) {
    if (!map.get(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
  return Array.from(map.values()).filter((n) => n % 2 !== 0).length <= 1;
}
