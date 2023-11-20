class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    infoHuman() {
        console.log(`Name - ${this.name}, age  ${this.age}`);
    }
}

////

class Car {
    static MINAGE = 18;
    owner = null;

    constructor(brand, model, yearOfManufacture, numberCar) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.numberCar = numberCar;

    }

    addOwner(owner) {
        if (owner.age >= Car.MINAGE) {
            this.owner = owner;
        } else {
            console.log(`Sorry, you are under 18 years of age`);
        }
    }

    carInfo() {
        if (this.owner) {
            console.log(`Brand: ${this.brand}, model: ${this.model}, year of manufacture ${this.yearOfManufacture},`
                + `registration number ${this.numberCar}
        Car owner: `);
            this.owner.infoHuman();
        } else {
           console.log(`You cannot have a car`)
        }
    }
}

const owner1 = new Human(`Kseniia`, 30);
const owner2 = new Human(`Vova`, 35);
const owner3 = new Human(`Ivan`, 15);
const car1 = new Car(`Peugeout`, `308`, 2014, `AE 1239`);
const car2 = new Car(`Lexus`, `LS460`, 2018, `AA 9999`);
const car3 = new Car(`ZAZ`, `Sens`, 2008, `AE 3957`);

car1.addOwner(owner1);
car1.carInfo();
car2.addOwner(owner2);
car2.carInfo();
car3.addOwner(owner3);
car3.carInfo();

