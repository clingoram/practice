// array 加總
/**
 * @param {number[]} arr
 * @return {number}
 */
function sumArray(arr) {
    if (arr.length < 2) {
        // array.join => array to string 
        // Number => atring to number
        return Number(arr.join());
    }

    // solution 1:
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;

    // solution 2:
    // return arr.reduce((a, b) => a + b, 0);
}
const arr = [4];
console.log(sumArray(arr));

/* 

2021-02-09
練習JS array所有methods

Goal:
    1. return an array with sort(from minest to greatest)  => ans: [1,3,5,5,6,9,12,14,98]  ->bubble sort
    2. return int (to sum array element) => ans:153 -> array methods:reduce
    3. return the greatest Int of the array => ans:98 -> Math.max.apply()
    4. return the duplicate int of the array => ans:5
    5. return an array with sort(from greatest to minest)  => ans: [98,14,12,9,6,5,5,3,1] 
    6. return the minest int og the array => ans:1 -> Math.min.apply() or sort()
*/

function TestArray(array) {

    // goal 1:
    // let swap = true;
    // for (let i = 0; i < array.length; i++) {
    //     swap = false;
    //     for (let j = 0; j < array.length - 1 - i; j++) {
    //         swap = true;
    //         if (array[j] > array[j + 1]) {
    //             [array[j], array[j + 1]] = [array[j + 1], array[j]];
    //         }
    //     }
    // }
    // return array;

    // goal 2:
    // return array.reduce((sum, current) => sum + current);

    // goal 3:
    // A.
    // return Math.max.apply(null, array);
    // B.
    // let n = array.length - 1;
    // return array[n];

    // goal 4:
    let result = [];
    let slice_arr = array.slice().sort();
    // 最後一個是最大數，所以減一
    for (let i = 0; i < slice_arr.length - 1; i++) {
        // console.log(slice_arr[i]); // 1 12 14 3 5 5 6 9 
        if (slice_arr[i] == slice_arr[i - 1]) {
            result.push(slice_arr[i]);
        }
    }
    return result;

    // goal 6:
    // A.
    // return Math.min.apply(null,array);
    // B.
    // let result = array.sort((a, b) => a - b);
    // return result[0];
}
const myArray = [6, 3, 12, 5, 5, 14, 1, 9, 98];
console.log(TestArray(myArray))