// JavaScript Document
// Hold a global reference to the div#main element.
"use strict";

var main = document.getElementById("main");

var wordBank = [
"afraid",
"afterlife",
"alarming",
"alien",
"angel",
"apparition",
"astronaut",
"autumn",
"ballerina",
"bat",
"beast",
"bizarre",
"black",
"blood",
"bloodcurdling",
"bogeyman",
"bone",
"boo",
"broomstick",
"cackle",
"cadaver",
"candy",
"cape",
"carve",
"casket",
"cat",
"cauldron",
"cemetery",
"chilling",
"cloak",
"clown",
"cobweb",
"coffin",
"corpse",
"costume",
"cowboy",
"cowgirl",
"creepy",
"crown",
"crypt",
"dark",
"darkness",
"dead",
"demon",
"devil",
"devilish",
"disguise",
"dreadful",
"death",			   
"eerie",
"elf",
"enchant",
"evil",
"eyeballs",
"eyepatch",
"fairy",
"fall",
"fangs",
"fantasy",
"fear",
"firefighter",
"flashlight",
"fog",
"fright",
"frighten",
"frightening",
"frightful",			  
"genie",
"ghastly",
"ghost",
"ghostly",
"ghoul",
"ghoulish",
"goblin",
"goodies",
"gory",
"gown",
"grave",
"gravestone",
"grim",
"grisly",
"gruesome",		
"Halloween",
"hat",
"haunt",
"haunted house",
"hayride",
"headstone",
"hobgoblin",
"horrible",
"horrify",
"howl",
"imp",
"lantern",
"macabre",
"magic",
"mask",
"masquerade",
"mausoleum",
"midnight",
"mist",
"monster",
"moon",
"moonlight",
"moonlit",
"morbid",
"mummy",
"mysterious",
"night",
"nightmare",
"ninja",		
"October",
"ogre",
"otherworldly",
"owl",
"party",
"petrify",
"phantasm",
"phantom",
"pirate",
"pitchfork",
"poltergeist",
"potion",
"prank",
"pretend",
"prince",
"princess",
"pumpkin",
"repulsive",
"revolting",
"RIP",
"robot",
"scare",
"scarecrow",
"scary",
"scream",
"shadow",
"shadowy",
"shock",
"shocking",
"skeleton",
"skull",
"soldier",
"specter",
"spell",
"spider",
"spirit",
"spook",
"spooky",
"startling",
"strange",
"superhero",
"supernatural",
"superstition",
"sweets",
"tarantula",
"terrible",
"terrify",
"thrilling",
"tiara",
"toga",
"tomb",
"tombstone",
"treat",
"treats",
"trick",
"troll",
"tutu",
"unearthly",
"unnerving",
"vampire",
"vanish",
"wand",
"warlock",
"web",
"weird",
"werewolf",
"wicked",
"wig",
"witch",
"witchcraft",
"wizard",
"wizardry",
"wraith",
"zombie"
];

var letterGuessedList = document.getElementById("lettersGuessed");
var guessesSpace = document.getElementById("guessesRemaining");
var getWordSpace = document.getElementById("currentWord");
// This function should choose a random word at the beginning of the game and that word should be displayed ex._____ on the page.

function chooseRandomWord(wBank){
	//Generates a random variable
	var rando = Math.floor((Math.random() * wordBank.length));	
	var randomWord = wBank[rando];
	var oneHiddenLetter = "_ ";
	var displayHiddenWord = oneHiddenLetter.repeat(randomWord.length);
	var dhwNoEndSpace = displayHiddenWord.substr(0,displayHiddenWord.length-1);
	getWordSpace.textContent = dhwNoEndSpace;
	return randomWord;
// 	Testing purposes	
//	return wBank[rando];
	};

function game(rWord){
	// Create reference to lettersGuessed and guessesRemaining
	// var letterGuessedList = document.getElementById("lettersGuessed");
	// var guessesSpace = document.getElementById("guessesRemaining");
	// var wordSpace = document.getElementById("currentWord");

	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//Create an empty array for the letters already guessed
	var lettersAlreadyGuessed = [];
	
	//Set guesses to 12 at start of game, wins to 0
	var guessesRemaining = 12; 
	var wins=0;
	
	var wordArray = chosenRandomWord.toLowerCase().split("");

	document.onkeyup = function(event) {
		//Runs when the gamer selects a valid key that has already been guessed; nothing happens	
		if (alphabet.includes(event.key.toLowerCase()) && lettersAlreadyGuessed.includes(event.key.toLowerCase())){
			console.log("already been guessed");
		}

		//Runs if the gamer selects a valid key that has not been guessed
		else if (alphabet.includes(event.key.toLowerCase()) && wordArray.includes(event.key.toLowerCase()) && lettersAlreadyGuessed.indexOf(event.key) === -1){
			lettersAlreadyGuessed[lettersAlreadyGuessed.length]=event.key; 
			letterGuessedList.textContent = lettersAlreadyGuessed.join(", ");
			for (var i=0; i<rWord.length<i++){
				if rWord[i].toLowerCase() === event.key{
					
				}
			}
			getWordSpace.textContent = dhwNoEndSpace
		}

		// else if (guessesRemaining > 0) {
		// 	--guessesRemaining; 
		// 	guessesSpace.textContent = guessesRemaining;	
		// }
	};
};

	// Reference
	//var res = str1.concat(str2);

//function setup(){
//	chooseRandomWord(wordBank);
//Testing purposes	
//	console.log(chooseRandomWord(wordBank));
//}


// Calls to action
// window.addEventListener('load', function() {
//   // Call the setup function
//   var chosenRandomWord = setup();
// });
var chosenRandomWord = chooseRandomWord(wordBank);
game(chosenRandomWord);