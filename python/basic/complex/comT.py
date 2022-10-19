'''
時間複雜度

時間空間複雜度 = 時間和空間增長的趨勢
'''
# O(1)，不管執行幾次，都一樣
x = 0
y = 1
temp = x # temp = 0 
x = y # x = 1
y = temp # temp = 0
# print(y)

# O(N)，取決於N的大小，N越大，則執行次數越多
n = 3
i = 1
for i in range(n) :
  i = i+1
# print(i)

# O(logN)，隨著循環次數增加，i會越來越大(越來越接近N值)
# 2^k = n，k = logN
while(i < n):
  i = i * 2
# print(i)

# O(nlogN)，N的循環次數*logN
a = 0
for a in range(n):
  t = 1
  while(t < n):
    t = t * 2 # t = 1, 1 * 2 = 2; t= 2, 2 * 2 = 4
# print(t)

# O(n2)，N的平方，有兩個迴圈，N*N
j = 1
for i in range(n):
  for j in range(n):
    a = a+1
print(a)
