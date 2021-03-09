const importedSum = require("./myModule/sum");
const importedSubtract = require("./myModule/subtract");


var sum = importedSum(2,3);
var subtract = importedSubtract(10,5);

console.log(sum);
console.log(subtract);

