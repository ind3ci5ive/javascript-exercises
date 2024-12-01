
// Create two values to hold each parameter
// The first value will keep incrementing by 1 and add to itself each time
// until the second value has finished it's loop
// return the value 




const sumAll = function (beginningNum, endingNum) {

    let beginNum = beginningNum;
    let endNum = endingNum;
    let total = 0;


    if (beginNum > endNum) {

        let tempNum = beginNum;
        beginNum = endNum;
        endNum = tempNum;
    }

    else if (beginNum < 0 || endNum < 0) {


        return "ERROR";
    }

    else if (beginNum - Math.floor(beginNum) !== 0 || endNum - Math.floor(endNum) !== 0) {

        return "ERROR";
    }

    else if (typeof beginNum !== "number" || typeof endNum !== "number") {

        return "ERROR";
    }


    for (i = beginNum; i <= endNum; i++) {

        total += i;
    }


    return total;
};


console.log(sumAll(10, "90"));
// Do not edit below this line
module.exports = sumAll;
