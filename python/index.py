"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
# List
# 兩種方式印出陣列
from unicodedata import name


names = ["Amy","Bob","Kevin","Davis"]
numbers = [1,6,3,8,3]
# print(names[1:])
names.extend(numbers) # array merge or array push
names.extend("Alen") # 後面放字串的話，會把該字串拆開 "apple" => 'a','p','p','l','e'
names.insert(1,"Jo") # 把位置1的名子改成Jo
names.index("Bob") # find the name
numbers.count(3)
print(names)
print(numbers)