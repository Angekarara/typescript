export const distinct = (a: number[]): number[] => {
    console.log(a)
   const set = new Set(a) 
   let arr = Array.from(set)
    //console.log(arr)
    return arr;
  }