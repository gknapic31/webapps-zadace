// Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]

function raspon(X) {
    if(X < 100 || X > 150000){
      return X + " " + "se ne nalazi u rasponu brojeva [100,150000].";
    }else {
      return X + " " + " se nalazi.";
    }
  }
  
  console.log(raspon(53));