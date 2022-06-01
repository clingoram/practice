/**
 * Define a card suit
 * 
 * You get any card as an argument. Your task is to return the suit of this card (in lowercase).
 * 
 * Our deck (is preloaded):
 * ('3♣') -> return 'clubs'
 * ('3♦') -> return 'diamonds'
 * ('3♥') -> return 'hearts'
 * ('3♠') -> return 'spades'
 */
function defineSuit(card) {
  /*
  給一個字串參數，前面是數字或英文字母(JQK)，後面是撲克牌中的四種花色:心、方塊、鑽石、桃
  回傳該參數是什麼花色
  */
  // solution 1.
  let reverse = card.split('').reverse();
  switch (reverse[0]) {
    case '♣':
      return 'clubs';
      break;
    case '♦':
      return 'diamonds';
      break;
    case '♥':
      return 'hearts';
      break;
    case '♠':
      return 'spades';
      break;
  }
}