
const numberOfArrayElements = 100;

let sum = 0;
let array = [];
let even = 0;
let maximum = 0;
let minimum = 100;
let odd = 0;


for (let i=0 ; i < numberOfArrayElements ; i++) {
    array[i] = Math.floor(Math.random()*100) +1;   //Populating an array with random numbers between 1 and 100
    sum += array[i];  // sum of the array 

    if(array[i] % 2 === 0) {
        even = even+1               // How many of these values are even?
    }
    if(array[i] % 2 !== 0) {
        odd = odd+1                 // How many of these values are odd?
    }
    if (array[i] > maximum) {
        maximum = array[i]          // Highest number
    }
    if(array[i]< minimum) {
        minimum = array[i]         // Lowest number
    }
}

let average = sum / numberOfArrayElements;   // The average of the whole group?

console.log(array);
console.log(even);
console.log(odd);
console.log(maximum);
console.log(minimum);
console.log(average);
console.log(sum);
