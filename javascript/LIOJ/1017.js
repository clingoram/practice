/**
1017

貪婪的小偷
Description

根據內政部警政署的這份：台灣地區住宅竊盜與防制措施之研究報告指出，在針對住宅竊盜之被害人進行電話訪談後，有以下幾項發現：

住宅遭竊時間在凌晨零時至三時比例是最高的。
三成的民眾是有重複遭竊的經驗。
警方之破案比率過低。
五成受訪者最希望警方加強巡邏。
俗話說的好：知己知彼，百戰不殆。

為了要理解小偷的心裡到底在想什麼，我們也可以先假設自己是小偷，設身處地，再去想想自己會去偷哪些地方還有偷哪些東西。

首先呢，因為時間有限，所以當然是偷價值越高的東西越好，不過這其實也要看狀況，因為每樣物品除了價值以外還有重量。舉例來說，一台 50 吋電視機可能有好幾公斤，價值可能有六七千左右。但是比起電視，小偷可能會覺得偷現金五千塊更好，因為電視除了比較難搬運以外，也要另外找管道把贓貨銷出去，其實隱藏的成本很高。

所以呢，要偷什麼東西其實是要運用一點腦力去思考的。尤其是當物品一多的時候，就需要思考更久。

為了模擬小偷的思考模式，你的指導教授原本要拜託你寫一個程式來計算，給你一個物品清單，上面有每樣物品的重量 W_{i}W 
i
 	
  與價值 P_{i}P 
i
 	
 ，還有小偷的背包能夠承受的重量 WW，問你小偷最多能偷到多少價值的東西。

但後來你的教授發現目前正在研究的這個案例比較簡單一些，遭竊的店家主要都是金飾店。

金飾店特別的點在於哪裡呢？就在於價錢通常都與重量成正本，越重的黃金價錢越高。而且那些金飾通常都不會太重，所以小偷能偷的東西會以「件數」來計算而非重量。

因此，問題就簡化成：給你一個物品清單，上面有每樣物品的價值 P_{i}P 
i
 	
 ，還有小偷最多能帶走的件數，請你幫忙求出小偷最多能偷到多少價值的東西。


Input
第一行為一個數字 C，0&lt;=C&lt;=10000<=C<=1000，代表小偷最多能夠帶走幾樣物品。

第二行為一個數字 N，1&lt;=N&lt;=10001<=N<=1000，代表一共有幾項物品

接下來 N 行每一行都包含一個數字 P_{i}，1 &lt;= P_{i} &lt;= 100000P 
i
 	
 ，1<=P 
i
 	
 <=100000，代表第 i 項物品的價值


Output
請你輸出小偷最多能偷到多少價值的東西

sample inputs:
3
5
1
3
5
7
9

sample out:
21
一共可以拿 3 樣物品，因此拿價值最高的三樣：9 + 7 + 5 = 21

------------------------------------------------------------
 第一行數字表示可以帶走的C項物品
 第二行之後，表示每項物品的價值
 要取所有物品中價值最高的C項，並把那C項價值加總

 原始題目是每行各一個數字，但在VS CODE這樣會出錯，所以我先把它改成用陣列的方式呈現
第一個數字(item)是要取得幾筆資料
第二個(陣列) products 是每項物品的價值
回傳最高價格的加總
 */
function totalValue(num, products) {
  /*
  依序找出最高價值前3名
  之後把他們加總
  */

  // solution 1:
  // 由大到小排序
  let sorted = products.sort(function (a, b) {
    return b - a;
  });
  // return sorted[0] + sorted[1] + sorted[2];

  // solution 2:
  let sliceValue = sorted.slice(0, num);
  return sliceValue.reduce((prev, current) => prev + current);

}
const item = 3; //可帶走的物品項目
const products = [5, 1, 3, 5, 7, 9];// 每項物品最高價值，取三樣最高價值的物品並加總
// return 21(5+7+9)
console.log(totalValue(item, products));
