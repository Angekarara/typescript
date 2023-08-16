function proclaim(status?: string) {
    console.log(`I'm ${status || 'not ready...'}`);
  }
  
  proclaim();//output is 'I'm not ready...'
  proclaim('ready?');
  proclaim('ready!');