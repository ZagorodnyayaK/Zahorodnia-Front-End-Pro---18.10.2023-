const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const length = array.length;

//Tasks 1,5,6,7,8,9

let sum = 0;
let multiplicationPositive = 1;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let positiveQuantity = 0;
let oddQuantity = 0;
let evenQuantity = 0;
for (let i = 0; i < length; i++) {
    if (array[i] > 0) {
        positiveQuantity++;
        sum = sum + array[i];
        multiplicationPositive = multiplicationPositive * array[i];
    }
    if (array[i] > 0 && array[i] % 2 !== 0) {
        oddQuantity++;
        sumOddPositive = sumOddPositive + array[1];
    }
    if (array[i] > 0 && array[i] % 2 === 0) {
        evenQuantity++;
        sumEvenPositive = sumEvenPositive + array[1];
    }
}
console.log(`Quantity of positive numbers = ${positiveQuantity}`);
console.log(`Sum of positive numbers = ${sum}`);
console.log(`Multiplication of positive numbers = ${multiplicationPositive}`);
console.log(`Sum of even positive numbers = ${sumEvenPositive}`);
console.log(`Quantity of positive and odd numbers = ${oddQuantity}`);
console.log(`Sum of positive and odd numbers = ${sumOddPositive}`);
console.log(`Quantity of positive and even numbers = ${evenQuantity}`);


//Tasks 2,3
let minIndex = 0;
let maxIndex = 0;
let minValue = array[minIndex];
let maxValue = array[maxIndex];
for (let i = 1; i < length; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
        minIndex = i;
    }
    if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
    }
}

console.log(`Min element = ${minValue}`);
console.log(`Element index = ${minIndex}`);
console.log(`Max element = ${maxValue}`);
console.log(`Element index = ${maxIndex}`);

//Task 4

let negativeQuantity = 0;
for (let i = 0; i < length; i++) {
    if (array[i] < 0) {
        negativeQuantity++;
    }
}
console.log(`Quantity of negative numbers = ${negativeQuantity}`);

//Task 10
let index = 0;
let maxValue2 = array[index];
for (let i = 1; i < length; i++) {
    if (array[i] > maxValue2) {
        maxValue2 = array[i];
        array[index] = 0;
        index = i;
    } else {
        array[i] = 0
    }
}
console.log(`Max element = ${maxValue}`);
console.log(array);




