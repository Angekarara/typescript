function proclaims(status:string = 'not ready...', repeat:number = 1) {
    for (let i = 0; i < repeat; i++) {
      console.log(`I'm ${status}`);
    }
  }
  
  proclaims();
  proclaims('ready?');
  proclaims('ready!', 3);