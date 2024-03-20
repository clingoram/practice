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


import re
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


