'''
BST 便是基於 binary search 而建立的資料結構

二分搜尋

取 已排序資料的中間索引的值，來確認是否為要搜尋的數，若不是，則將資料以中間索引分為兩半。此時便比較待搜尋的值與中間索引的值的大小，若比較小，則選擇較小的那一半資料，反之亦然。接著再繼續從一半的資料中取中間索引的值做比較，重複以上的步驟，直到找到為止。

'''
import math

numbers = [40,2,36,8,12,7]
target = 8

def goBst(data,k):
  # 取值範圍
  left = 0
  right = len(data) - 1

  while(left <= right):
    # 取中間索引的值
    middle = math.ceil((left + right) / 2)

    if(data[middle] < k):
      # 若搜尋值比中間的值大，將中間索引+1，取右半
      left = middle + 1

    elif(data[middle] > k):
      # 若搜尋值比中間的值小，將中間索引+1，取左半
      right = middle - 1
    else:
      # 若搜尋值等於中間的值，則回傳
      return middle

  return -1


index = goBst(numbers, target)
if index >= 0:
    print("Find at" + str(index))
else:
    print("No")

# Q.如果array長度是奇數，怎麼辦? middle要無條件進位取整數
# 無條件進位= 需 import math
# math.ceil()

# 無條件捨去= 需 import math
# math.floor()

# 時間複雜度:
# 以陣列長度/2.../4../6.../8..../16
# 花費:logN