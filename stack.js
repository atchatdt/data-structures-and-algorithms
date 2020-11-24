class Stack {
    constructor(data = [], length) {
        this.data = data
        this.length = length
    }

    checkFull() {
        return this.data.length == this.length ? true : false
    }

    checkEmpty() {
        return this.data.length == 0 ? true : false
    }

    Push(item = Math.random(0, 10)) {
        if (!this.checkFull()) {
            this.data.push(item)
        } else {
            console.log('Data full')
        }
    }

    Pop() {
        if (!this.checkEmpty()) {
            return this.data.pop()
        } else {
            console.log('Data empty')
        }
    }

    showData() {
        console.log(this)
    }
}

let stack = new Stack([], 10)
stack.Push(20)
stack.showData()
stack.Pop()
stack.showData()
stack.Pop()