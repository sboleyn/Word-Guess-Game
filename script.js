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

// This function should choose a random word at the beginning of the game and that word should be displayed ex._____ on the page.

function chooseRandomWord(wBank){
	//Generates a random variable
	var rando = Math.floor((Math.random() * wordBank.length));	
	var randomWord = wBank[rando];
	var oneHiddenLetter = "_ ";
	var displayHiddenWord = oneHiddenLetter.repeat(randomWord.length);
	var dhwNoEndSpace = displayHiddenWord.substr(0,displayHiddenWord.length-1);
	var getWordSpace = document.getElementById("currentWord");
	getWordSpace.textContent = dhwNoEndSpace;
// 	Testing purposes	
//	return wBank[rando];
	}

function game(){
	
	//Create an empty array for the letters already guessed
	var lettersAlreadyGuessed = [];
	//Guesses go down 1 as the user presses a key not in the phrase; does not go does or up if the guess has already been guessed befored, and stays the same if the guess is a good guess
	
	//Set guesses to 12 at start of game
	var guessesRemaining = 12; 
	
	document.onkeyup = function(event) {
		lettersAlreadyGuessed[lettersAlreadyGuessed.length]=event.key; 
		var letterGuessedList = document.getElementById("lettersGuessed");
		if (lettersAlreadyGuessed.includes(event.key)){
			return ; 
		}
		else if (lettersAlreadyGuessed.indexOf(event.key) === -1){
			letterGuessedList.textContent = lettersAlreadyGuessed.join(", ");
//			guessesRemaining--; 
			var guessesSpace = document.getelementbyId("guessesRemaining");
			guessesSpace.textContent = guessesRemaining;	
		}
	};
}

	// Reference
	//var res = str1.concat(str2);



function setup(){
	chooseRandomWord(wordBank);
//Testing purposes	
//	console.log(chooseRandomWord(wordBank));
}

window.addEventListener('load', function() {
  // Call the setup function
 	setup();
 	game();
});