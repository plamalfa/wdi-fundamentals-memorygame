var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2) {
  if (cards[0] === cards[2]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
