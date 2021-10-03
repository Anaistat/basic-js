import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(/*str, options*/) {
  // let arr = []
  // for(let i = 0; i < options.repeatTimes; i++){
  //   (i == options.repeatTimes - 1)?str+=options.addition: str+=options.addition + ((options.additionSeparator == undefined)?"|":options.additionSeparator)
  // }
  //
  // for(let i = 0; i < options.repeatTimes; i++){
  //   if(i == options.repeatTimes - 1) arr.push(str)
  //   else{
  //     arr.push(str + `${((options.separator == undefined)?"+":options.separator)}`)
  //   }
  // }
  //
  // return arr.join("")
  throw new NotImplementedError('Not implemented');
}
