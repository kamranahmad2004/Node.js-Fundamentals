const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const celciusToFahrenheit = (celcius) => {
  return (celcius * 9 / 5) + 32;
}
// common js approach
// module.exports = {getRandomNumber, celciusToFahrenheit};
exports.getRandomNumber = getRandomNumber
exports.celciusToFahrenheit = celciusToFahrenheit;