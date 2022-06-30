// Merge Sort
// 切一半，排好左邊，排好右邊，合併
// 把兩個各自排序好的陣列合併成一個。因為兩邊都已經排序好了，所以就是不斷看兩邊的第一個元素，誰小就抓誰下來，接著左邊抓完就抓右邊，反之亦然。
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2); // 4
    const left = array.slice(0, middle); //[88,6,12,5]
    const right = array.slice(middle); // [2,78,63,4]

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const arr = [88, 6, 12, 5, 2, 78, 63, 4];
console.log(mergeSort(arr));