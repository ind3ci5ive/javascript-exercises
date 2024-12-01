



const convertToCelsius = function(enteredFahrenheit) {

  let tempCelsius;
  let tempFahrenheit = enteredFahrenheit;

  tempCelsius = (tempFahrenheit - 32) * 0.5555
  finalTemp = Math.round(tempCelsius * 10) / 10;

  return finalTemp;
};

const convertToFahrenheit = function(enteredCelsius) {

  let tempFahrenheit;
  let tempCelsius = enteredCelsius;

  tempFahrenheit = tempCelsius * 1.8 + 32;
  finalTemp = Math.round(tempFahrenheit * 10) / 10;

  return finalTemp;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
