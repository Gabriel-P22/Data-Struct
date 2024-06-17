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

function hotPotato(nameList, num) {
    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    var elimanted = "";

    while(queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }

        elimanted = queue.dequeue();
        console.log(elimanted + " was eliminated from the Hot Potato game.")
    }

    return queue.dequeue();
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winner = hotPotato(names, 2);
console.log(winner)