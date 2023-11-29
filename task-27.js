class UsersList {
    #colors = [`black`, `yellow`, `red`, `blue`, `brown`, `green`, `grey`, `violet`, `white`, `pink`];
    allUser = []
    addUser = (name) => {
        const availableColors = this.#colors.filter((color) => {
            return !this.allUser.some(user => user.color === color)
        });
        const colorIndex = Math.floor(Math.random() * availableColors.length);
        this.allUser.push({name: name, color: availableColors[colorIndex - 1]});
    }
}

const p = new UsersList();
p.addUser(`Vika`);
p.addUser(`Olia`);
p.addUser(`Vova`);
console.log(p)