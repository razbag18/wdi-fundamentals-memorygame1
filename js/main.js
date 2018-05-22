console.log("Up and running!");

//created array to store cards
var cards = ["queen", "queen", "king", "king"];
//created array to store cards in play
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match");
} else {
		console.log("Sorry, try again.");
	}
	}
//creating function called flipCard with one parameter, cardId
var flipCard = function (cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);



// Check if two cards being played
if (cardsInPlay.length === 2) {
//Check both cards are a match and alert user
checkForMatch();
}
};
//passing in as arguments represent the index numbers of the cards un the cards array we want to flip over
flipCard(0);
flipCard(2);