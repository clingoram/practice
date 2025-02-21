"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
from typing import List
# module
# import basic.algo.linearSearch
# arr = [2,4,6,8,10]
# target = 8
# 3(return index)
# print(basic.algo.linearSearch.linearSearch(arr,target))

# oop
# from file name(module) import the class.
# from oop.Fruit import Fruit
# from oop.Melon import Melon
# fruits = Fruit("Apple",3,5)
# print(fruits.calculate())

# fruits = Fruit()
# fruits.make_watering()

# v = Melon()
# v.make_seedling()
# v.palnt()



def diagonalDifference(arr):
  '''
  Diagonal Difference
  Complete the 'diagonalDifference' function below.

  The function is expected to return an INTEGER.
  The function accepts 2D_INTEGER_ARRAY arr as parameter.
  '''
  left = 0
  right = 0
  for i in range(len(arr)):
    left += arr[i][i]
    right += arr[i][len(arr) - 1 - i]
  return abs(left - right)




'''
1415. The k-th Lexicographical String of All Happy Strings of Length n

A happy string is a string that:
  consists only of letters of the set ['a', 'b', 'c'].
  s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

Hint:
 Generate recursively all the happy strings of length n.
 Sort them in lexicographical order and return the kth string if it exists.

Example 1:
Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

Example 2:
Input: n = 1, k = 4
Output: ""
Explanation: There are only 3 happy strings of length 1.

Example 3:
Input: n = 3, k = 9
Output: "cab"
Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 

Constraints:
1 <= n <= 10
1 <= k <= 100
'''

'''
1980. Find Unique Binary String

Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

Hints:
1. We can convert the given strings into base 10 integers.
2. Can we use recursion to generate all possible strings? 

Example 1:
Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.

Example 2:

Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.

Example 3:
Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 

Constraints:
n == nums.length
1 <= n <= 16
nums[i].length == n
nums[i] is either '0' or '1'.
All the strings of nums are unique.
'''
class Solution:
  def findDifferentBinaryString(self, nums: List[str]) -> str:
   s = Set()
   for i in range(len(nums)):
     s.add(int(nums[i]),2)


nums = ["111","011","001"]
# 101
a = Solution()
print(a.findDifferentBinaryString(nums))