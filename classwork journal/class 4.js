let x = 5;

console.log(x === "5");

let a = 2;
let b = 7;

console.log( a == 2 && b == 5);

console.log(a == 2 || b == 5);


"use strict";

const numOfDiners = 2;
const priceOfMeal = 100.00;
const GST = 0.05;
const PST = 0.09975;


const badService = 0;
const okService = .10;
const goodService = .15;
const greatService = .20;

let serviceObtained = "X";
let tipAmount = 0.00;

if (serviceObtained === "A") {
    tipAmount === greatService;
     }
if (serviceObtained === "B") {
    tipAmount === okService;
    }
if (serviceObtained === "C") {
     tipAmount === goodService;
    }
if (serviceObtained === "D") {
    tipAmount === greatService;
    } 
else {
    tipAmount === "Enter a value";
}

let totalPriceIncTax = (priceOfMeal*(GST+PST))+priceOfMeal;
let grandTotalIncTip = totalPriceIncTax*(1+tipAmount);

let totalPerPerson = grandTotalIncTip / numOfDiners;

console.log("$" + totalPerPerson.toFixed(3));

console.log("2">"12")


let voterAge = 14;

if (voterAge > 18) {
    console.log("They can vote.")
}   else    {
    console.log("They can not.")
}

for(let i=1;i<=25;i++){
    if(i % 5 == 0 && i % 3 == 0 ) {
       console.log(i+" FizzBuzz");
    
       } else if (i % 3 == 0 ) {
       console.log(i+" Fizz");
 
       } else if (i % 5 == 0) {
          console.log(i+" Buzz");
 
       } else {
          console.log(i);
       } 
       }