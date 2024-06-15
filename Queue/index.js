function Queue() {
    var items = [];

    this.enqueue = function(element) {
        // add new item at queue
        items.push(element)
    }

    this.dequeue = function() {
        // remove one item at queue
        return items.shift()
    }

    this.front = function() {
        // return the first element at queue
        return items[0]
    }

    this.isEmpty = function() {
        // check if the queue has empty
        return items.length === 0;
    }

    this.size = function() {
        // return the queue size
        return items.length;
    }

    this.print = function() {
        // show the queue elements on console
        console.log(queue)
    }
}

var queue = new Queue();

queue.enqueue("Gabriel");
queue.enqueue("Luis");

queue.print();

queue.dequeue();

queue.print();