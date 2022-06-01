/**
 * Will you make it?
 * 
 * You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
 * 
 * You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
 * 
 * Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. 
 * 
 * The input values are always positive.
 * 
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  /**
  distanceToPump 加油站距離；mpg(miles per gallon) 每英里平均油耗；fuelLeft 剩多少油

  離最近的加油站要50 miles遠，平均汽車跑25英里(miles)遠會消耗掉2加侖的燃料，計算是否
  可以在油沒之前到達加油站，可以則回傳true；否則回傳false
   */

  return mpg * fuelLeft >= distanceToPump;
};
console.log(zeroFuel(50, 25, 2));
// true;