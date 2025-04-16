/**
 * 3498. Reverse Degree of a String
 * 
 * 
 * a = 26,b = 25,c = 24.....
 * Reversed Alphabet * index in string = products.
 * 取products 總和
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {

    let letterObj = generateAlphabet();
    let sum = 0;
    // value + index in string = 
    for(let i = 0;i < s.length;i++) {
      sum += letterObj[s[i]] * (i +1);
    }
    return sum;
  
    /**
     * 產生26個英文字母
     * a = 26,b = 25 ....
     * @returns obj
     */
    function generateAlphabet(){
      let start = "a";
      let end = "z";
      let alp = {};
      let range = 26;
      let i = start.charCodeAt(0), j = end.charCodeAt(0);
      for (; i <= j; ++i) {
        alp[String.fromCharCode(i)] = range--;
      }
      return alp;
    }
  };
  let s = "abc";
  // 148
  // 26 + 50 + 72 = 148
  console.log(reverseDegree(s));