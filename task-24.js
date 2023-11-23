class Hamburger {
    static SIZE_SMALL = {
        calories: 20,
        price: 50,
    }
    static SIZE_BIG = {
        calories: 40,
        price: 100,
    }
    static STUFFING_CHEESE = {
        calories: 20,
        price: 10,
    }
    static STUFFING_SALAD = {
        calories: 5,
        price: 20,
    }
    static STUFFING_POTATOES = {
        calories: 10,
        price: 15,
    }

    static TOPPING_MAYO = {
        calories: 5,
        price: 20,
    }
    static TOPPING_SAUCE = {
        calories: 0,
        price: 15,
    }
    #ingridients = [];

    constructor(size, stuffing) {
        this.#ingridients.push(size, stuffing);
    }

    calculatePrice() {
        let pr = 0;
        this.#ingridients.forEach((pr2) => pr += pr2.price);
        return pr;
    }

    calculateCalories() {
        let call = 0;
        this.#ingridients.forEach((cal2) => call += cal2.calories);
        return call;
    }

    addTopping(topping) {
        this.#ingridients.push(topping);
    }
}

const hum2 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATOES);

hum2.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Calories: ` + hum2.calculateCalories());
console.log('Price: ' + hum2.calculatePrice());

hum2.addTopping(Hamburger.TOPPING_SAUCE);

console.log(`Price with sauce: ` + hum2.calculatePrice());


