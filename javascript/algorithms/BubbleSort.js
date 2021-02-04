// Bubble Sort:
// 跟隔壁互相比較，順序錯了就交換，讓大的元素一直浮到最後
// 時間複雜度:O(n)

/** 
 * @param {array[]}
 * @return array sort
 * */

function BubbleSort(array) {
    let swap = true;
    let n = array.length;

    for (let i = 0; i < n && swap; i++) {

        // 從第一個元素開始，不斷跑到第 n - 1 - i 個
        // 原本是 n - 1，會再加上 - i 是因為最後 i 個元素已經排好了
        // 所以沒必要跟那些排好的元素比較
        swap = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap = true;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

const mat = [6, 12, 8, 1, 22, 5];
console.log(BubbleSort(mat));