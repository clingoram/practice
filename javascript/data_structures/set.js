/*
functions:
add value
remove value
find value
show values
*/

class mySet {

    constructor() {
        // collection will hold the set as array
        this.getcollect = [];
    }

    // add the element to the set
    addValue(element) {
        // if the element does't exist
        if (!this.hasData(element)) {
            // add the element to the set and return true
            getcollect.push(element);
            return true;
        }
        return false;
    }

    // check for the existence of an element and return true or false
    hasData(element) {
        if (getcollect.indexOf(element) !== -1) {
            return true;
        } else {
            return false;
        }
        // return (getcollect.indexOf(element) !== -1);
    }

    // remove an element from a set
    removeValue(element) {
        if (this.hasData(element)) {
            let index = getcollect.indexOf(element);
            // remove 1 element from index
            // 從index的位置開始，刪除 1 個元素
            getcollect.splice(index, 1);
            return true;
        }
        return false;
    }

    // return all the values in the set
    returnValue() {
        return getcollect;
    }

    // return the size of the collection
    size() {
        return getcollect.length;
    }

    // return the union of 2 sets
    // which means combine 2 sets
    combineSets(otherSet) {
        let unionSet = new Set();
        let firstSet = this.returnValue();
        let secondSet = otherSet.returnValue();

        firstSet.foreach(function (e) {
            unionSet.addValue(e);
        })
        secondSet.forEach(function (e) {
            unionSet.addValue(e);
        })
        // firstSet.forEach(element => {
        //     unionSet.addValue(element);
        // });

        // secondSet.forEach(element => {
        //     unionSet.addValue(element);
        // });

        return unionSet;
    }

    // return the intersection of 2 sets as a new set
    intersection(otherSet) {
        let intersevtionSet = new Set();
        let firstSet = this.returnValue();

        firstSet.forEach(function (e) {
            if (otherSet.hasData(e)) {
                intersevtionSet.addValue(e);
            }
        });
        return intersevtionSet;
    }

    // return the difference of 2 sets as a new set
    difference(otherSet) {
        let differenceSet = new Set();
        let firstSet = this.returnValue();

        firstSet.forEach(function (e) {
            if (!otherSet.hasData(e)) {
                differenceSet.addValue(e);
            }
        });

        return differenceSet;
    }

    // test if the set is a subset of a fifferent set
    subSet(otherSet) {
        let firstSet = this.returnValue();
        return firstSet.every(function (value) {
            return otherSet.hasData(value);
        })
    }
}

const setData = new mySet();
const setData2 = new mySet();
setData.addValue("a");
setData2.addValue("b");

console.log(setData.subSet(setData2));


/*
function mySet() {
    let collection = [];

    this.hasData = function (ele) {
        return (collection.indexOf(ele) !== -1);
    }

    this.values = function () {
        return collection;
    }

    this.addData = function (ele) {
        if (!this.hasData(ele)) {
            collection.push(ele);
            return true;
        }
        return false;
    }

    this.removeData = function (ele) {
        if (this.hasData(ele)) {
            let index = collection.indexOf(ele);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function () {
        return collection.length;
    }

    this.union = function (otherSet) {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function (e) {
            unionSet.addData(e);
        })
        secondSet.forEach(function (e) {
            unionSet.addData(e);
        })
        return unionSet;
    }

    this.intersection = function (otherSet) {
        let intersection = new Set();
        let firstSet = this.values(); // return to the method
        firstSet.forEach(function (e) {
            if (otherSet.hasData(e)) {
                intersection.addData(e);

            }
        })
        return intersection;
    }

    this.difference = function (otherSet) {
        let difference = new Set();
        let firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.hasData(e)) {
                difference.addData(e);
            }
        })
        return difference;
    }

    this.subset = function (otherSet) {
        let firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.hasData(value);
        })
    }
}
const a = new mySet();
const b = new mySet();
a.addData('apple');
b.addData('red');
console.log(a.subset(b));
*/