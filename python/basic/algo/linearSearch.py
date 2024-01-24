def linearSearch(arr:list,x:int):
  for i in range(len(arr)):
    if arr[i] == x:
      return i
  return -1

# arr = [2,4,6,8,10]
# target = 8
# # 3(return index)
# result = linearSearch(arr,target)
# print(result)