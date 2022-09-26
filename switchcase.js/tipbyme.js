let priceBeforeTax = 10.00;

let tipPercentageDetermined 

    if ( tipPercentageDetermined === A ) {              // A tip percentage is %20
        console.log("0.20");
    }
    else if ( tipPercentageDetermined === B) {          // B tip percentage is %15
        console.log("0.15");
    }
    else if (tipPercentageDetermined === C) {          // C tip percentage is %10
        console.log("0.10");
    }
    else if (tipPercentageDetermined === D) {          // D tip percentage is %0
        console.log("0");
    }
    else {
        console.log("Enter the percentage");            // Random Value 
    }
 


let percentageOfProvincialTax = 0.09975; 
let percentageOfFederalTax = 0.05;

let amountOfProvincialTax = priceBeforeTax * percentageOfProvincialTax
let amountOfFederalTax = priceBeforeTax * percentageOfFederalTax

let totalWithTax = priceBeforeTax + amountOfFederalTax + amountOfProvincialTax
let totalTip = totalWithTax * tipPercentageDetermined
let totalAmountToPayPerPerson = totalWithTax + totalTip

console.log(totalAmountToPayPerPerson);
