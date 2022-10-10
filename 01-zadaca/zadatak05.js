//  Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve djeljive s 3

var polje = [1,2,3,4,5,6,7,8,9,10];

function djeljenje(){
  for (let i of polje) {
    if (i % 3 == 0) {
      console.log("Broj djeljiv s 3 je: " + i);
    }
  }
}

djeljenje();