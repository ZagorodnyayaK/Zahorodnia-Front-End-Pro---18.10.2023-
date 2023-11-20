class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(human) {
        this.residents.push(human);
        return this;
    }
}

class Building {
    #maxApartments = 0;
    apartments = [];

    constructor(maxApartments) {
        this.#maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.#maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log(`Building is full, please create new one`);
        }
        return this;
    }
}


const hum1 = new Human(`Kseniia`, `female`);
const hum2 = new Human(`Dmytro`, `male`);
const hum3 = new Human(`Anna`, `female`);
const hum4 = new Human(`Ivan`, `male`);
const hum5 = new Human(`Ira`, `female`);
const hum6 = new Human(`Vova`, `male`);
const hum7 = new Human(`Nina`, `female`);
const hum8 = new Human(`Olia`, `female`);
const hum9 = new Human(`Vika`, `female`);
const apartNum1 = new Apartment();
const apartNum2 = new Apartment();
const apartNum3 = new Apartment();
const apartNum4 = new Apartment();
apartNum1.addResident(hum1).addResident(hum3).addResident(hum5);
apartNum2.addResident(hum2).addResident(hum4);
apartNum3.addResident(hum6).addResident(hum7);
apartNum4.addResident(hum8).addResident(hum9);
const buildNum1 = new Building(1);
const buildNum2 = new Building(3);

buildNum1.addApartment(apartNum1).addApartment(apartNum2).addApartment(apartNum3);
buildNum2.addApartment(apartNum4);

console.log(buildNum1);
console.log(buildNum2);