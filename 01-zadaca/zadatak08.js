// Napiši funkciju koja vraća predano polje obrnutim redosljedom
polje = [3, 4, 5, 6];
novoPolje = [];

function obrnuto(polje) {
  for (let i of polje) {
    novoPolje.unshift(i);
  }
  for (let p of novoPolje) {
    console.log(p);
  }
}
obrnuto(polje);