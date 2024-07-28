class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.rear = -1
        this.front = -1
        this.currentLength = 0
    }

    isFull() {
        return this.capacity === this.currentLength
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(el) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = el
            if (this.front === -1) {
                this.front = this.rear
            }
            this.currentLength += 1
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front]
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.currentLength -= 1
            if (this.isEmpty()) {
                this.rear = -1
                this.front = -1
            }
            return item
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            return null
        } else {
            let i
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' '
            }
            str += this.items[i]
            return str
        }
    }
}

const cQueue = new CircularQueue(5)

// console.log(cQueue.capacity)
cQueue.enqueue(10)
cQueue.enqueue(16)
cQueue.enqueue(2)
cQueue.enqueue(-11)
cQueue.enqueue(-20)
// console.log(cQueue.currentLength)

// console.log(cQueue.isEmpty())
// console.log(cQueue.isFull())
console.log(cQueue.currentLength)
console.log(cQueue.peek())
console.log(cQueue.print())
console.log(cQueue.dequeue())
console.log(cQueue.rear, cQueue.front)

console.log(cQueue.peek())
cQueue.enqueue(19)
console.log(cQueue.print())
