/*----------------------------------------*\
game.js
@author: Dylan Burkey
@date: May 10, 2018 - 4:34 PM

\*----------------------------------------*/

/**
 *  
 *  Set Global Vars 
 * 
 *  @date: Thursday May 10, 2018 - 4:35 PM
 *  @author: Dyan Burkey
 *
 */ 

// create vars for letters in alphabet
var keyBoardLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/**
 *  Declare Global Vars
 *
 *  @date: Thursday May 10, 2018 - 4:46 PM
 *  @author: Dyan Burkey
 *
 */ 

var debug = false;
var wins = 0;
var losses = 0;
var guessesLeft = 9;

/**
 *  Create an Arrary to store user guesses
 *
 *  @date: Thursday May 10, 2018 - 4:47 PM
 *  @author: Dyan Burkey
 *
 */ 
var guessesSoFar = [];

// Make sure userGuess is set to null, default behavior
var userGuess = null;


/**
 *  Create a variable for the computer to pick a letter, 
 *
 *  @date: Thursday May 10, 2018 - 4:49 PM
 *  @author: Dyan Burkey
 *
 */ 
var letterToBeGuessed = keyBoardLetters[Math.floor(Math.random() * keyBoardLetters.length)];
//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

/**
 *  Start listening for user events
 *  
 *  @date: Thursday May 10, 2018 - 4:51 PM
 *  @author: Dyan Burkey
 *
 */ 
document.onkeyup = function(event) {

/**
 *  Store user onkeyup to UserGuess
 *
 *  @date: Thursday May 10, 2018 - 4:53 PM
 *  @author: Dyan Burkey
 *
 */ 
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to guessesSoFar array but 
	// only if it wasn't already previously picked by the user
	// also make sure that the character user picks is within
    // the alphabet, and not any non-usable character
    
/*============================================================================*\

  The clients guess is stored in the guessesSoFar arrray
    - make sure it wasnt picked before
    - make sure that key is in the alphabet

  @date: Thursday May 10, 2018 -4:55 PM
  @author: Dylan Burkey


\*============================================================================*/

// Reduce by 1 when user makes a guess

	if (guessesSoFar.indexOf(userGuess) < 0 && keyBoardLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	
    
/*============================================================================*\

  If the letterToBeGuessed === userGuess make it a win and reset amount of 
  guesses the user has.


  @date: Thursday May 10, 2018 -4:58 PM
  @author: Dylan Burkey


\*============================================================================*/
	if (letterToBeGuessed == userGuess) {
		wins++;
		//console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = keyBoardLetters[Math.floor(Math.random() * keyBoardLetters.length)];
		//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		                //console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = keyBoardLetters[Math.floor(Math.random() * keyBoardLetters.length)];
            if($debug == true){    
        //console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
            }
    }

	// Displaying progress to HTML
	var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I\'m thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + guessesSoFar + "</p>";
    

    // Add basic html
	document.querySelector('.psych-game').innerHTML = html;

}