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
	var displayHiddenWord = 
//	return wBank[rando];
}

function setup(){
//Testing purposes	
//	console.log(chooseRandomWord(wordBank));
}
//function game(){
//	
//}

window.addEventListener('load', function() {
  // Call the setup function
  setup();
});