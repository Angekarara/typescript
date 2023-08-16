export function checkLogs(log: string[]): number {
    // return the mininum number of days
    let lastEvent = '99:99:99';
    let day= 0;
    
    log.forEach(event =>{
      if(event <= lastEvent)
        day++;
        lastEvent = event;
      
    })
    
    return day;
  }