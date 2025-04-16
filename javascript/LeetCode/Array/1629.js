/**
 * 1629. Slowest Key
 * releaseTimes[i] - releaseTimes[i - 1]
 * Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.
 * 
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    // the 0th keypress had a duration of releaseTimes[0].
    // {"c":9,"b": 20(element 29 - element 9),"c":20(element 49 - element 29),"d":1(element 50 - element 49)}
    // b is 20,and c is 20 too. If same answer,return the lexicographically largest key of the keypresses.

  let currentMaxValue = releaseTimes[0];
  let currentMaxKey = keysPressed[0];
  for(let i = 1;i < releaseTimes.length;i++) {
    let difference = releaseTimes[i] - releaseTimes[i - 1];

    if(difference > currentMaxValue || (difference == currentMaxValue && keysPressed[i] > currentMaxKey)){
      currentMaxValue = difference;
      currentMaxKey = keysPressed[i];
    }
  }
  return currentMaxKey;
};
// let releaseTimes = [9,29,49,50], keysPressed = "cbcd";
// "c"
// let releaseTimes = [23,34,43,59,62,80,83,92,97],keysPressed ="qgkzzihfc";
// "q"
// let releaseTimes = [12,23,36,46,62],keysPressed = "spuda";
// "a"
let releaseTimes = [19,22,28,29,66,81,93,97],keysPressed = "fnfaaxha";
//"a"
console.log(slowestKey(releaseTimes,keysPressed));