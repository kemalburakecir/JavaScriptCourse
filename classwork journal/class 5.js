let myQuote = "They said \"We won the game.\"";

console.log(myQuote);

let messsage = "Kemal Burak Ecir \nKerem Ecir";

console.log(messsage);

let values = "1\t2\t3\t4";
console.log(values);

let x = "slkslsksklslskslsalaklalakaslakaslasalakslasl";
console.log(x.length);

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

let saying = "My name is kemal";
let newSaying = saying.replace("kemal","KEREM");

console.log(newSaying);

let newNewSaying = newSaying.toLowerCase();

console.log(newNewSaying);

let response = "x";

if ( response.toUpperCase() === "Y")
{
    console.log("OK continue");
}
else
{
    console.log("Thanks");
}

//


let employeeType = "B";

let bonus = 0.00;

switch(employeeType)
{
    case "A":
        bonus +=100;
    case "B":
        bonus +=200;
    case "C":
        bonus +=100;
}

console.log(bonus);

//

let a = 15;

switch(true)
{
    case a < 10 :
        console.log("<10");
    break;
    case a < 20 :
        console.log("<20");
    break;
    console.log(a);
}

console.log(a);





