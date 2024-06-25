class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class LinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            let current = this.head;
            let previous = null;

            while(current) {
                previous = current;
                current = current.next;
            }

            current = node;
            current.previous = previous
            previous.next = node;
            this.tail = node;
            this.length++;
        }
    }

    indexOf(value) {
        if (!this.isEmpty()) {
            let current = this.head;
            let index = 0;
            
            while(current) {
                if (current.data === value) {
                    return index;
                }

                index++;
                current = current.next;
            }
        }

        return -1;
    }

    removeAt(index) {
        if (index > -1 && index < this.length) {
            let current = this.head;
            let previous = null;
            let i = 0;

            if (index === 0) {
                current = current.next;
                tail = current.next;
                this.length--;
            } else if (index === this.length - 1) {
                current = this.tail;
                this.tail = current.previous;
                this.tail.next = null;
                this.length--;
            } else {
                while(i++ < index) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.previous = previous;

                this.length--;
                return current.data;
            }
            
        }

        return null;
    }

    remove(value) {
        let index = this.indexOf(value);
        return this.removeAt(index);
    }

    getSize() {
        return this.length;
    }

    getHead() {
        return this.head;
    }
    
    getTail() {
        return this.tail;
    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        if (!this.isEmpty()) {
            let current = this.head;

            while (current) {
                console.log(`-----------------`);
                console.log(`Before previous: ${current?.previous?.data}`);
                console.log(`Before current: ${current?.data}`);
                console.log(`Before next: ${current?.next?.data}`);
                current = current.next;
                console.log(`actual previous: ${current?.previous?.data}`);
                console.log(`actual current: ${current?.data}`);
                console.log(`actual next: ${current?.next?.data}`);
                console.log(`-----------------`);
            }
            return;
        }

        console.log("The list is empty");
    }
}

const list = new LinkedLists();

// null values
// console.log("first head", list.getHead());
// console.log("first size", list.getSize());
// console.log("first tail", list.getTail());

// list.print();

// with the first value
list.add(1);
// console.log("Second head", list.getHead());
// console.log("Second size", list.getSize());
// console.log("Second tail", list.getTail());

// list.print();

// with the two value
list.add(2);
// console.log("Third head", list.getHead());
// console.log("Third size", list.getSize());
// console.log("Third tail", list.getTail());

list.add(3);
list.remove(2);

list.print();
