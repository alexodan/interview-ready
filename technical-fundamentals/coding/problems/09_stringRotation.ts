// 9. *String Rotation*;

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of 1i using only one call to isSubstring
// [e.g., "waterbottle" is a rotation of "erbottlewat")

function isSubstring(s1: string, s2: string): boolean {
  return s1.includes(s2);
}

export default function stringRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    let matchIndex = s2.indexOf(s1[i]);
    let substr2 = s2.substring(matchIndex);
    let substr1 = s1.substring(i, substr2.length);
    if (substr1 === substr2) {
      return isSubstring(
        s1.substring(substr2.length),
        s2.substring(0, matchIndex)
      );
    }
  }
  return false;
}
