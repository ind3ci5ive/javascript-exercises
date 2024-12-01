// Take in array from the function
// Initiate variables to assign to passed in values
// Loop through the array
// Check during each loop cycle if the current value matches the desired remove value
// If the check matches, remove the value and return the new array
// If there is no match, then return whatever the test function wants


const removeFromArray = function(userArray, ...userValue) {

    let loopArray = userArray;
    let removeValue = userValue;

    for (let i = 0; i < loopArray.length; i++) {

        for (let value of removeValue) {

            if (loopArray[i] === value) {

                
                loopArray.splice(i, 1);
                i--
            }

    
        }


    }

    console.log(loopArray.toString());
    return loopArray;
};

removeFromArray([1, 2, 3], "1", 3);



// Do not edit below this line
module.exports = removeFromArray;
