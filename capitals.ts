export function dropCap(s: string): string {
 
    const words = s.split(' ');
    const strings: string[] = [];
           
    for(const word of words) {
      if(word.length>2){
        strings.push(word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
        //console.log(strings)
        }
      else{
        strings.push(word)
      }
      
     
    }            
  
    return strings.join(' ');
  }