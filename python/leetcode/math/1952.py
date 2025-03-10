'''
1952. Three Divisors
Difficulty:Easy

Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

Example 1:
Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.

Example 2:
Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.
 

Constraints:
1 <= n <= 104
'''
def isThree(self, n):
    """
    :type n: int
    :rtype: bool
    """
    # N是否只能被3個數字整除，若是，回傳true，否則回傳false
    # N可能會是1 => false
    # 計算能被整除的數字有幾個

    # divisors一定會有1和N自己 => 2個
    if n <= 3:
        return False

    count = 0
    for i in range(1,n+ 1):
        if n % i == 0:
            count+=1
        if count > 3:
            return False
    return count ==3