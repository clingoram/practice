/*
Hash Table
*/
var hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

let HashTable = function () {
    let storage = [];
    const storageLimit = 4;

    this.print = function () {
        console.log(storage);
    };

    this.add = function (key, value) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [[key, value]];
        } else {
            let insert = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    insert = true;
                }
            }
            if (insert === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function (key) {
        let index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (let i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function (key) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };

}
console.log(hash('red', 10));

let ht = new HashTable();
ht.add('green', 'color');
ht.add('sunny', 'weather');
ht.add('Solar', 'sexy woman');
ht.add('Time', 'int');
console.log(ht.lookup('Solar'));
ht.print();