class Fruit:

  def __init__(self,name:str,price:int,quantity:int):
    '''
    等同於PHP __construct()
    '''
    self.name = name
    self.price = price
    self.quantity = quantity

  
  def calculate(self):
    '''
    計算總價
    '''
    return self.price * self.quantity