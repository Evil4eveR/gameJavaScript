var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("counter").innerText = 10 - timeleft;
  timeleft -= 1;
}, 1000);