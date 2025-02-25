from typing import List
class Solution:
    '''
    3432. Count Partitions with Even Sum Difference

    You are given an integer array nums of length n.
    A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:
      Left subarray contains indices [0, i].
      Right subarray contains indices [i + 1, n - 1].
    Return the number of partitions where the difference between the sum of the left and right subarrays is even.

    
    Hints:
    If the parity of the sum is even, the partition is valid; otherwise, there is no partition.
    Example 1:
    Input: nums = [10,10,3,7,6]
    Output: 4
    Explanation:
    The 4 partitions are:
    [10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
    [10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
    [10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
    [10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.

    Example 2:
    Input: nums = [1,2,2]
    Output: 0
    Explanation:
    No partition results in an even sum difference.

    Example 3:
    Input: nums = [2,4,6,8]
    Output: 3
    Explanation:
    All partitions result in an even sum difference.

    Constraints:
    2 <= n == nums.length <= 100
    1 <= nums[i] <= 100
    '''  
    def countPartitions(self, nums: List[int]) -> int:
      count = 0
      right = 0
      left = 0
      total = sum(nums)
      for i in range(len(nums) - 1):
        left += nums[i]
        right =  total - left

        if (left % 2) == (right % 2):
          count+=1

      return count

nums = [10,10,3,7,6]
# 4
a = Solution()
print(a.countPartitions(nums))