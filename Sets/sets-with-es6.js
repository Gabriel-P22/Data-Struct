// const set = new Set();

// set.add(1);
// set.add(1);

// console.log(set)

class Set {
    constructor() {
        this.items = {}; 
    }

    add (item) {
        if (item && !this.has(item)) {
            this.items[item] = item;
            return true;
        }
        return false;
    }

    delete(item) {
        if(this.has(item)) {
            delete this.items[item];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return this.values().length
    }

    values() {
        return Object.values(this.items);
    }

    has(item) {
    return !!this.items[item]; 
    }

    union(otherSet) {
        const unionSet = new Set();
        otherSet.values().forEach(value => unionSet.add(value));
        this.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set();
        this.values().forEach(value => {
            if(otherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    isSub(subSet) {
    return subSet.values().every(value => this.has(value));
  }
}

const setA = new Set();

setA.add(1);
setA.add(2);
setA.add(2);
setA.add(3);

console.log(setA.values());

setA.delete(2);

console.log(setA.values());
console.log(setA.size());

setA.clear();

console.log(setA.values());