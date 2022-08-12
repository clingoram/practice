'''
Gravity Flip

給一個字串(R/L)和一個數字陣列，依據該字串把陣列做遞增或遞減方式回傳

'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
'''
def flip(a,b):
  if a == 'R':
    # 遞增
    return sorted(a)
  else:
    # 遞減
    return sorted(a,reverse=True)