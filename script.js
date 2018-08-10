// JavaScript Document
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
var getWins = document.getElementById("displayWins");

// This function should choose a random word at the beginning of the game and that word should be displayed ex._____ on the page.

function chooseRandomWord(wBank){
	//Generates a random variable
	var rando = Math.floor((Math.random() * wordBank.length));	
	var randomWord = wBank[rando];
	var oneHiddenLetter = "_";
	var displayHiddenWord = oneHiddenLetter.repeat(randomWord.length+1);
	var dhwNoEndSpace = displayHiddenWord.substr(0,displayHiddenWord.length-1);
	getWordSpace.textContent = dhwNoEndSpace;
	return [randomWord, rando, dhwNoEndSpace];
	};

//This function starts a new game	
function newGame(){
	outputArray= chooseRandomWord(wordBank);
	chosenRandomWord= outputArray[0];
	wordBlankArray= outputArray[2].split("");
	lettersAlreadyGuessed = [];
	letterGuessedList.textContent = "";
	guessesRemaining = 12; 
	guessesSpace.textContent = guessesRemaining;	
	wordArray = chosenRandomWord.toLowerCase().split("");
};	

// Create a global variable for randomWord(the word picked from the bank as a string), rando(the index from the word bank that belongs to the random word), and dhwNoEndSpace (a string that looks like "_ _ _ _ _ _" that is the length of the random word)
var outputArray= chooseRandomWord(wordBank);

var chosenRandomWord= outputArray[0];
var wordBlankArray= outputArray[2].split("");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create an empty array for the letters already guessed
var lettersAlreadyGuessed = [];

//Set guesses to 12 at start of game, wins to 0
var guessesRemaining = 12; 
var wins=0;

// Example of wordArray is ["e", "y", "e", "b", "a", "l", "l", "s"]
var wordArray = chosenRandomWord.toLowerCase().split("");

document.onkeyup = function(event) {
	//Runs when the gamer selects a valid key that has already been guessed; nothing happens	
	var lowKey = event.key.toLowerCase(); 
	if (alphabet.includes(lowKey) && lettersAlreadyGuessed.includes(lowKey)){
		console.log("already been guessed");
	}

	//Runs if the gamer selects a valid key which is in the word that has not been guessed
	else if (alphabet.includes(lowKey) && wordArray.includes(lowKey) && lettersAlreadyGuessed.indexOf(event.key) === -1){

		for (i=0; i<chosenRandomWord.length;i++){
			if (chosenRandomWord[i].toLowerCase() === lowKey){
				wordBlankArray[i] = event.key.toUpperCase();
				getWordSpace.textContent = wordBlankArray.join("");
			};
		}

		if (wordBlankArray.indexOf("_") === -1){
			++wins;
			getWins.textContent = wins;
			newGame();
		}
	//Ends the else if level
	}

	//Runs if the gamer selects a valid key which is not in the word 
	else if (alphabet.includes(lowKey) && guessesRemaining > 0) {
		--guessesRemaining; 
		guessesSpace.textContent = guessesRemaining;	
		lettersAlreadyGuessed[lettersAlreadyGuessed.length]=event.key; 
		//displays a list like A, B, C of guessed letters not in the word
		letterGuessedList.textContent = lettersAlreadyGuessed.join(", ");

		if (guessesRemaining === 0){
			// Create a global variable for randomWord(the word picked from the bank as a string), rando(the index from the word bank that belongs to the random word), and dhwNoEndSpace (a string that looks like "_ _ _ _ _ _" that is the length of the random word)
			newGame();
		}
	}
//Ends the document onkey up function of game	
};

