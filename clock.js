 
  let a;
  let date;
  let time;
  let session;

  setInterval(() => {
      a = new Date(); 
      session = 'Am';
      if (session>=12){
          session = 'Am'
      } else{
          session = 'Pm'
      }

      date = a.toLocaleDateString(undefined);
      
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('time').innerHTML = time +""+  session+ "" + "<br>on " + date;
  }, 1000);