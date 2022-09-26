let candidateAge = 20;

let votingAge = 18;

let vote = candidateAge >= votingAge ? "Person can vote." : "Person can not vote.";
console.log(vote);


//


let inputText = "The quick brown fox jumped over the lazy dog.";

//word 1 target = "quick"
//word 2 target = "lazy"

//substr
//substring
//slice

let word1subStr =inputText.substr(4,5);
let word1subString =inputText.substring(4,9);
let word1slice= inputText.slice(4,9);

let word2subStr = inputText.substr(inputText.indexOf('lazy', 4));
let word2subString = inputText.substring(inputText.indexOf('la'),inputText.indexOf('do'));
let word2slice= inputText.slice(inputText.length-9,inputText.length-5);


console.log(word2subStr);
console.log(word1slice);


//

myString = "apple pear quick pear lemon";

let found = myString.lastIndexOf("pear");  // gives the first character of the last parametre in the string

console.log(found);

let example = "123as";
console.log(example.startsWith(12));

const d = new Date();   // UTC Common date
console.log(d);

const dateNow = Date();     // Eastern Date Time
console.log(dateNow);

const date2 = new Date(1995, 01, 03);
console.log(date2);
console.log(date2.getFullYear());

//

function getDaysInMonth(inputDate)
{
    let monthNumber = inputDate.getMonth();
    let year = inputDate.getFullYear();

    switch(monthNumber)
    {
        case 1: // january
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31 
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        case 2:
            if(year % 4 == 0 && !(year % 100 == 0) || year % 400 == 0)   
                return 29
            else
                return 28
    }
}

console.log("The month February contains " + getDaysInMonth(2,2020)+ " days.");

const f = new Date("2020-03-02");
console.log(f);







