let kel = document.getElementById("temperature")
let cel = document.getElementById("celciusField")
let fah = document.getElementById("fahrenheitField")

kel.addEventListener('input', function () {
  let k = this.value;
  let f = (k - 273.15) * 9 / 5 + 32;
  let c = k - 273.15;

  if (!Number.isInteger(f, c)) {
    f = f.toFixed(4);
    c = c.toFixed(4);
  }

  fah.value = f;
  cel.value = c;
})

cel.addEventListener('input', function () {
  let c = this.value;
  let f = (c * 9 / 5) + 32;
  let k = Number(c) + 273.15;
  
  if (!Number.isInteger(f, k)) {
    f = f.toFixed(4);
    k = k.toFixed(4);
  }

  fah.value = f;
  kel.value = k;

})

fah.addEventListener('input', function () {
  let f = this.value;
  let c = ((f - 32) * 5) / 9;
  let k = (f - 32) * 5 / 9 + 273.15;
  
  if (!Number.isInteger(k, c)) {
    k = k.toFixed(4);
    c = c.toFixed(4);
  }

  cel.value = c;
  kel.value = k;

})

//to clear all the input fields : 
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("temperature").value = "";
  document.getElementById("celciusField").value = "";
  document.getElementById("fahrenheitField").value = "";
})
