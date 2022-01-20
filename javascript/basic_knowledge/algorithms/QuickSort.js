/* 
Quick sort

找一個數(pivot)，並且把這個數調整到：讓左邊的元素比它小，右邊的元素比它大，再對左右兩遍做一樣的事

->先從 array 中選出一個元素當基準 (pivot)，然後讓 pivot 左邊的元素都小於 pivot，pivot 右邊的元素都大於等於 pivot。（先不用排序）
分別對左邊的 array 和右邊的 array 重複這個過程。
*/
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let left = [];
    let right = [];
    let pivot = array[array.length - 1]; // 陣列最後一個值設為基準值
    for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
        if (element > pivot) {
            right.push(element);
        } else {
            left.push(element);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
const nums = [14, 7, 6, 9, 10, 20, 15]; // should return [6,7,9,10,14,15,20]
console.log(`The result is ${quickSort(nums)}`);