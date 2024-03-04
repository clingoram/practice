def lonelyinteger(a):
  '''
  Lonely Integer
  給一個數字陣列，回傳該陣列中唯一出現一次的元素
  
  Complete the 'lonelyinteger' function below.
 
  The function is expected to return an INTEGER.
  The function accepts INTEGER_ARRAY a as parameter.
  '''
  for i in a:
    if a.count(i) == 1:
      return i
arr = [1, 2, 2, 3, 4, 3, 2, 1]
# 4
lonelyinteger(arr)