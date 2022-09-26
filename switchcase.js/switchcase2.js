let x = "ON";
let province = "";

switch(x)
{
    case "QC":
        province = "Quebec";
        break;
    case "ON":
        province = "Ontario";
        break;
    case "BC":
        province = "British Columbia";
    default:
        province = "Unknown"
}

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

let a = 15;

switch(true)
{
    case a < 10 :
        console.log("<10");
    break;
    
    case a < 20 :
        console.log("<20");
    break;
}






