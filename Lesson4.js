//1
let str= ``;
for (let i = 10; i <= 20; i++) {
    str = i===20? str+=i:  str+=`${i},`;
}
console.log(str);


//2
for (let i = 10; i <= 20; i++) {
    console.log(i*i);
}


//3
for (let i = 1; i<=10; i++) {
    console.log(i*7);
}


//4
let sum = 0;
for (let i = 1; i<=15; i++) {
    sum = sum + i;
}
console.log(sum);


//5
let mult = 1;
for (let i = 15; i<=35; i++){
    mult = mult * i;
}
console.log(mult);


//6
const count = 500;
let sum2 = 0;
for (let i = 1; i<=count;i++){
     sum2 = sum2 + i;
}
console.log(sum2/count);


//7
let sumEven = 0;
for (let i = 30; i<= 80; i++){
    if (i%2===0){
    sumEven=sumEven+i;
    }
}
console.log(sumEven);

let sumEven2 = 0;
for (let i = 30; i<= 80; i=i+2){
    sumEven2 = sumEven2+i;
}
console.log(sumEven2);

let start= 30;
let sumEvenWhile = 0;
while (start <= 80){
    if (start%2 === 0){
        sumEvenWhile = sumEvenWhile+start;
    }
    start = start + 2;
}
console.log(sumEvenWhile);


//8
for (let i = 100; i<=300;i++){
    if (i%3===0){
        console.log(i)
    }
}


//9
const givNumber = +prompt(`Enter number`);
console.log(1);
for (let i= 2;i < givNumber; i++){
    if (givNumber%i ===0){
        console.log(i);
    }
}


//10
const gNumber = +prompt(`Enter number`);
let dividersCount = 0;
for (let i = 2; i < gNumber; i++) {
    if (gNumber % i === 0) {
        if (i % 2 === 0) {
            dividersCount++;
        }
    }
}
console.log(dividersCount)


//11
const givenNumber = +prompt(`Enter number`);
let dividersSum = 1;
for (let i = 2; i < givenNumber; i++) {
    if (givenNumber % i === 0) {
        if (i % 2 === 0) {
            dividersSum+=i;
        }
    }
}
console.log(dividersSum)


//12
for (let i = 1; i<=10; i++) {
    for (let k = 1; k<=10; k++){
        // console.log (i*k);
        console.log (`${i}*${k}=${i*k}`);
    }
}



