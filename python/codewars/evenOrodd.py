'''
Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
'''
def even_or_odd(number):
    # string = ""
    # if(number % 2 == 0):
    #     string = "Even"
    # else:
    #     string = "Odd"
    # return string

    # 另一種寫法，Python 沒有3元，也不會有嚴格等於===，只有==
    return "Odd" if number % 2 else "Even"