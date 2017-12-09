/**
 * @author Avinash
 */

var fingers = document.getElementById('fingers');
var toes = document.getElementById('toes');
var ids;

function startCounter() {
	var countNum = document.getElementById('time-counter-input').value;
	startCounting(countNum);
}

function startCounting(countNum){
	var num = 1;
	clearIntervals(ids);
	ids = setInterval(function(){
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
			if(num == countNum){
				clearInterval(ids);
			}
			document.getElementById('counter').innerHTML = num.toString();
			num = num+1;
		}
			
	}, 1000);
	
}

function restartCounter() {
    document.getElementById('counter').innerHTML = "0";
    var countNum = document.getElementById('time-counter-input').value;
    toes.style.backgroundColor = '#ffffff';
	toes.style.color = '#78859e';
    fingers.style.backgroundColor = '#ffffff';
    fingers.style.color = '#78859e';
    startCounting(countNum);
    
}

function resetCounter() {
    clearIntervals(ids);
    toes.style.backgroundColor = '#ffffff';
	toes.style.color = '#78859e';
    fingers.style.backgroundColor = '#ffffff';
    fingers.style.color = '#78859e';
    document.getElementById('time-counter-input').value = "";
    document.getElementById('counter').innerHTML = "0";
    
}

function clearIntervals(ids){
	var id = 0;
	while(id<=ids){
		clearInterval(id);
		id++;
	}
}