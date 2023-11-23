class SuperMath {
    #validateOperators = [`+`, `-`, `*`, `/`, `%`]
    #validationError = null;

    check(obj) {
        const answer = prompt(`Do you want to perform an action?`);
        if (answer === `yes` || answer === `ok`) {
            if (this.#validate(obj.zn, obj.y)) {
                alert(this.#getOperationResult(obj.X, obj.Y, obj.zn));
            } else {
                alert(this.#validationError);
            }
        } else {
            this.input();
        }
    }

    input() {
        const x = +prompt(`Enter first operand`);
        const y = +prompt(`Enter second operand`);
        const znak = prompt(`Enter operator`);
        if (this.#validate(znak, y)) {
            alert(this.#getOperationResult(x, y, znak));
        } else {
            alert(this.#validationError);
        }
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

p.check({X: 12, Y: 3, zn: `/`});

