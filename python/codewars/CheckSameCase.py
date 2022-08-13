'''
Check same case

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
'''
import re

def same_case(a, b): 
  '''
  給兩個字串參數，檢查這兩個字串是否同樣的大寫或小寫

  兩個都同樣，回傳1
  兩個不同，回傳0
  兩者之一或都不是字串(a-zA-Z)，回傳-1
  '''
  # Solution 1.Runtime took 458 ms.
  regex = '[^a-zA-Z]+'
  
  if re.search(regex,a) or re.search(regex,b):
      return -1
  
  if (a.lower() == a and b.lower() == b) or (a.upper() == a and b.upper() == b):
      return 1
  else:
      return 0

  # Solution 2.
  # return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1