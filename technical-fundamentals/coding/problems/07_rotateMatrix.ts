// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

/**
 * 1,2,3
 * 4,5,6
 * 7,8,9
 * => transpose then revert
 * 1,4,7    7,4,1
 * 2,5,8 => 8,5,2
 * 3,6,9    9,6,3
 */

export default function rotateMatrix(matrix: Matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let aux = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = aux;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }
}
