// const array = [1, 4, 3, 2, 6, 8, 10];
// console.log(array.sort());
// function get_array(array) {
//     let total = 0;
//     array.forEach(element => {
//         total += element;
//     });
//     console.log(total);
//     return total;
// }

// get_array(array);


// function shoes(n) {
//     let value = n + 1;
//     console.log(value);
//     return value
// }
// shoes(1500);

// var reverse = function (x) {
//     if (x > -10 && x < 10) return x;

//     const result = Math.abs(x).toString().split('').reverse().join('');

//     if (result > (Math.pow(2, 31) - 1)) return 0;
//     return parseInt(result, 10) * (x < 0 ? -1 : 1);
// };

// var c = reverse(654);
// console.log(c);


var buddyStrings = function (A, B) {

    if (A.length != B.length) return false;

    let split_a = A.split('');
    let split_b = B.split('');//.reverse().join('');

    const array = [];

    console.log(split_a);
    console.log(split_b);

    if (split_a != split_b) {
        console.log('different')
    };

    // split_a.forEach(element => {
    //     console.log(element);
    // });

    // console.log('A:' + split_a);
    // console.log('B:' + split_b);
    // return split_b;

    // if (result == A) {
    //     return true;
    // } else {
    //     return false;
    // }
};

console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));

// 轉陣列->找出一樣的->把B剩下不一樣的reverse