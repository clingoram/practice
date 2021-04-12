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
    // Solution 1:
    // Will return all duplicates numbers from an array
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
    // Solution 2:
    // Will only return 1 duplicate number from an array
    // let result = [];

    // 會添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。 var arr = [1, 2]; arr.unshift(0); => [0,1,2];
    //  array.unshift(0);
    //  for (let i = 0; i < array.length; i++) {
    //      const element = Math.abs(array[i]);
    //      if (array[element] < 0) {
    //          result.push(element);
    //      }
    //      array[element] *= -1;
    //  }
    //  return result;

    // goal 6:
    // A.
    // return Math.min.apply(null,array);
    // B.
    // let result = array.sort((a, b) => a - b);
    // return result[0];
}
const myArray = [6, 3, 12, 5, 5, 14, 1, 9, 98];
console.log(TestArray(myArray))


// 取不重複值的array
// return array
// remove duplicates from an array in place
function noDuplicate(array) {

    /* 
    Solution 1:
    Set
    Set is a new data object introduced in ES6. Because Set only lets you store unique values. 
    When you pass in an array, it will remove any duplicate values.
    */
    // const uniqueSet = new Set(array);
    // return [...uniqueSet];

    /* 
    Solution 2:
    1.indexOf:回傳所在位置的 index，如果找不到會回傳 -1
    2.filter:filter() 會回傳一個陣列，只會回傳條件是 true 的物件，適合用在搜尋符合條件的資料。
    */
    // return array.filter((item, index) => array.indexOf(item) == index);

    /**
     * Solution 3:
     * reduce
     * Array.prototype.reduce(accumulator, currentValue, currentIndex, array [, initialValue])
        reduce() 可以與前一個回傳的值再次作運算。
        參數包含以下：
        accumulator:前一個回傳的值，從 initialValue 開始．若沒有 initialValue 就是從陣列的 index 0 開始
        currentValue :現在的值
        currentIndex:現在的參數位置-Optional
        array :全部陣列 -Optional
        initialValue:初始值- Optional
     */
    return array.reduce((item, index) => item.includes(index) ? item : [...item, index], []);

}
const arr = ['apple', 'orange', 'grape', 'apple', 'pineapple'];
console.log(`The result is ${noDuplicate(arr)}`);


/*
 找出array中大於target的值
 若大於target，重組，回傳成新陣列
 若"都"沒有大於target，return null
*/
function test(array, target) {
    let result = [];

    if (array.length <= 1 && array > target) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > target) {
            result.push(array[i]);
        }
    }
    return result;
}
const a = [1, 6, 48, 6, 35, 79, 86, 5, 23];
const t = 30;
// should return 48,35,79,86
console.log(`The result is ${test(a, t)}`);

/*
es5的class
*/
// constructor:
// function es5Class(name) {
//     this.name = name;
// }

// // 從es5Class那連結function
// es5Class.prototype.getName = function () {
//     return this.name;
// }

/* 
ES6的class(語法糖)
實際上的 JavaScript 本身並沒有 class 可以使用
*/

class es5Class {
    // constructor = function es5Class(name)
    constructor(name) {
        this.name = name;
    }
    // function
    getName() {
        return this.name;
    }
}
let test = new es5Class('Joe');
test.getName();
console.log(test);

// find largest and smallest number of array
function find(array) {
    if (array.length < 1) {
        return array;
    }
    // let result = [];
    // let max = Math.max.apply(null, array);
    // let min = Math.min.apply(null, array);

    // es6 to find largest and smallest int
    let max = Math.max(...array);
    let min = Math.min(...array);
    // console.log(min);

}
const nums = [12, 4, 65, 7, 2, 4, 12];
console.log(`The result is ${find(nums)}`);

// find all pairs of an integer array whose sum is equal to a given number?
function find(array, target) {
    let result = [];
    if (array.length < 2 && target == null) {
        return array;
    }
    // solution 1:
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                result.push(array[j], array[i]);
            }
        }
    }
    return result;

    // solution 2:
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] + array[i + 1] === target) {
    //         result.push(array[i], array[i + 1]);
    //     }
    // }
    // return result;

}
const nums = [12, 4, 65, 7, 2, 4];
// should return 65,2
const t = 67;
console.log(`The result is ${find(nums, t)}`);

// 條件式3種:
// 以下結果都一樣
let money = 10;
let p;
// 1.三元
// const p = (money > 15) ? 'Expensive' : 'Cheap';

// 2.if else
// if (money > 15) {
//     p = 'Expensive';
// } else {
//     p = 'Cheap';
// }

// 3.switch
switch (money) {
    case 10:
        p = 'Cheap';
        break;
    case 15:
        p = 'Expensive';
        break;
    default:
        break;
}
console.log(p);


