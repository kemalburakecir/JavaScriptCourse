let creditCard = "1234 5678 1234 5678";
let myString= creditCard.slice(0,14);
console.log(myString);

let yeni = creditCard.replace(myString,"*************");
console.log(yeni);

let kerem =["Benim", "adim", "kemal", "burak", "ecir", "haha"];
const mohamed = kerem.join(" ");
console.log(mohamed);

let hasan = "pencil pen rubber pc";
const songul = hasan.split(" ");
console.log(songul);


let ibo = "    1234 5678 1234 1234   ";
let bahtiyar = ibo.trim("").split("").join("");

console.log(bahtiyar);

//

let msec = Date.parse("March 21, 2012")  // it gives miliseconds from jan 1, 1970
console.log(msec);
let d12 = new Date(msec);
console.log(d12);

//

const myNewValue = 5;

const array1 = ["A","B","C"];
console.log(array1[2]);
array1[3]="X";
console.log(array1);

let p = 5;
{
    let p = 56;
}
console.log(p);


//

const arr = [1,2,3];
console.log(arr.length);

let newSize = arr.push("4");
console.log(newSize);
console.log(arr);

let arrPop = arr.pop;
console.log(arrPop);

let arrUnshift = arr.unshift("7");
console.log(arrUnshift);

let arrShift = arr.shift;
console.log(arrShift);

const a = ["banana","apple","mango"];
console.log(a);

console.log(a.toString());

delete a[2];
console.log(a);

console.log(0 in a);
console.log(2 in a);

//

let sum = 0;

const totals = [1,2,3,4,5];
for(let i=0;i>totals.length;i++)
{
    sum+=totals[i];
    console.log(sum);
}
