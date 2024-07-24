export function scramble(str1: string, str2: string): boolean {
    type Count = {
     [key:string] : number
    }
  const count: Count = {}
  for(let str of str1){
    count[str] = (count[str] || 0) + 1
  }
  console.log(count)
    for(let letter of str2){
      if(!count[letter]){
        return false
      }
      else{
        count[letter] -= 1 
      }
    }
    return true
  }