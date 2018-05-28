console.log("Up and running!");

//created array to store cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}

];
//created array to store cards in play
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match");
} else {
		console.log("Sorry, try again.");
	}
	}
//creating function called flipCard 
var flipCard = function () {
cardId = this.getAttribute("data-id");
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
this.setAttribute("src", cards[cardId].cardImage);

// Check if two cards being played
if (cardsInPlay.length === 2) {
//Check both cards are a match and alert user
checkForMatch();
}
};

//created new function createBoard
var createBoard = function (){
	//loop through cards to create card element for board
for (var i = 0; i < cards.length; i++){
	//create img element 
var cardElement =document.createElement("img");
//sourcing the back of card image
cardElement.setAttribute("src","images/back.png");
//data- attributes are meant to store data about an element that is not tied to a style.
cardElement.setAttribute("data-id", i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);
}
};
//passing in as arguments represent the index numbers of the cards un the cards array we want to flip over
createBoard();