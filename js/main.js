var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var checkForMatch = function(){
  if (cards[0] === cards[2]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
var flipCard = function(cardId){
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
};
flipCard(0);
flipCard(2);
