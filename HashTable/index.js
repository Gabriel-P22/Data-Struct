class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    set(key, value) {
        let index = this._hash(key);

        if(!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
}

let myHashTable = new HashTable();
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
console.log(myHashTable);