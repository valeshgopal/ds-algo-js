class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
            this.size++
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let curr = this.head
            let i = 0
            while (i < index - 1) {
                curr = curr.next
                i++
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next

        } else {
            let curr = this.head
            let i = 0
            while (i < index - 1) {
                curr = curr.next
                i++
            }
            removedNode = curr.next
            curr.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    findIndexOf(value) {
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head
            for (let i = 0; i < this.size; i++) {
                if (curr.value === value) return i
                curr = curr.next
            }
        }
    }

    removeValue(value) {
        const index = this.findIndexOf(value)
        this.removeFrom(index)
    }

    print() {
        let curr = this.head
        let result = ''

        if (this.isEmpty()) {
            console.log('List is Empty')
        }

        while (curr) {
            result = result + curr.value + '-->'
            curr = curr.next
        }
        console.log(result)
    }
}

const linkedList = new LinkedList()




linkedList.insert(10, 0)
console.log(linkedList.print())

linkedList.insert(20, 1)
console.log(linkedList.print())

linkedList.insert(30, 1)
console.log(linkedList.print())

linkedList.insert(40, 2)
console.log(linkedList.print())

linkedList.insert(50, 2)
console.log(linkedList.print())

linkedList.removeValue(40)
console.log(linkedList.print())
console.log(linkedList.size)

linkedList.removeValue(10)
console.log(linkedList.print())
console.log(linkedList.size)