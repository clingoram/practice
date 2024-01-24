def balancedSums(arr:list):
  '''
    左側所有元素的總和 = 右側所有元素的總和
    return YES ,if an element of the array such that the sum of all elements to the left 
    is equal to the sum of all elements to the right,else return NO.
  '''
  left = 0
  sumArray = sum(arr)
  for i in range(len(arr)):
    sumArray -= arr[i]
    if left == sumArray:
      return "YES"
    left+=arr[i]
  return "NO"
array = [1, 2, 3, 3]
# YES
print(balancedSums(array))