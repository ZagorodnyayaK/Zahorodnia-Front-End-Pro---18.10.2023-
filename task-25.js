class SuperMath {
    #validateOperators = [`+`, `-`, `*`, `/`, `%`]
    #validationError = null;

    check(obj) {
        this.#validate(obj.zn, obj.Y) ? alert(this.#getOperationResult(obj.X, obj.Y, obj.zn)) : alert(this.#validationError);
    }

    input() {
        const x = +prompt(`Enter first operand`);
        const y = +prompt(`Enter second operand`);
        const znak = prompt(`Enter operator`);

        return {X: x, Y: y, zn: znak};
    }

    #getOperationResult(x, y, znak) {
        switch (znak) {
            case `+`:
                return x + y;
            case `-`:
                return x - y;
            case `*`:
                return x * y;
            case `/`:
                return x / y;
            case `%`:
                return x % y;
        }
    }

    #validate(znak, y) {
        if (!this.#validateOperators.includes(znak)) {
            this.#validationError = `This operator: ${znak} not available. Only ` + this.#validateOperators.join(`,`)
                + ` available`;
            return false;
        }
        if (y === 0 && znak === `/`) {
            this.#validationError = 'Сan not be divided by 0';
            return false;
        }
        return true;
    }
}

const p = new SuperMath()
let obj = {X: 12, Y: 3, zn: `/`};
const answer = confirm(`Do you want to perform an action?`);
if (answer) {
    p.check(obj);
} else {
    obj = p.input();
    p.check(obj);
}


