'''
Linked-list是由一連串的節點（Node）所構成，每個節點指向下一個節點，而最後一個節點則指向Null（在python裡面是None）。

因此，每個節點本身應該要有兩種屬性（attribute），一個是本身帶有的值或者是資料，另一個則是指向下一個節點的指標（pointer）。

Linked-list與一般陣列（array）比起來最大的不同點在於：
陣列使用一連串的記憶體位置，因此可以透過array[index]直接存取資料，但是相對的，若要在陣列中加入或是刪除元素，則需要大量的資料搬移。

Linked-list的資料則散落在記憶體中各處，加入或是刪除元素只需要改變pointer即可完成，但是相對的，
在資料的讀取上比較適合循序的使用，無法直接取得特定順序的值（比如說沒辦法直接知道list[3]）。
'''


class ListNode:
  # 資料val與指向下一個node的指標next
  def __init__(self, val = 0, next = None):
    # 若要變成doubly linked link，則在參數加上prev
      self.val = val
      self.next = next

# 宣告一個名為 node1 的 ListNode 結構，val 為 5
node1 = ListNode(5) 

class SingleLinkedList(object):
  def __init__(self,head = None):
  # 紀錄串列的起始位置
    self.head = head

  # 將值為value的節點接在陣列的最尾端
  def append(self,value):
    if(not self.head):
      # 若head = null
      self.head = ListNode(value)
      return

    node = self.head

    while(node.next):
      # 若node != null，把目前的節點指到下一個欲新增的value
      node = node.next

    # 宣告node.next = ListNode(新增value) 
    node.next = ListNode(value)

  # 將value插入index的位置
  def insert(self,index,value):
    # 若要插入的index>目前長度
    if(index >= self.size()):
      self.append(value)
      return

    count = 0
    node = self.head
    previous = None

    while(node):
      if(count == index):
        if(previous):
          new_node = ListNode(value,previous.next)
          previous.next = new_node
        else:
          self.head = ListNode(value,node)
        return

      count+=1
      previous = node
      node = node.next

  # 移除位置為index的節點
  def removePos(self,index):
    count = 0
    node = self.head
    previous = None

    while(node):
      if(count == index):
        if(previous):
          previous.next = node.next
          node = node.next
        else:
          self.head = node.next
          node = self.head
        return
      else:
        previous = node
        node = node.next

  # 移除值為value的節點
  def remove(self,value,all = False):
    node = self.head
    previous = None
    while(node):
      if(node.val == value):
        if(previous):
          previous.next = node.next
          node = node.next
        else:
          self.head = node.next
          node = self.head
        
        if(not all):
          return
      else:
        previous = node
        node = node.next

  # 回傳第一個出現的value在串列中的的位置
  def indexof(self,value):
    node = self.head
    count = 0
    while(node):
      if(node.val == value):
        return count
      count+=1
      node = node.next

    # 走訪所有的節點並印出每個結點的資料
  def print_nodes(self):
    if(not self.head):
      print(self.head)
      
    node = self.head

    while(node):
      end = " -> " if node.next else "\n"
      print(node.val,end = end)
      node = node.next

  # 回傳index位置的value
  def at(self,index):
    count = 0
    node = self.head
    while(node):
      if(count == index):
        return node.val
      count+=1
      node = node.next

  def clear(self):
      self.head = None
  
  def isEmpty(self):
    return self.head is None
  
  def size(self):
    count = 0
    node = self.head

    while(node):
      count+=1
      node = node.next
    return count

create = SingleLinkedList()
create.append(1)
create.append(6)
create.append(63)
create.insert(2,25)
create.removePos(2)
create.remove(63)
create.size()
create.print_nodes()

