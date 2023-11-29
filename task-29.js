"use strict";

class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const arrayOfUsers = [
    new User(1,"Igor",25),
    new User(2,"Vova",44),
    new User(3,"Ira",28),
    new User(4,"Inna",22),
    new User(5,"Nina",45)
];

const myArrayUser = arrayOfUsers.reduce(
    (acc, object) => {
        const id = object.age;
        acc[id] = object;
        return acc;
    },
    {}
);
console.log(myArrayUser)
console.log(JSON.stringify(myArrayUser))