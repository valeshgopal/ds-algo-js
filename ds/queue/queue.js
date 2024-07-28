class Queue {
    constructor() {
        this.items = []
    }

    enqueue(el) {
        this.items.push(el)
    }

    isEmpty() {
        return this.items.length === 0
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        return this.items.shift()
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[0]
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.peek())
