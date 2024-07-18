export function smaller(nums: number[]): number[] {
    const array: number[] = []
    for(let i=0; i< nums.length; i++){
   let count: number = 0
      for(let j = i+1; j< nums.length; j++){
        if(nums[i] > nums[j]){
        count++
      }
        
      }
      array.push(count)
    }
    return array
  }