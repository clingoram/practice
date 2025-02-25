"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
from operator import le
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
# class Solution:
#   def findDifferentBinaryString(self, nums: List[str]) -> str:


# nums = ["111","011","001"]
# # 101
# a = Solution()
# print(a.findDifferentBinaryString(nums))

class Solution:
    '''
    3264. Final Array State After K Multiplication Operations I

    You are given an integer array nums, an integer k, and an integer multiplier.
    You need to perform k operations on nums. In each operation:
      Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
      Replace the selected minimum value x with x * multiplier.
    Return an integer array denoting the final state of nums after performing all k operations.

    Hints:
    1. Maintain sorted pairs (nums[index], index) in a priority queue.
    2. Simulate the operation k times.

    Example 1:
    Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
    Output: [8,4,6,5,6]
    Explanation:
      Operation	Result
      After operation 1	[2, 2, 3, 5, 6]
      After operation 2	[4, 2, 3, 5, 6]
      After operation 3	[4, 4, 3, 5, 6]
      After operation 4	[4, 4, 6, 5, 6]
      After operation 5	[8, 4, 6, 5, 6]
    
    Example 2:
    Input: nums = [1,2], k = 3, multiplier = 4
    Output: [16,8]
    Explanation:
      Operation	Result
      After operation 1	[4, 2]
      After operation 2	[4, 8]
      After operation 3	[16, 8]
    

    Constraints:
    1 <= nums.length <= 100
    1 <= nums[i] <= 100
    1 <= k <= 10
    1 <= multiplier <= 5

    3個參數:int array nums.int k & int multiplier
    需在nums上操作K次，每次找出nums中最小值X，若有重複多個最小值出現，則取第一個出現的
    將X汰換成 X * multiplier
    回傳在操作K次上述步驟後的num
    '''
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
      # solution 1
      # for _ in range(k):
      #   minIndex = 0
      #   for i in range(len(nums)):
      #     if nums[i] < nums[minIndex]:
      #       minIndex =i
      #   nums[minIndex] *= multiplier
      # return nums

      # Solution 2.
      # for _ in range(k):
      #    x = nums.index(min(nums))
      #    nums[x] *= multiplier
      # return nums

      op = 0
      while op < k:
        x = min(nums)
        j = 0
        for i in range(len(nums)):
          if nums[i] < x:
            x = nums[i]
            j = i

        op+=1
        nums[j] *= multiplier

      # while(op < k):
      #   min = newNums[0]
      #   newNums.remove(min)
      #   newNums.append(min * multiplier)
      #   op+=1
      return nums
nums = [2,1,3,5,6]
k = 5
multiplier = 2
# [8,4,6,5,6]
a = Solution()
print(a.getFinalState(nums,k,multiplier))
