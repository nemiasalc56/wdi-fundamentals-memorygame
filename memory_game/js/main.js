
var cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log('You found a match!');
	} else {
		console.log('Sorry, try again.');
	}
};

 function flipCard(cardId){

 if (cardsInPlay.length === 2){
 	checkForMatch();
 	/*if(cardsInPlay[0] === cardsInPlay[1]){
 		alert('You found a match!');
 	}else{
 		alert('Sorry, try again.');
 	}*/
 }

 console.log('User flipped ' + cards[cardId]);
 cardsInPlay.push(cards[cardId]);

 };

flipCard(0);
flipCard(2);
