"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案
"""
# 費氏數列
def fib(a,b):
    while a < 10:
        print(a)
        a,b = b,a+b

a = 0
b = 1
fib(a,b)