'''
Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
'''
def positive_sum(arr):
  # solution 1.
    sum = 0
    for i in arr:
        if i > 0:
            sum += i
    return sum

    # solution 2.
    # return sum(x for x in arr if x > 0)