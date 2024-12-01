



const leapYears = function(year) {

    let enteredYear = year;
    let isLeapYear;

    if (enteredYear % 4 == 0 && enteredYear % 100 != 0 || enteredYear % 400 == 0) {

        
        isLeapYear = true;
        return isLeapYear;
    }

    else {

        isLeapYear = false;
        return isLeapYear;
    }
};

// Do not edit below this line
module.exports = leapYears;
