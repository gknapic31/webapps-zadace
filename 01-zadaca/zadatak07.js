// Napiši funkciju koja za dani broj X provjeri nalazi li se unutar [0, 1000], te množi sve višekratnike broja 7 do X te ispisuje rezultat.

function broj(x){
    var rez = 1;
    if (x >= 0 && x <= 1000){
      if(x % 7 == 0){
        while (x != 0) {
          rez = rez * x;
          x = x - 7;
        }
      }else if(x % 7 != 0){
        x = x - (x % 7);
        while (x != 0){
          rez = rez * x;
          x = x - 7;
        }
      }
    }
    console.log(rez);
  }
  broj(23);