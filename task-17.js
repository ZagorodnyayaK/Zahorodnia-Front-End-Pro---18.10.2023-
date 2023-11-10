//task-1
// const arrayRandom = [123, `Hi`, 56.7, -0.1, 90, `key`, `num`, 404, `qwerty`, 2099, -5, 2023, 1.1];
// const filterOfNumber = (arrayRandom.filter(itemNum => typeof itemNum === `number`));
// const averageValue = (arrayOfNumber) => {
//     return arrayOfNumber.reduce((a, b) => (a + b)) / arrayOfNumber.length;
// }
//
// console.log(Math.round((averageValue(filterOfNumber))));
//
//
// const averageValue2 = (arrayOfNumber) => {
//     let sum = 0;
//     for (let i = 0; i < arrayOfNumber.length; i++) {
//         sum += arrayOfNumber[i];
//     }
//     return sum / arrayOfNumber.length;
// }
// console.log(averageValue2(filterOfNumber));

//task-2
// const doMath = (x, znak, y) => {
//     switch (znak) {
//         case `+`:
//             return x + y;
//         case `-`:
//             return x - y;
//         case `*`:
//             return x * y;
//         case `/`:
//             return x / y;
//         case `%`:
//             return x % y;
//         case `^`:
//             return x ** y;
//     }
// }
//
// console.log('The result of a mathematical operation = ' + doMath(9, `^`, 6));


var arr = [];
2
for ( var i = 0; i < 20; i++ ) {
    3
    arr.push(Math.round(Math.random() * 100));
}


const twoDArray3 = (item1, item2, arr) => {
    let array = new Array(item1);
    for (let i = 0; i < item1; i++) {
        array[i] = new Array(item2);
        for (let j = 0; j < item2; j++){
            array [i][j] = arr;
        }
    }
    return array
}

console.log(twoDArray3(3,4,5))





// // task-4
// const func = (string, charToDell) => {
//     charToDell.forEach((element) => {
//         string = string.toLowerCase().replaceAll(element.toLowerCase(), ``);
//     })
//     return string.trim()
// }
//
// console.log(func(`Hello world`, [`o`, `d`]));
//


