"use strict";

const  autocomplete = (arrayOfStrings, find) => {
    return arrayOfStrings.filter((element) => element.includes(find));
}

console.log(autocomplete(['aaa', 'abc', 'abb', 'cca'], 'a'));
console.log(autocomplete(['aaa', 'abc', 'abb', 'cca'], 'aa'));
console.log(autocomplete(['aaa', 'abc', 'abb', 'cca'], 'ab'));
console.log(autocomplete(['aaa', 'abc', 'bbb', 'cca'], 'b'));
console.log(autocomplete(['aaa', 'abc', 'bbb', 'cca'], 'b'));