// add to equal to target
function tar(array, target) {

    // solution 1:for loop
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] + array[i - 1] === target) {
    //         result.push(array[i], array[i - 1]);
    //     }
    // }
    // return result;

    // if don't use for loop
    // map? reduce? forEach?

    // solution 2:filter
    // filter( )
    // 將元素依序傳入callbackfn中運算，運算結果為boolean值，回傳運算結果為true的元素(element)所組成的陣列。
    // return array.filter((x) => {
    //     return x + x === target;
    // })
}
const a = [1, 2, 4, 4];
const t = 8;
// return : [4,4]
console.log(tar(a, t));

function test(a, b) {
    if (a.length < 1 || b.length < 1) {
        return;
    }

    // 差集
    // return 1 3 5
    // return a.filter((x) => {
    //     return b.indexOf(x) === -1;
    // })
    // 6 8 10
    // return b.filter((x) => {
    //     return a.indexOf(x) === -1;
    // })

    // 絕對差集(補集)
    // return 1 3 5 6 8 10
    // return a.filter((x) => {
    //     return b.indexOf(x) === -1;
    // }).concat(b.filter((x) => {
    //     return a.indexOf(x) === -1;
    // }))

    // 交集
    // return 2 4
    // return a.filter((x) => {
    //     return b.indexOf(x) > -1;
    // })

    // 聯集
    // return [1, 2, 3, 4, 5, 6, 8, 10]
    return a.concat(b.filter((x) => {
        return a.indexOf(x) === -1;
    }))
};
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8, 10];
console.log(test(arr1, arr2));

// 9*9
function go() {
    // i = A;j = B => A*B=......
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);

        }
    }
}
console.log(go());

// 印出1-100的偶數
function solve() {
    // step 1: 1-100
    // step 2: 1-100的偶數 %2 === 0
    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
console.log(solve());

/*
印出fizz buzz

給一個數字n，印出1~n
如果碰到3的倍數，改印fizz
5的倍數，改印buzz
同時是3和5的倍數，印出 fizz buzz
*/
function solveBuzz(n) {

    // solution 1:
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizz buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }

    // solution 2:
    // let res = [];
    // for(let i = 1;i<=n;i++){
    //     if(i % 15 === 0){
    //         res.push('FizzBuzz');
    //     }else if(i % 3 === 0){
    //         res.push('Fizz');
    //     }else if(i % 5 === 0){
    //         res.push('Buzz');
    //     }else{
    //         res.push(i.toString());
    //     }
    // }
    // return res;
}
const n = 7;
console.log(solveBuzz(n));


// 找最小
function solve(n) {

    if (n.length < 1) {
        return;
    }
    // solution 1:
    // return Math.min(...n);

    // solution 2:
    let min = n[0]
    for (let i = 0; i < n.length - 1; i++) {
        if (n[i] < min) {
            min = n[i];
        }
    }
    return min;
}
const n = [12, 6, 5, 8, 15];
console.log(solve(n));

// return max value
function solve(lines) {
    if (lines.length < 1) {
        return;
    }
    // solution 1:
    // return Math.max(...lines);

    // solution 2:
    let max = lines[0]; // or max = -Infinity;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] > max) {
            max = lines[i];
        }
    }
    return max;
}
const n = ['7', '3'];
console.log(solve(n));


// 找最大值
// 給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列中的最大值
function solveThree(b) {
    if (b.length < 1) {
        return;
    }
    // solution 1:
    // return Math.max(...b);

    // solution 2:
    let max = b[0];
    for (let i = 0; i <= b.length; i++) {
        if (b[i] > max) {
            max = b[i];
        }
    }
    return max;
}
const ag = [6, 8, 5, 9, 2]; // 9
console.log(solveThree(ag));

// 找第二大值
function findSecond(array) {
    if (array.length < 1) {
        return;
    }
    /*
    一個是負無限大（-Infinity）一個是無限大（Infinity），找大的數目的時候預設變數是無限小，找小的數目預設它為無限大，和序列中的數字一一比對時才能由大取代小（負無限大），由小取代大（無限大）。
    */
    let max = -Infinity;
    let secondMax = -Infinity;
    let res = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            secondMax = max;
            max = array[i];
        } else if (array[i] > secondMax) {
            max = array[i];
        }
    }
    res.push(max, secondMax);
    return res;
}
const arr = [5, 6, 7, 3]; // 6
console.log(findSecond(arr));

/**
 * 找次小值
 */
