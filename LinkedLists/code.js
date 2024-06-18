function LinkedinLists() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        var node = new Node(element),
        current;

        if (head === null) {
            head = node;
        } else {
            // null
            current = head;
            // NODE { Element: "Gabriel", next: NODE({ Element: "Luis", next: null})}
            // current.next = FALSE
            // NODE_A -> NODE_B -> ?
            while(current.next) {
                current = current.next;
            }
            // NODE { Element: "Gabriel", next: NODE({ Element: "Luis", next: NODE({ Element: "Thiago", next: null})})}
            current.next = node;
        }
        length++;
    }

    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head;
            var previous = null;
            var index = 0;

            /*
                NODE = NULL
                NODE { Element: "Gabriel", next:
                 NODE({ Element: "Luis", next:
                  NODE({ Element: "Thiago", next: null})})}

                  position = 2;
                  0 + 1 = Gabriel
                  1 + 1 = Luis

                Gabriel -> Thiago
                size = size - 1 = 2
            */

            if (position === 0) {
                head = current.next;
            } else {
                while(index++ < position) {
                    // null -> Gabriel
                    previous = current;
                    // null -> Luis 
                    current = current.next;
                }
                previous.next = current.next;
            }

            length--;
            return current.element;
        } else {
            null;
        }
    }

    this.toString = function() {
        var current = head;
        var string = "";

        while(current) {
            string += current.element + " "
            current = current.next;
        }

        return string;
    }

    this.print = function() {
        console.log(this.toString());
    }

}

const linkedList = new LinkedinLists();

const list = ["Gabriel", "Luis", "Thiago"];

linkedList.append("Gabriel");
linkedList.append("Luis");
linkedList.print();
// [
//     "Gabriel",
//     "Luis",
//     "Thiago"
// ]

// Node = [
//     {
//         element: "Gabriel", // 0
//         next: "Luis"
//     },
//     {
//         element: "Luis", // 1
//         next: "Thiago"
//     },
//     {
//         element: "Thiago",
//         next: null
//     },

// ]