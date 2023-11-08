const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
    let result = ``;
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);





//
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

// const userArray = prompt (`Enter the value of the array`);
// userArray.split(``);
// console.log(userArray)


// function splitString(stringToSplit, separator) {
//     var arrayOfStrings = stringToSplit.split(separator);
//
//     console.log('Оригинальная строка: "' + stringToSplit + '"');
//     console.log('Разделитель: "' + separator + '"');
//     console.log(
//         "Массив содержит " +
//         arrayOfStrings.length +
//         " элементов: " +
//         arrayOfStrings.join(" / "),
//     );
// }
//
// var tempestString = "И как хорош тот новый мир, где есть такие люди!";
//  var monthString = "Янв,Фев,,Мар,,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек";
//
// var space = " ";
// var comma = ",";
//
// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);

// let ind = 0;
// let arr = [];
// let sep = ','
// let str = '';
// for (let i = 0;i < monthString.length;i++){
//     if (monthString[i] === sep){
//         arr[ind] = str;
//         ind++;
//         str = '';
//         console.log(str,ind);
//         console.log(arr);
//     } else {
//         str+= monthString[i];
//         console.log(str)
//     }
// }

// function splitStr(string, separator, start= ''){
//     let ind = 0;
//     let arr = [];
//     for (let i = 0;i < string.length;i++){
//         if (string[i] === separator ){
//             arr[ind] = start;
//             ind++;
//             start = '';
//             console.log(start,ind);
//             console.log(arr);
//         } else if (i === string.length - 1){
//             start+= string[i];
//             arr[ind] = start;
//         } else {
//             start+= string[i];
//             console.log(start)
//         }
//     }
//
//     return arr;
// }
// input_s = 'ghg///jl/jljl/hkhkj/jjj//io/ioo,'
// console.log(splitStr(input_s,'/'))


// function arrSplice(string, del1, del2) {
//     let index = 0;
//     let arr2 = [];
//     for (let i = 0; i < string.length; i++) {
//         if ((i < del1) || (i > del2)) {
//             arr2[index] = string[i];
//             index++;
//         }
//     }
//     return arr2;
// }
//
// str = prompt(`Enter array`);
// arr = str?str.split(','):[];
//
// console.log(arrSplice(arr,2,4));