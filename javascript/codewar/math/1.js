/**
 * 從上次到今天為止，經過的時間大於cycleLength = true，否則 false
 * 
 * @param {*} last 
 * @param {*} today 
 * @param {*} cycleLength 
 */
function periodIsLate(last, today, cycleLength) {
  // solution 1
  // 從last到today共過了多少天，把相差的毫秒數轉換為天數
  const total = parseInt(Math.abs(last - today)) / 1000 / 60 / 60 / 24;
  // 天數是否>cycleLength
  return (total > cycleLength) ? true : false;

  // solution 2
  // return (last - today) / 86400000 > cycleLength;
}
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));