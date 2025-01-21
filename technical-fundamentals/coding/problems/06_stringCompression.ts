// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  let compressed = "";
  let curr = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (curr === str[i]) {
      count++;
    } else {
      compressed += `${curr}${count}`;
      count = 1;
      curr = str[i];
    }
  }
  compressed += `${curr}${count}`;
  return compressed.length >= str.length ? str : compressed;
}
