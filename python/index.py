"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
# Tuple (元組)：不能修改的List
# 優點：執行速度比list快，儲存在Tuple的資料比較安全
# https://ithelp.ithome.com.tw/articles/10200547
test = (4,6)
# print 6
# print(test[1]) 


'''
在list中加入元素:
A.append(E)：在A串列最後面加入E元素
A.extend(B)：在A串列中加入B串列的元素
A.insert(B)：在A串列中參數1的位置上加入B串列

移除串列的元素:
pop()：取出串列中最後一個元素，並且移除元素
A.remove(E)：移除A串列中第一個出現E元素

reverse()：反轉串列的順序
sort()：將串列做排序
'''
# color = ["red","green","blue"]
# color.append("orange")
# color.extend(["purple","pink"])
# color.insert(2,"grey")
# color.pop()
# color.remove("blue")
# color.reverse()
# print(color,sep = '\n')

from math import gcd



def gcdOfStrings(self, str1, str2):
  """
  :type str1: str
  :type str2: str
  :rtype: str
  """
  # str1 length % str2 length = res
  # EG.str1 = "ABCABC", str2 = "ABC" => 6 % 3 => 2(擷取str1最前面2個字)
  if ( str1 + str2 ) != ( str2 + str1 ):
    print("")
  elif str1 == str2:
    print(str1)
  else:
    length_by_gcd = gcd(len(str1), len(str2))

    print(str1[:length_by_gcd])

str1 = "LEET"
str2 = "CODE"
gcdOfStrings(str1,str2)