"use strict";

class UserTask2 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const arrayOfUsersTask2 = [
    new UserTask2(1, "Igor", 25),
    new UserTask2(2, "Vova", 44),
    new UserTask2(3, "Ira", 28),
    new UserTask2(4, "Inna", 22),
    new UserTask2(5, "Nina", 45)
];

const myArrayUserTask2 = arrayOfUsersTask2.reduce(
    (acc, object) => {
        const id = object.id;
        acc[id] = object;
        return acc;
    },
    {}
);

const sortUsers = (myArrayUser, sortParam) => {
    const values = Object.values(myArrayUser);
    if (values[0].hasOwnProperty(sortParam)) {
        return values.sort(function (a, b) {
            if (a[sortParam] > b[sortParam]) {
                return 1;
            }
            if (a[sortParam] < b[sortParam]) {
                return -1;
            }

            return 0;
        })
    }
    return values;
};

console.log(sortUsers(myArrayUserTask2, 'age'));
