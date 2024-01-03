'''
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

'''
def remove_char(s):
  # get length of string:len()
  # slice string[start,end]
  return s[1:len(s)-1]
  # or
  # return s[:len(s)-1]
  
letter = str('eloquent')
# 'loquen'
print(remove_char(letter))