/*
1020

判斷質數
Description

質數的定義為：在大於 1 的自然數中，除了 1 和該數自身以外，無法被其他自然數整除的數。

換句話說，如果一個大於 1 的正整數的因數除了 1 和自己以外就沒有其他的了，那就是質數，以下是前 10 個數字的因數：

1: 1
2: 1, 2
3: 1, 3
4: 1, 2, 4
5: 1, 5
6: 1, 2, 3, 6
7: 1, 7
8: 1, 2, 4, 8
9: 1, 3, 9
10: 1, 2, 5, 10

根據因數可得知，1~10 的質數為：2, 3, 5, 7
現在給你一些數字，請輸出每一個數字是否為質數

Input
第一行為一個正整數 N，1 &lt;= N &lt;= 1001<=N<=100，代表一共有幾個數字

接下來 N 行每一行都包含了一個正整數 P，1 &lt;= P &lt;= 1000001<=P<=100000

Output
針對每一筆輸入，如果 P 是質數，輸出：Prime，否之則輸出 Composite

（附註：Composite 是合數的意思，不過有一點要注意的是 1 不是質數也不是合數，但在這一題裡面一樣要輸出Composite）

EG:
5(表示共有5個數字)
1
2
3
4
5

結果:
Composite
Prime
Prime
Composite
Prime

------------------------------------------
找1-10的質數(質數:大於1且只有1和自己共兩個因數的數)，EG 2,3,5,7,11,13,17,23...
2是最小值數，且是唯一的偶數，其他都是奇數

因數是一個用於描述自然數 a 和自然數 b 之間存在的整除關係，即 b 可以被 a 整除。
也就是，可以被整除的都是因數(偶數)
自然數=非負數的整數(不包含0)

原始題目是每行各一個數字，但在VS CODE這樣會出錯，所以我把它改成用陣列的方式呈現
第一個數字是共有幾筆資料
第二個(陣列)是要找出是質數的資料
回傳陣列
*/
function findPrime(n, target) {
    let result = [];
    let str = '';

    if (n !== target.length) {
        return false;
    }

    for (let i = 0; i < target.length; i++) {
        if (isPrime(target[i])) {
            str = 'Prime';
        } else {
            str = 'Composite';
        }
        result.push(str);
    }
    return result;
}
// 判斷是否是質數
function isPrime(element) {
    if (element === 1) {
        return false;
    }
    for (let i = 2; i < element; i++) {
        if (element % i === 0) {
            return false;
        }
    }
    return true;
}
const n = 5;
const target = [1, 2, 3, 4, 5];
//  ["Composite", "Prime", "Prime", "Composite", "Prime"]
console.log(findPrime(n, target));