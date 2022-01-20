// Insertion Sort:
// 不斷把撲克牌插入到適合的位置，只是玩牌的時候可能一次插入好多牌，而插入排序法是一次插入一張牌。
// 時間複雜度: O(n)

function Insert(array) {
    // 假設第一個元素已經排好，所以從 1 開始跑
    for (let i = 1; i < array.length; i++) {
        // position 表示可以插入的位置
        let position = i;
        // 先把要插入的元素存起來
        let value = array[i];

        // 開始往前找，只要符合這條件就代表這個位置是可以插入的
        // 邊找的時候就可以邊把元素往後挪，騰出空間
        while (i >= 0 && array[position - 1] > value) {
            [array[position], array[position - 1]] = [array[position - 1], value];
            position--;
        }
        // 找到適合的位置，放入元素
        array[position] = value;
    }
    return array;
}

const arr = [12, 9, 36, 5, 1];
console.log(Insert(arr));