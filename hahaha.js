const ARRAY_ELEMENTS = 100;
let array = [];
let average = 0;
let odd = 0;
let even = 0;
let maxVal = 0;
let minVal = 100;

for (let x = 0; x < ARRAY_ELEMENTS; x++) {
  array[x] = Math.floor(Math.random() * 100 + 1);
  average += array[x] / ARRAY_ELEMENTS;
  if (array[x] % 2 == 0) {
    even++;
  } else odd++;
  if (array[x] > maxVal) {
    maxVal = array[x];
  } else if (array[x] < minVal) {
    minVal = array[x];
  }
}

console.log(array);
console.log(
  "The Average of the whole group   = " + Math.round(average * 100) / 100
);
console.log("The Highest number               = " + maxVal);
console.log("The Lowest number                = " + minVal);
console.log("The amount of Even numbers       = " + even);
console.log("The amount of Odd numbers        = " + odd);
