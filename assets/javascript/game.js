/* 
	variables:
		var character array[[name, hitpoints, attackPower, counterAttackPower]]
		var gameState = pick character, pick who to fight, fight, game won, game over
		var characterSplice = splice of character array to work with
		var attacker[]
		var defender[]
	
	functions:
	
	setUp:
		create array of characters on screen with displayed hitpoints and names and pics using character array as reference

	pickAttacker:
		sets picked character on click as your character and move the rest into enemies available to attack
		set picked character as attacker in attacker var

	pickDefender:
		sets picked character as first defender and move to defender section
		sets picked character as defender in defender var


	attack: 
		reduce defender hitpoints by attacker attackPower, and attacker's hitpoints by defender counterAttackPower
		set attack power of character to 2x what its previous value was
		check to see if one died
			if attacker died set game state to lost
			if defender died 

	
*/

var characters = [
		{name: "starLord", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/starLordPortrait.jpg"},
		{name: "drax", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/grootPortrait.jpg"},
		{name: "gamora", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/draxPortrait.jpg"},
		{name: "groot", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/gamoraPortrait.jpg"},
		{name: "rocket", health: 100, attackPower:  10, counterAttackPower: 5, src: "assets/images/rocketPortrait.jpg"}

	];

var gameState = 0;

var characterSplice;

var attacker;

var defender;

function setUp(){
	$.each(characters, function(index,value){
		var img = $("<img></img>", value).css({height: "300px", width: "210px", margin: "10px"});

		$("#characters").prepend(img);
	

	});
}

setUp();
//jquery snap scrolling
// $('html, body').animate({
//     scrollTop: ($('#element').offset().top)
// },500);