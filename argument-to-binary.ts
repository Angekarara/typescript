export function arr2bin(arr: unknown[]): string {
    let sum : number = 0
    for(let item of arr){
      if(typeof item === "number"){
        sum += item
      }
    }
    return sum.toString(2) 
  }