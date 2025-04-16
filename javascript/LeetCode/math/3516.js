/**
 * 3516. Find Closest Person
 * 
 * 參數x,y,z分別代表3個人各自的位置，其中z位置不動，算出x,y各要走幾步才能靠近z，回傳最後能接近z的是x(回傳1)還是y(回傳2)，回傳0則是同時接近。
 * 
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let win = 0;
    let xMove = Math.abs(x - z);
    let yMove = Math.abs(y - z);
    if(xMove < yMove){
      win = 1;
    }else if(xMove > yMove){
      win = 2;
    }
    return win;
  };
  let x = 2, y = 7, z = 4;
  // 1
  console.log(findClosest(x,y,z));