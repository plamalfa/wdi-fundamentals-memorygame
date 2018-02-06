var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.img"
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-diamonds.img"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-hearts.img"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.img"
  }
];
var cardsInPlay = [];
var checkForMatch = function(){
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } else {
        alert("Sorry, try again.");
      }
  };
}
var flipCard = function(){
var cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);
  console.log("User flipped " + (cards[cardId].rank))
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
console.log(checkForMatch());
};
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.img");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
};
createBoard ();
