
const cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
let cardsInPlay = [];
let score = 0;

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById('score').textContent = 'Your score is: ' + (score + 1);
  console.log("You found a match!");
} else {
	document.getElementById('score').textContent = 'Your score is: ' + (score - 1);
  console.log("Sorry, try again.");
}
};

 function flipCard(){
 	var cardId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

 if (cardsInPlay.length === 2){
 	 checkForMatch();

 	if(cardsInPlay[0] === cardsInPlay[1]){
 		alert("You found a match!");
 	}else{
 		alert("Sorry, try again.");

 	}
 	
 }

 console.log('User flipped ' + cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);

 };

 function createBoard(){
 	for (var i = 0; i < cards.length; i++){
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('src', 'images/back.png');
 		cardElement.setAttribute('data-id', i);

 		cardElement.addEventListener('click', flipCard);
 		document.getElementById('game-board').appendChild(cardElement);
 	}
 };

function resetGame(){
	window.location.reload(createBoard());
}

createBoard();







