/**
 * List Filtering
 * 
 * In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 * 
 * Example
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */
function filter_list(l) {
  // input是有字串和數字的陣列，回傳該陣列中，資料型態為數字的值，並以陣列方式呈現

  // Solution 1.Runtime took 862 ms.
  return l.filter(function (n) {
    return typeof n === 'number';
  });

  // Solution 2.Runtime took 835 ms.
  //   let result = [];
  //   for(let i = 0;i<l.length;i++){
  //     if(typeof l[i] === 'number'){
  //       result.push(l[i]);
  //     }
  //   }
  //   return result;
}