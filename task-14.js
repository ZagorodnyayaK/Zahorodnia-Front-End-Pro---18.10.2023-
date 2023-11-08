
const arrayNew = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, item) =>{
    let foundNum = array.indexOf(item);
    array.splice(foundNum,1);

    return array;
}
removeElement(arrayNew,5);
console.log(arrayNew);



const removeElement2 = (array, item) =>{
    let index = 0;
    let arr = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] !== item ) {
            arr[index] = array[i];
            index++;
        }
    }
    return arr;
}

console.log(removeElement2(arrayNew,5));

