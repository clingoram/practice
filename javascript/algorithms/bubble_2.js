function Bubble(array) {
    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
// 由小->大排序
// return 排序過的array [2,3,7,9,16,26,45,85]
const arr = [2, 9, 16, 3, 45, 85, 26, 7];
console.log(`The result is ${Bubble(arr)}`);