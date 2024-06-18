function DoulbyLinkedLists() {
  
    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }

    var length = 0;
    var head = null; // João, null
    var tail = null; // Ultimo elemento da lista

    this.append = function(element) {// Jose
        // Add a new element to the end of the list.
        var node = new Node(element), // Jose, null
        current;

        if (head === null) { // node
            head = node;
            tail = node;
        } else {
            current = head; // node1 { Jose, null}

            while(current.next) { // null at first time
                current = current.next;
            }

            current.next = node; // José
            tail = node;
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
                if(!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if(position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) { // 1
        // Remove an element from a specific position in the list.

        if (position > - 1 && position < length) {
            var current = head,
            previous,
            index = 0;


            if (position === 0) {
                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while(index++ < position) {
                    previous = current;
                    current.next.prev = previous;
                }
            }
            length--;
            return current.element;
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
