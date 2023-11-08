
// const arrayNew = [1, 2, 3, 4, 5, 6, 7];
//
// function removeElement(array, item) {
//     let foundNum = array.indexOf(item);
//     array.splice(foundNum,1);
//
//     return array;
// }
// removeElement(arrayNew,5);
// console.log(arrayNew);


function removeElement2(array, item){
    let index = 0;
    let arr = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === item ) {
            arr[index] = array;
            index++;
            arr = [];
            console.log(arr)
        } else {
            array[i] !== item;

        }
    }
    return arr;
}
arrNew = str?str.split(','):[];

console.log(removeElement2(arrNew,2));

