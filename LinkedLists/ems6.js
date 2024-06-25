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
        this.length = 0;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
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

            while (current.next) {
                previous = current;
                current = current.next;
            }

            current.next = node;
            current.next.previous = previous;

            this.tail = node;

            this.length++;
        }
    }

    remove(value) {
        let index = this.indexOf(value);
        return this.removeAt(index);
    }

    removeAt(position) {
        if(position >  -1 && position < this.length) {
            let current = this.head;
            let previous = null;
            let index = 0;

            if (position === 0) {
                this.head = current.next;

                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.previous = null;
                }

            } else if(position === this.length - 1) {
                current = this.tail;
                this.tail = current.previous;
                this.tail.next = null;
            } else {
                while(index++ < position) {
                    previous = current;
                    // console.log("current: ", current.next.previous)
                    current.next.previous = previous;
                }
            }
            this.length--;
            return current.element;
        }

        return null;
    }

    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === value) {
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    }

    print() {
        let current = this.head;
        while(current) {
            // console.log("previous value:", current?.previous?.data)
            // console.log("current value:", current.data)
            current = current.next;
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current !== null) {
            yield current.data;
            current = current.next;

        }
    }
}

const list = new LinkedLists();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();
// list.remove(3)
// console.log(list);

// for(const listItem of list) {
//     console.log(listItem);
// }