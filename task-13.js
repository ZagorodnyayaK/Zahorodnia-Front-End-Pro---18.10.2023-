const arrayLen = +prompt (`Enter length array`);
let userArray = [];
for (let i = 0; i < arrayLen; i++){
    userArray[i] = +prompt ("Enter the value of the array");
}
console.log('Sort an array in ascending order - ', userArray.sort());
console.log('Deleting index 2-4 -', userArray.splice(1-4));