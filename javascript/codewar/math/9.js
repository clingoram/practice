/**
 * Human Readable Time
 * 
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 * 
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 * The maximum time never exceeds 359999 (99:59:59)
 * 
 * You can find some examples in the test fixtures.
 */
function humanReadable(seconds) {
  /*
  給一個非負數並以秒呈現的數值，把該數值換算成人類看得懂的時間
  HH:MM:SS 時分秒
  */

  // Solution 1.
  // let theSeconds = parseInt(seconds);
  // let minutes = 0;
  // let hours = 0;
  // if(theSeconds > 60){
  //   minutes = parseInt(theSeconds / 60);
  //   theSeconds = parseInt(theSeconds % 60);

  //   if(minutes > 60){
  //     hours = parseInt(minutes / 60);
  //     minutes = parseInt(minutes % 60);
  //   }
  // }
  //  if(theSeconds === 60){
  //   minutes = minutes+1;
  //   theSeconds = "00";
  // }else if(theSeconds <= 9){
  //   theSeconds = "0" + theSeconds;
  // }

  // if(minutes === 60){
  //   hours = hours+1;
  //   minutes = "00";
  // }else if(minutes <= 9){
  //   minutes= "0" + minutes;
  // }
  // if(hours <= 9){
  //   hours = "0" + hours;
  // }
  // return hours + ":" + minutes + ":" + theSeconds;

  // Solution 2.
  let hours = parseInt(seconds / 3600);
  let minutes = parseInt(seconds / 60) % 60;
  let theSeconds = seconds % 60;

  let pad = function (val) {
    return val < 10 ? "0" + val : val;
  }

  return pad(hours) + ":" + pad(minutes) + ":" + pad(theSeconds);
}