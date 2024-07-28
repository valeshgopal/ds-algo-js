class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(el) {
        this.items[this.rear] = el
        this.rear++
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue('Valesh')
queue.enqueue('Sandhya')
queue.enqueue('Aarthy')

console.log(queue.size())
console.log(queue.print())
console.log(queue.dequeue())
console.log(queue.peek())