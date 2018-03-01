/* var questions=["What is Eugenics?", "Which group was considered \"fit\" to breed by the American Eugenics movement?" , "Which group was NOT used as test subjects for the eugenicists' sterilization techniques?" , "Which organization was founded by a Eugenicist who stated that society should not have to care for \"human beings who never should have been born?\"" , "Similar Question about Eurocentrism---Where did the Eurocentric idea of beauty originate (secular origination)?" , "When did the practice of Eugenics end?"]; */

/* var answers=[];

function startGame(){
	for (var i = 0; i<questions.length; i++){
	document.getElementById("questions").innerHTML=questions[i];
	}
}startGame();

var i=10; 
*/

///////////////////////////////timer/////////////////////////////////////

function gameTimer(){
	var i=15;
	setInterval(function(){
		document.getElementById("clock").innerHTML=(i + "s");
		if(i>=1){
			i--;
		}
		},1000)
} 
gameTimer(); 

/////////////////display items from questions array every 15 seconds////////////////////

function ArrayPlusDelay1(array, delegate, delay){
	var i=0;
	
	var interval = setInterval(function(){
		delegate (array[i]);
		if (i++>= array.length -1)
			clearInterval(interval);
	
		},delay)
	return interval
}

//call function
var int= ArrayPlusDelay1(["What is Eugenics?", "Which group was considered \"fit\" to breed by the American Eugenics movement?" , "Which group was NOT used as test subjects for the eugenicists' sterilization techniques?" , "Which organization was founded by a Eugenicist who stated that society should not have to care for \"human beings who never should have been born?\"" , "Similar Question about Eurocentrism---Where did the Eurocentric idea of beauty originate (secular origination)?" , "When did the practice of Eugenics end?"], function(obj) {$("#questions").html(obj)},8500);



/////////////////display items from answers array every 15 seconds////////////////////

//question 2; change to different array q15 seconds 
function ArrayPlusDelay2(array, delegate, delay){
	var i=0;
	
	var interval = setInterval(function(){
		delegate (array[i]);
		if (i++>= array.length -1)
			clearInterval(interval);
	
		},delay)
	return interval
}
var answers1= ArrayPlusDelay2(["people of southern European descent", "lab animals" ,"Dow Chemical Company", "media influences", "(significant dates/rights-children)..."], function(obj) {$(".custom-control-label1").html(obj)},17000); 

/////////////////////////////question 3/////////////////////////////////////////
/* 
function ArrayPlusDelay3(array, delegate, delay){
	var i=15;
	
	var interval = setInterval(function(){
		delegate (array[i]);
		if (i++>= array.length -1)
			clearInterval(interval);
	
		},delay)
	return interval
}

var answers2=["people of eastern European descent", "infants and children", "Johnson & Johnson", "Nazism", "date rights of disabled..."];

//////////////////question 4//////////////////////////////////////

function ArrayPlusDelay4(array, delegate, delay){
	var i=15;
	
	var interval = setInterval(function(){
		delegate (array[i]);
		if (i++>= array.length -1)
			clearInterval(interval);
	
		},delay)
	return interval
}

var answers3=["people of northern European descent", "deaf people", "Bayer", "European Colonialism", "date rights of civil rights/equality..."];

/////////////////////question 5//////////////////////////////////

function ArrayPlusDelay5(array, delegate, delay){
	var i=15;
	
	var interval = setInterval(function(){
		delegate (array[i]);
		if (i++>= array.length -1)
			clearInterval(interval);
	
		},delay)
	return interval
}

var answers4=["any person considered \"white\"","\"rebellious\" women", "Planned Parenthood","Scientific Racism","it hasn't ended..."];


/////////////////change color of answer section every 15 seconds//////////////////// */