export function shortLongShort(a:string, b:string) {
    // your code here
    let result = ''
    if(a.length < b.length){
      return a+b+a
    }
  
    return b+a+b
    
  }