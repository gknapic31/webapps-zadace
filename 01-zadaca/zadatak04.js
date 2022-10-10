// Napiši funkciju koja pretvara broj X u sate i minute
function SatiMinute(X){
    var sati = Math.floor(X / 60);
    var min = X % 60;
    return "Ovo je " + sati + " sata" + " i " + min + " minuta";
  }
  
  console.log(SatiMinute(120));