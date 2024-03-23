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

from functools import reduce
from typing import Counter


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


def shortestCompletingWord(licensePlate: str, words: list[str]) -> str:
    license_chars = [char.lower() for char in licensePlate if char.isalpha()]
    license_count = Counter(license_chars)
    words.sort(key=len)
    for word in words:
        word_count = Counter(word)
        if all(word_count[char] >= license_count[char] for char in license_count):
            return word
        
licensePlate = "1s3 PSt"
words = ["step","steps","stripe","stepple"]
# print(shortestCompletingWord(licensePlate, words))

'''
2828. Check if a String Is an Acronym of Words
Difficulty:Easy

Given an array of strings words and a string s, determine if s is an acronym of words.
The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

Return true if s is an acronym of words, and false otherwise.

Hints:
1.Concatenate the first characters of the strings in words, and compare the resulting concatenation to s. 

Example 1:
Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym. 

Example 2:
Input: words = ["an","apple"], s = "a"
Output: false
Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively. 
The acronym formed by concatenating these characters is "aa". 
Hence, s = "a" is not the acronym.

Example 3:
Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
Output: true
Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy". 
Hence, s = "ngguoy" is the acronym.
 

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 10
1 <= s.length <= 100
words[i] and s consist of lowercase English letters.
'''
def isAcronym(words: list[str], s: str) -> bool:
    '''
    給一個內有string的list，檢查該list每個字母開頭是否符合字串參數s
    '''
    result = ""
    for char in range(len(words)):
      result+= words[char][0:1]
    return result == s
words =["never","gonna","give","up","on","you"]
s = "ngguoy"
# true
print(isAcronym(words,s))