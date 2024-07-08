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

    getHead() {
        return this.head;
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current !== null) {
            yield current.data;
            current = current.next;

        }
    }
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.toString = function() {
            return `[${this.key} - ${this.value}]`;
        };
    }
}

class HashMap {
    constructor(size = 7) {
        this.dataMap = {};
        this.size = size;
    }

    put(value) {
        let hash = this.hash(value);

        if (!this.dataMap[hash]) {
            this.dataMap[hash] = new LinkedLists();
        }

        this.dataMap[hash].add(value);
    }

    remove(value) {
        let hash = this.hash(value);

        if (this.dataMap[hash] !== undefined) {
            var current = this.dataMap[hash].getHead();
                        
            while(current.next) {
                if (current.element === value) {

                    this.dataMap[hash].remove(current.element);

                    if(this.dataMap[hash].isEmpty()) {
                        this.dataMap[hash] = undefined;
                    }
                    
                    return true;
                }
                current = current.next;
            }


            if(current.element === value) {
                this.dataMap[hash].remove(current.element);
                if(this.dataMap[hash].isEmpty()) {
                    this.dataMap[hash] = undefined;
                }
            }
            return true;
        } 
        return false;
    }

    hash(key) {
        let hash = 0;

        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.size;
    }

}

let hashMap = new HashMap();

console.log(hashMap)

hashMap.put("Gandalf");
hashMap.put("John");

// console.log(hashMap)


hashMap.remove("Gandalf");

console.log(hashMap.remove("Gandalf"))
