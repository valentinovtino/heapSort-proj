
function generateRandomNumbers( count, maxVal ) {
  const array = [];
  
  for (let i = 0; i < count; i++) {
    array.push(parseInt(Math.random() * maxVal));
  }
  
  return array;
}

module.exports = generateRandomNumbers;