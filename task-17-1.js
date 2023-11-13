const arrayRandom = [123, `Hi`, 56.7, -0.1, NaN, null, 90, `key`, `num`, 404, `qwerty`, NaN, 2099, -5, 2023, 1.1];
const filterOfNumber = (arrayRandom.filter(itemNum => typeof itemNum === `number` && !isNaN(itemNum)));
const averageValue = (arrayOfNumber) => {
    return arrayOfNumber.reduce((a, b) => (a + b)) / arrayOfNumber.length;
}

console.log(Math.round((averageValue(filterOfNumber))));

const averageValue2 = (arrayOfNumber) => {
    let sum = 0;
    for (let i = 0; i < arrayOfNumber.length; i++) {
        if (typeof arrayOfNumber[i] === `number` && !isNaN(arrayOfNumber[i])) {
            sum += arrayOfNumber[i];
        }
    }
    return sum / arrayOfNumber.length;
}
console.log(averageValue2(filterOfNumber));


