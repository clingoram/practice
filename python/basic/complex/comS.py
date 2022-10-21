'''
空間複雜度
常用的:
O(1)、O(n)、O(^2)
'''
# O(1)，X、Y數字再怎麼增加也不會影響到記憶體
x = 0
y = 0
x = x+1
y = y+1

# O(n)，取決於range的長度，若range很大，則算的次數越高，需要的空間時間也越多
list = []
i = 0
for i in range(5):
  list.append(i)
print(list)

# O(n^2)，可能2維陣列比較有可能
