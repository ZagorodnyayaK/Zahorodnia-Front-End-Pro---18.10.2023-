//1
let str= ``;
for (let i = 20; i <= 30; i=i+0.5) {
    str = i===30? str+=i:  str+=`${i} `;
}
console.log(str);


let i = 20;
let str2= ``;
while (i<=30){
    str2 = i===30? str2+=i:  str2+=`${i} `;
    i=i+0.5
}
console.log(str2);


//2
let str4= ``;
for (let i=10; i<=100; i=i+10) {
    let k=i*27;
    str4 = i ===100? str4+=k:  str4+=`${k}, `;
}
console.log(str4);


//3
const number = prompt(`Enter number`)
let str3= ``;
for (let i=1; i<=number; i++) {
    if (i*i <= number){
        str3+=`${i} `;
    }
}
console.log(str3);


//4
const number2 = prompt(`Enter number`)
let simple = `Prime`;
for (let i= 2; i<number2; i++) {
    if (number2%i===0){
        simple='Complex';
    }
}
alert(`Your number is ${simple}`);


//5
let number3 = +prompt(`Enter number`);
for (let i = 1; i <= number3; i++) {
    let res = 3 ** i;
    if (res === number3) {
        alert(`Your number is result of 3 in ${i} degree`);
    }
    if (res > number3) {
        alert('Sorry your number is not result of 3 in any degree');
        break
    }
}


let number4 = +prompt(`Enter number`);
if (number4 === 3){
    alert(`Your number is result of 3 in 1 degree`);
}
let d = 0;
while (number4%3 ===0){
    number4 = number4/3;
    d++;
}
if (number4 === 1) {
    alert(`Your number is result of 3 in ${d} degree`);
}else {
    alert('Sorry your number is not result of 3 in any degree');
}
