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
		{name: "starLord", id: "starLord", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/starLordPortrait.jpg"},
		{name: "drax", id: "drax", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/draxPortrait.jpg"},
		{name: "gamora", id: "gamora", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/gamoraPortrait.jpg"},
		{name: "groot", id: "groot", health: 100, attackPower: 10, counterAttackPower: 5, src: "assets/images/grootPortrait.jpg"},
		{name: "rocket", id: "rocket", health: 100, attackPower:  10, counterAttackPower: 5, src: "assets/images/rocketPortrait.jpg"}

	];

var gameState = 0;

var characterSplice;

var attacker;

var defender;

var enemyPicked = 0;
var characterPicked = 0;





function setUp(){
	$.each(characters, function(index,value){
		var div = $("<div></div>").addClass(value.id).css({position: "relative", float: "left"});
		var img = $("<img></img>", value).css({height: "300px", width: "210px", margin: "10px"});
		img.removeAttr("id");
		var hp = $("<div></div>").text("Dance Stamina " + value.health).css({float: "left", zIndex: "1", position: "absolute", bottom: "30%", left: "12%"});

		$(div).appendTo(".characters");
		$("."+value.id).append(img).append(hp);

		

	});
}

function pickAttacker(selector){
	// console.log(selector);
	
	$("."+selector).appendTo("#yourCharacter");
	
}

function pickEnemy(selector){
	$("." +selector).appendTo("#enemyFighting");

}
function attack(selector){

}



setUp();


 $(document).on("click", "div", function() {
	
	var id = $(this).attr("class");

	
	if(characterPicked == 0){
		characterPicked = 1;
		pickAttacker(id);
	}



	

});

/*
Logic for attack button

	when pressed, subtract counterAttackPower of defender from attackers health, and attackPower from defenders health
				increment attack power by some amount
				show health change on screen




*/


	





// $('html, body').animate({
//     scrollTop: ($('#element').offset().top)
// },500);