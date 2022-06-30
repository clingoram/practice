// Selection Sort
// 找到最小值，移到最左邊。
// O(n^2)
function Select(array) {

    // 有幾個元素，就要找幾輪的最小值
    // 這邊的 i 代表 i 以前的元素都排序好了
    for (let i = 0; i < array.length; i++) {
        // 假設第一個是最小值
        let min = array[i];
        let minIndex = i;

        // 從還沒排好的元素開始找最小值
        for (let j = i; j < array.length; j++) {
            if (min > array[j]) {
                min = array[j];
                minIndex = j;
            }
        }
        // ES6 的用法，交換兩個數值
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }

    return array;
}
const arr = [80, 2, 33, 9, 24, 52, 6];
console.log(Select(arr));