export function doubleChar(str: string): string{
 let result = '';
  for(let char of str){
    result += char+char
  }
  return result
}