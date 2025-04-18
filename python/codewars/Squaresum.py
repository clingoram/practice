'''
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
'''
def square_sum(numbers):
  # 依據參數陣列的長度做平方根加總
    sum = 0
    for i in numbers:
        sum+= i * i
    return sum

    # solution 2.
    # return sum(x ** 2 for x in numbers)