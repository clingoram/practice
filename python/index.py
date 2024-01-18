"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
'''
A Letter's Best Friend
8kyu

Task
Given a string, return if a given letter always appears immediately before another given letter.

Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
Examples
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
Notes
All sentences will be given in lowercase.
'''
def best_friend(txt:str, a:str, b:str):
    '''
       在txt中，檢查參數b是否會出現在參數a之後，回傳Bool
    '''
    pass

text = "he headed to the store"
target_one = "h"
target_two = "e"
# True

# text ="we found your dynamite"
# target_one = "d"
# target_two = "y"
# False
answer = best_friend(text,target_one,target_two)
print(answer)