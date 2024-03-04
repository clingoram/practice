#
# Complete the 'sockMerchant' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER_ARRAY ar
#

def sockMerchant(n, ar):
    '''
    給兩個參數，分別是N為陣列長度，ar為數字陣列
    計算出該陣列有幾個元素是相同的且是一對
    '''
    to_set = set(ar)
    count_pairs = 0
    for i in to_set:
      num = ar.count(i)
      if num % 2 == 0:
        count_pairs += (num//2)
      else:
        count_pairs += (num//2)
    return count_pairs

n = 9
array = [10, 20, 20, 10, 10, 30, 50, 10, 20]
sockMerchant