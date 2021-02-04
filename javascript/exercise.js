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