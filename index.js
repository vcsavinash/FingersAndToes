/**
 * @author Avinash
 */

function startCounter() {
	var countNum = document.getElementById('time-counter-input').value;
	startCounting(countNum);
}

function startCounting(countNum){
	var num = 1;
	var fingers = document.getElementById('fingers');
	var toes = document.getElementById('toes');
	clearIntervals(document.getElementById('ids'));
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
	var input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("id", "ids");
	input.setAttribute("value", ids);
}

function restartCounter() {
    document.getElementById('counter').innerHTML = "0";
    var countNum = document.getElementById('time-counter-input').value;
    var fingers = document.getElementById('fingers');
	var toes = document.getElementById('toes');
    toes.style.backgroundColor = '#ffffff';
	toes.style.color = '#78859e';
    fingers.style.backgroundColor = '#ffffff';
    fingers.style.color = '#78859e';
    startCounting(countNum);
    
}

function resetCounter() {
    clearIntervals(document.getElementById('ids'));
    var fingers = document.getElementById('fingers');
	var toes = document.getElementById('toes');
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