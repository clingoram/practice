'''
3456. Find Special Substring of Length K

You are given a string s and an integer k.
Determine if there exists a substring of length exactly k in s that satisfies the following conditions:
The substring consists of only one distinct character (e.g., "aaa" or "bbb").
If there is a character immediately before the substring, it must be different from the character in the substring.
If there is a character immediately after the substring, it must also be different from the character in the substring.
Return true if such a substring exists. Otherwise, return false.

Hints:
1.Return true if there is a sequence of consecutive characters of length k 

Example 1:
Input: s = "aaabaaa", k = 3
Output: true
Explanation:
The substring s[4..6] == "aaa" satisfies the conditions.
It has a length of 3.
All characters are the same.
The character before "aaa" is 'b', which is different from 'a'.
There is no character after "aaa".

Example 2:
Input: s = "abc", k = 2
Output: false
Explanation:
There is no substring of length 2 that consists of one distinct character and satisfies the conditions.

 

Constraints:
1 <= k <= s.length <= 100
s consists of lowercase English letters only.
'''
def hasSpecialSubstring(s: str, k: int) -> bool:
  count = 1
  for i in range(len(s) - 1):
    if s[i] == s[i + 1]:
      count+=1
    else:
      if count == k:
        return True
      count = 1
  return True if k == count else False

s = "aaabaaa"
k = 3
# True
print(hasSpecialSubstring(s,k))