'''
取字串中的某個字，變數[數字]，0是從左邊第一個字母開始，-1則是從右邊(後面)開始，依序往上加，例如-2等於右邊倒數第2個字母
EG. 
word = 'apple'
print(word[0]) => a

取得字串中的某部分文字
word[start:end] => ap
也可以寫成這樣(省略start的0或結尾的index)
word[:end] => ap

word[:end] + word[start:] =>apple
'''
word = 'String'
print(word[2:] + word[3:]) #ringing; 2=ring ;3=ing
print('A' + word[3:]) # 把A加上從word開始算起第3個字母 => Aing

song = 'Beautiful Mistakes'
print(len(song)) # 長度


'''
list 相當於PHP中的array，除了能指定只輸出某元素外(array[0])
他也能被slice，但這個slice會另外組成一個新List，所以不會影響到原有的list

list是mutable，可改變它的內容；
string是immutable，不能被改變，除非建立一個新的物件，他有點像是hash內的key
'''
egList = [2,6,3,14]
print(sorted(egList)) # 排序 asc
print(sorted(egList,reverse=True)) # 排序 desc

another = [8,6,45]
print(egList+another) # 把兩個list組合在一起

# 改變list內容
cube = [8,5,3,21]
pow = pow(2,3) # 2的3次方
cube[2] = pow # 把cube的第2個位置element換成pow的值
cube.append(99) # 在cube最後面加上99
print(cube)
print(cube[:4])
cube[1:3] = [54,59,1] # 把cube的1-3位置換成list[54,59,1]
print(cube)
cube[0:len(cube)] = [] # 也能直接寫成cube[:]，全部清空
print(cube) # 清空，因為不知道cube總長度，所以直接用len來代替，不需要直接輸入數字

# 二維陣列
fruit = ['apple','orange']
color = ['red','blue','green']
combine = [fruit,color]
print(combine)
print(combine[0]) # 取出第一個陣列

# 費氏數列
def fib(a,b):
    while a < 10:
        print(a)
        a,b = b,a+b

a = 0
b = 1
fib(a,b)