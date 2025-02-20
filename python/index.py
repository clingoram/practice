"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
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