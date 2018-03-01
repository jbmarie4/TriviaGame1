//setInterval function to run code repeatedly as each interval delay ends
//setTimeout function
//setTimeout + ( timer code + , timer delay in milliseconds + );


	/* setInterval (function gameTimer(){
	for (i=10; i>=0; i--){
	document.getElementById("clock").innerHTML=(i + "s");
	},1000);
	 */





/* var timerSeconds= 
*/

var i=90;

function gameTimer(){
	setInterval(function(){
		document.getElementById("clock").innerHTML=(i);
		if(i>=1){
			i--;

		}
		},1000);
		}		
gameTimer();

setTimeout(timeUp,1000 *92);

function timeUp(){
		alert("Time's Up!");	
		alert("Great job! You answered " + right + " questions correctly.");	

}




//keep score when click answers

var wrong=0;
var right=0;

function wrongAns(){
wrong=wrong+1;
console.log(wrong);
}

function rightAns(){
right=right+1;
console.log(right);
}

//what is user selects one, then changes their mind; how to only capture last answer? (zero points if wrong answer selected? or if someone selects right answer then changes it to a wrong answer?)


/* document.getElementById("customRadio2").addEventListener("click", function(){right});
console.log(right); */


//onload of results.html, display total right and wrong answers

function displayScore(){
	alert("Great job! You answered " + right + " questions correctly.");	
}




















 