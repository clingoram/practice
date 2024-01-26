def count_substring(string:str, sub_string:str):
  '''
  Find a string

  給兩個字串參數，計算有幾個sub_string在string內
  '''
  return len([i for i in range(len(string)) if string.startswith(sub_string, i)])
one = "ABCDCDC"
two = "CDC"
# 2
count_substring(one,two)