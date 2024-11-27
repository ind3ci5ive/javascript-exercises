const repeatString = function(string, num) {

    let returnValue = '';

    if (num > 0) {

        for(let i = 0; i < num; i++) {

            returnValue += string;
        }

    }

    else if (num == 0) {

        returnValue = '';
    }

    else {

        returnValue = 'ERROR';
    }

    return returnValue;
};





// Do not edit below this line
module.exports = repeatString;
