/**
 * 
 * @param {number[]} arr 
 * @param {number} target
 */
function binarySearch(arr,target) {
    /**
     * Time Complexity: O(log N)
     * Auxiliary Space: O(1)
     */
    // sort the array first.
    arr.sort((a,b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            right--;
        }else{
            left++;
        }
    }
    return -1;
}
let arr = [12,6,1,9,24];
let targrt = 2;
console.log(binarySearch(arr));