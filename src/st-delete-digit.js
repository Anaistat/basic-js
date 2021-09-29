import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = n.toString();
  let max = +n.substr(1, n.length - 1)
  for(let i = 0; i < n.length; i++){
    let copy = n.split("");
    copy.splice(i,1);
    if(+copy.join("") > max) max = +copy.join("")
  }
  return max
}
