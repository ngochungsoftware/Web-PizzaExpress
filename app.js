var so = 0;
setInterval( function (){
  document.getElementById("test").src = `test${so}.jpg`
  so++;
  if( so > 2){
    so = 0;
  }
},2000)

  