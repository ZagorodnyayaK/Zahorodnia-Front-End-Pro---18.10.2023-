



// task-2
const doMath = (x, znak, y) => {
    switch (znak) {
        case `+`:
            return x + y;
        case `-`:
            return x - y;
        case `*`:
            return x * y;
        case `/`:
            return x / y;
        case `%`:
            return x % y;
        case `^`:
            return x ** y;
    }
}

console.log('The result of a mathematical operation = ' + doMath(9, `^`, 6));



//task-3
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

console.log(twoDArray3(4,2,0))



// task-4
const func = (string, charToDell) => {
    charToDell.forEach((element) => {
        string = string.toLowerCase().replaceAll(element.toLowerCase(), ``);
    })
    return string.trim()
}

console.log(func(`Hello world`, [`l`, `d`]));



