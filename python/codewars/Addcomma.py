def print_array(arr):
  '''
  Printing Array elements with Comma delimiters

  給一個陣列，把該陣列轉成字串。
  若陣列長度大於1，則中間須加上逗號
  '''
  # Solution 1.
  # result = ""
  # for i in arr:
  #   result += str(i)
  #   result += ","
  # return result

  # Solution 2.
  return ','.join([str(elem) for elem in arr])

data = ["hello", "this", "is", "an", "array!"]
print(print_array(data))