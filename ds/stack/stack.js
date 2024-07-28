class Stack {
    constructor() {
        this.items = []
    }

    push(el) {
        this.items.push(el)
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.items.length - 1]
    }

    pop() {
        return this.items.pop()
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.isEmpty())
console.log(stack.length)

console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())