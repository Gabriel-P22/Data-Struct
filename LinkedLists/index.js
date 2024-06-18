function linkedLists() {
  
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null; // João, null

    this.append = function(element) {// Jose
        // Add a new element to the end of the list.
        var node = new Node(element), // Jose, null
        current;

        if (head === null) { // node
            head = node;
        } else {
            current = head; // node1 { Jose, null}

            while(current.next) { // null at first time
                current = current.next;
            }

            current.next = node; // José
        }
        length++; // 1
    }

    this.insert = function(position, element) {
        // Add a new element at a specific position in the list.

        if (position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) { // 1
        // Remove an element from a specific position in the list.

        if(position > - 1 && position < length) {
            var current = head, //node1
            previous, // undefined
            index = 0;

            if (position === 0) { // false
                head = current.next;
            } else {
                while(index++ < position) { // 1 < 1
                    previous = current; //node 1
                    current = current.next; // node 2
                }
                previous.next = current.next; // João -> Maria
            }
            length--; // 2
            return current.element; // José
        } else {
            return null;
        }
        
    }

    this.remove = function(element) {
        // Remove the element from the list.
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.indexOf = function(element) {
        // Return the index of the element in the list. If the element is not in the list, return -1.
        var current = head,
        index = 0;

        while(current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    this.isEmpty = function(element) {
        // Return is the list is empty or not.
        return length === 0;
    }

    this.size = function() {
        // Return to a number of elements in the list.
        return length;
    }

    this.toString = function() {
        // Convert the list to a string.
        var current = head,
        string = "";

        while(current) {
            string += current.element + ' ';
            current = current.next;
        }

        return string;
    }

    this.print = function() {
        // Show all te elements in the list.
        console.log(this.toString());
    }

    this.getHead = function() {
        // Return the head of the list. The head is the first element
        return head;
    }

}

var ll = new linkedLists();
ll.append("João");
ll.append("José");
ll.append("Maria");
ll.print(); // João José Maria
ll.removeAt(1);
ll.insert(1, "Luis");
ll.print();
console.log(ll.indexOf("Luis"));
ll.print();
ll.remove("Luis");
ll.print();
console.log(ll.size());
console.log(ll.isEmpty());