function findSecMin(array) {
    let min = Infinity;
    let minest = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            minest = min;
            min = array[i];
        } else if (array[i] > min) {
            minest = array[i];
        }
    }
    return minest;
};
const a = [5, 6, 7, 8]; // 6
console.log(findSecMin(a));

/*
字串轉大寫
ASCII code

1.如何判斷該字串是小寫?
String.fromCharCode:返回由指定的 UTF-16 代碼單元序列創建的字符串

方法一:
    檢查ASCII code是否介於97-122(小寫;大寫A-Z:65-90) 
    index=array index
    ASCII code -32 =小寫
    string.fromCharCode(string.charCodeAt(index)-32)

方法二:
    直接比大小(字典序，前面小，越往後越大)
    step 1.比大小
    step 2.ASCII code -32 =小寫
    string.fromCharCode(string.charCodeAt(index)-32)

方法三:
    string.toUpperCase()的內建涵式

*/
function checkStr(str) {
    if (str.length === 0) {
        return;
    }
    let ans = '';
    // 方法1
    // for (let i = 0; i < str.length; i++) {
    //     let strCode = str.charCodeAt(i);
    //     if (strCode >= 97 && strCode <= 122) {
    //         ans += String.fromCharCode(strCode - 32);
    //     }else{
    //         ans += str[i];
    //     }
    // }
    // return ans;

    // 方法2:
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            ans += String.fromCharCode(str.charCodeAt(i) - 32);
        } else {
            ans += str[i];
        }
    }
    return ans;

    //方法3:
    // return str.toUpperCase();
}
const a = 'i need a job';
console.log(checkStr(a));

/**
 * 小寫轉大寫
 * 大寫轉小寫
 */
function switchCase(string) {
    if (string.length < 1) {
        return;
    }
    let ans = '';
    for (let i = 0; i < string.length; i++) {
        let s = string.charCodeAt(i);
        if (s >= 97 && s <= 122) {
            ans += String.fromCharCode(s - 32);
        } else if (s >= 65 && s <= 90) {
            ans += String.fromCharCode(s + 32);
        } else {
            ans += string[i];
        }
    }
    return ans;
}
const string = 'hElLo';
console.log(switchCase(string));

/*刪除(略過)特定字元 */
function deleteStr(str, deleted) {
    if (str.length < 1) {
        return;
    }
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== deleted) {
            ans += str[i];
        }
    }
    return ans;
};
const str = 'today is friday.';
let target = 'r';
console.log(deleteStr(str, target));


/**
 * 找因數(1,3,5,15)
 */
function finsNum(n) {
    if (n === 0) {
        return;
    }
    for (let i = 0; i < n.length; i++) {
        if (n % i === 0) {
            return i;
        }
    }

}
const n = 30;
console.log(finsNum(n));

/*
0-50的偶數
虛擬碼:
at first:
    leti = 1
    if i > 50 then exit
    print i
    i = i+1
    jump to line 139

then:
    for(i from 0 to 50) do
        print i 
    end for
*/
function testOne(n) {
    for (let i = 0; i < n - 1; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }

    }
}
const n = 50;
// console.log(testOne(n));

// 3 ways to clone obj
const food = {
    beef: 230,
    pork: 100
};
// 1
Object.assign({}, food);
// 2
let clone = { ...food };
// 3
JSON.parse(JSON.stringify(food));

// 印出N個星星
function printStars(stars) {
    let str = '';
    for (let i = 1; i <= stars; i++) {
        str += '*';
    }
    console.log(str);
}
let stars = 5;
console.log(printStars(stars));

/*
印出1-100的平方數
EG. 9 = 3*3

平方數就是開根號後是整數的
也就是某數的平方
如4為2的平方、9為3的平方
4和9就稱為平方數
平方數的因數有奇數個
因為平方數是自己的平方根乘平方根
所以因數會是奇數個


如何判斷是平方數?
1.開根號 Math.sqrt(n)，因結果可能是整數或者有小數點，所以要再第二步
2.無條件捨去 Math.floor(n)，不管結果是整數或有餘數，都無條件捨去，變得整數還是整數，有小數的就捨去小數變成整數

另一種想法:
先把1-100平方數印出來
*/
function isSquare() {

    // solution 1: 把所有數值全部印出來，不管數值是否是平方數，先印出來計算，再以數值是平數方的true/false呈現，所以會有很多個true/false
    // for (let i = 1; i <= 100; i++) {
    // 	console.log(counting(i));
    // }

    // solution 2: 只把屬於1-100平方數印出來
    let a = 1;
    while (a * a <= 100) {
        console.log(a * a);
        a++;
    }
    return a;
}
// for solution 1:
function counting(n) {
    let c = Math.floor(Math.sqrt(n));
    return c * c === n;
}
console.log(isSquare());
