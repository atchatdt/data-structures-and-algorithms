class Queue {
    constructor(data = [], length = 10) {
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
            this.data.shift(item)
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
        console.log(this.data)
    }
}

let queue = new Queue([], 10)

queue.Push(10)
queue.Pop()
queue.showData()