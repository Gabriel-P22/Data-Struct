function Set() {

    var items = {};

    this.add = function(value) {
        //Add new items in the set
        if(!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.delete = function(value) {
        //Remove the item from the set
        if (this.has(value)) {
            delete items[value]
            return true;
        }
        return false
    }

    this.has = function(value) {
        // Return true if the value exists in the set, otherwise return false.
        return items.hasOwnProperty(value);
    }

    this.clear = function() {
        // Clear all data from the set
        items = {}
    }

    this.size = function() {
        // Return the number of elements in the set
        return Object.keys(items).length;
    }

    this.values = function() {
        // Return an Array with all the values in the set
        var values = [];
        var keys = Object.keys(items);
        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }

    this.union = function(otherSet) {
        // Return the union of two sets;
        var unionSet = new Set();
        var setKeys = this.values();

        for(var i = 0; i < setKeys.length; i++) {
            unionSet.add(setKeys[i])
        }

        setKeys = otherSet.values();

        for (var i = 0; i <  setKeys.length; i++) {
            unionSet.add(setKeys[i]);
        }

        return unionSet;
    }

    this.intersection = function(otherSet) {
        // Return the intersection of two sets as a new set
        
        var intersectionSet = new Set();
        var setKeys = this.values();

        for (var i = 0; i < setKeys.length; i++) {
            if (otherSet.has(setKeys[i])) {
                intersectionSet.add(setKeys[i]);
            }
        }
    
        return intersectionSet;
    }

    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;

    }

    this.subset = function(otherSet) {
        // Validate is the otherSet is subset (SUB conjunto) of the current set
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();

            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }

            return true;
        }
    }
}

var set = new Set();

set.add(1);
set.add(2);
set.add(3);

var setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

var secondSet = new Set()

secondSet.add(2);
secondSet.add(3);
secondSet.add(4);


var unionSet = set.union(secondSet);
var intersection = set.intersection(secondSet);
var difference = set.difference(secondSet);

console.log(unionSet.values());
console.log(intersection.values());
console.log(difference.values());

console.log(secondSet.subset(setA)); // true
console.log(setA.subset(secondSet)); // false
