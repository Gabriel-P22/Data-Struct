//LIFO Last in first out. O primeiro a entrar é o ultimo a sair.

function Stack() {
    var items = [];

    this.push = function(element) {
        //add a new element inside stack.
        items.push(element);
    }

    this.pop = function() {
        //remove the element inside stack.
        return items.pop();
    }

    this.peek = function() {
        //return the higher element inside the stack.
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        //return if the stack has data or no.
        return items.length === 0;
    }

    this.clear = function() {
        //clear the stack.
        items = [];
    }

    this.size = function() {
        //return the number of items inside the stack.
        return items.length;
    }

    this.print = function() {
        //show the stack on console.
        console.log(items);
    }
}

var pilha = new Stack();

pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.push(6);
pilha.push(12);

pilha.print();

console.log(pilha.peek())
console.log(pilha.size())

pilha.pop();
pilha.print();
console.log(pilha.isEmpty());

pilha.clear();
pilha.print();
console.log(pilha.isEmpty());