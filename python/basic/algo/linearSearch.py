def linearSearch(arr,x):
  for i in arr:
    if i == x:
      return i
  return -1

arr = [2,4,6,8,10]
x = 8
result = linearSearch(arr,x)
print(result)