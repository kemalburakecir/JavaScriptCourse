function getDaysInMonth(inputDate)
{
    let monthNumber = inputDate.getMonth();
    let year = inputDate.getFullYear();

    switch(monthNumber)
    {
        case 1: // 1 - January
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
            if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0)
                return 29
            else
                return 28
    }
}

console.log("The month February contains " + getDaysInMonth(new Date(2022,02,12)) + " days.");


