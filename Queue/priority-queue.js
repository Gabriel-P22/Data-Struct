function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (var i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueElement)
        }
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.print = function() {
        // show the queue elements on console
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].element +' '+ items[i].priority)
        } 
    }
}

var queue = new PriorityQueue();

queue.enqueue("Carlos", 2);
queue.enqueue("Gabriel", 1);
queue.enqueue("Anna", 3);
queue.print();

//ECMAScript 6
class PQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const item = {element, priority};

        let enqueue = false;

        for (let i = 0; i < this.items.length; i++) {
            if (item.priority < this.items[i].priority) {
                this.items.splice(i, 0, item);
                enqueue = true;
                break;
            }
        }

        if (!enqueue) {
            this.items.push(item);
        }
    }

    dequeue() {
        return this.items.shift().element;
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Empty Queue");
        }

        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
