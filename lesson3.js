
// HT-7 average value

// const firstnumber= +prompt('Enter the first number');
// const secondnumber= +prompt('Enter the second number');
// const thirdnumber= +prompt('Enter the third number');
// const qualityOfValue = 3;
// const value = (firstnumber+secondnumber+thirdnumber)/qualityOfValue;
// alert('Average value = ' +value);


// let birthYear = prompt('Введи рік свого народження');
// if (!birthYear) {
//     alert(`Шкода, що ви не вказали свій вік :(`);
// } else {
//     const currentYear = 2023;
//     birthYear = (currentYear - Number(birthYear));
//     birthYear = `Тобі ${birthYear} років`;
// }
//
//
// let cityLive = prompt('В якому місті ви проживаєш?');
// if (!cityLive) {
//     alert(`Шкода, що ти не вказав своє місто :(`);
// } else {
//     switch (cityLive) {
//         case `Київ`:
//             cityLive = `Вітаю, ти живеш у столиці України
// Слава Україні!`;
//             break;
//         case `Вашингтон`:
//             cityLive = `Ти живеш у столиці США`;
//             break;
//         case `Лондон`:
//             cityLive = `Ти живеш у столиці Великобританії`;
//             break;
//         default:
//             cityLive = `Ти живеш у місті ${cityLive}`;
//     }
// }
//
// let sports = prompt('Який твій улюбленний вид спорту?');
// if (!sports) {
//     alert(`Шкода, що ти не вказав улюбленний вид спорту :(`);
// } else {
//     switch (sports) {
//         case `Баскетбол`:
//             sports = `Круто, хочеш бути схожим на Майкла Джордана?`;
//             break;
//         case `Теніс`:
//             sports = `Вау, хочеш бути схожим на Роджера Федерера?`;
//             break;
//         case `Футбол`:
//             sports = `Неймовірно, хочеш бути схожим на Лео Мессі?`;
//             break;
//         default:
//             sports = `${sports} дуже прикольний вид спорту!`
//     }
// }
//
// let alert_s = ``;
// if (birthYear) {
//     alert_s += birthYear + '\n';
// }
// if (cityLive) {
//     alert_s += cityLive + '\n';
// }
// if (sports) {
//     alert_s += sports;
// }
//
// if (!alert_s) {
//     alert(`Шкода, що ти нічого про себе не розповів(((`)
// } else {
//     alert(alert_s);
}


let numOrStr = prompt('input number or string');
console.log(numOrStr);

if (numOrStr === null) {
    console.log('ви скасували')
} else if (numOrStr.trim() === '') {
    console.log('Empty String');
} else if (isNaN(+numOrStr)) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}


switch (numOrStr) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim()==='':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}



