class A {
    read() {
        return {a: 1};
    }
}


class B extends A {
    close() {
        return {c: 1};
    }
}

let p = new B;
console.log(`1 ` + (p.hasOwnProperty(`read`)));
console.log(`2 ` + (p.hasOwnProperty(`close`)));
console.log(`3 ` + (p.hasOwnProperty(`arr`)));
console.log(`4 ` + (`close` in p));
console.log(`5 ` + (`read` in p));
console.log(`6 ` + (Object.keys(p)));


