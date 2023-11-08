const arrayRandom = [123, `Hi`, 56.7, -0.1, 90, `key`, `num`, 404, `qwerty`, 2099, -5, 2023, 1.1];
const filterOfNumber = (arrayRandom.filter(itemNum => typeof itemNum === `number`));
const averageValue = (arrayOfNumber) => {
    return arrayOfNumber.reduce((a, b) => (a + b)) / arrayOfNumber.length;
}

console.log(averageValue(filterOfNumber));


const averageValue2 = (arrayOfNumber) => {
    let sum = 0;
    for (let i = 0; i === arrayOfNumber.length; i++) {
        sum += arrayOfNumber[i];
    }
    return sum / arrayOfNumber.length;
}
console.log(averageValue2(filterOfNumber));



