
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



