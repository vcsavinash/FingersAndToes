/**
 * @author Avinash
 */

var fingers = document.getElementById('fingers');
var toes = document.getElementById('toes');

function startCounter() {
	var countNum = document.getElementById('time-counter-input').value;
	startCounting(countNum);
}

function startCounting(countNum){
	var num = 1;
	clearInterval();
	var id = setInterval(function(){
		console.log(id);
		if(num <= countNum){
			if(num%3 == 0 && num%5 == 0){
				toes.style.backgroundColor = '#78859e';
	            toes.style.color = '#ffffff';
	            fingers.style.backgroundColor = '#78859e';
	            fingers.style.color = '#ffffff';
			}else if(num%3 == 0){
				toes.style.backgroundColor = '#ffffff';
				toes.style.color = '#78859e';
	            fingers.style.backgroundColor = '#78859e';
				fingers.style.color = '#ffffff';
			}else if(num%5 == 0){
				toes.style.backgroundColor = '#78859e';
	            toes.style.color = '#ffffff';
	            fingers.style.backgroundColor = '#ffffff';
	            fingers.style.color = '#78859e';
			} else{
				toes.style.backgroundColor = '#ffffff';
				toes.style.color = '#78859e';
	            fingers.style.backgroundColor = '#ffffff';
	            fingers.style.color = '#78859e';
			}
			document.getElementById('counter').innerHTML = num.toString();
			num = num+1;
		}
			
	}, 1000);
	
}

function restartCounter() {
    document.getElementById('counter').innerHTML = "0";
    var countNum = document.getElementById('time-counter-input').value;
    startCounting(countNum);
    
}

function resetCounter() {
    clearAllIntervals();
    document.getElementById('time-counter-input').value = "";
    document.getElementById('counter').innerHTML = "0";
    
}
