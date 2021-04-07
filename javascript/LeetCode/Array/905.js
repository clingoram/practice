/*
905.Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Note:
-----------
1.Array input前index會是奇數，後面是偶數
2.return output前面是偶數，後面是奇數

-----------
1 <= A.length <= 5000
0 <= A[i] <= 5000

---------------------------
EG.
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
	if (A.length < 2) {
		return A;
	}

	let temp = [];
	A.forEach(element => {
		element % 2 == 0 ? temp.unshift(element) : temp.push(element);
	});
	return temp;
};

const array = [3, 1, 2, 4];
console.log(sortArrayByParity(array));