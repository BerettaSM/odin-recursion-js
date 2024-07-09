const { fibs, fibsRec } = require('./fibonnaci');
const { mergeSort } = require('./merge');


console.log(fibs(0));
console.log(fibsRec(0));
console.log(fibs(1));
console.log(fibsRec(1));
console.log(fibs(2));
console.log(fibsRec(2));
console.log(fibs(8));
console.log(fibsRec(8));


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
