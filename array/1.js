class Persion {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    info() {
        console.log(`My name is ${this.name}. Age: ${this.age}`)
    }
}

class Me extends Persion {
    constructor(name, age) {
        super(name, age)
    }
}

let b = new Persion('kazuto', 23)
let a = new Me('kuro', 22)
a.info()