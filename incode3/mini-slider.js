var slider = document.querySelector('#mini-slider');

var rightLine = slider.lastElementChild;
var leftLine = slider.firstElementChild;
var scrollBar = document.querySelector('#mini-slider-container');



var first = scrollBar.firstElementChild;
var last = scrollBar.lastElementChild;





function checkSides(){
		if(leftLine.getBoundingClientRect().right > first.getBoundingClientRect().left-2){
			leftLine.classList.remove("mini-slider-hidden");
		}
		else{
			leftLine.classList.add("mini-slider-hidden");
		}

		if(rightLine.getBoundingClientRect().left < last.getBoundingClientRect().right+2){
			rightLine.classList.remove("mini-slider-hidden");
		}
		else{
			rightLine.classList.add("mini-slider-hidden");
		}

};

scrollBar.addEventListener("scroll", checkSides);

window.onload = checkSides();


window.onresize = function checkit(){
	if (rightLine.getBoundingClientRect().left < last.getBoundingClientRect().right+5){
		
		checkSides()
	}
	else{
		
		leftLine.classList.add("mini-slider-hidden");
		rightLine.classList.add("mini-slider-hidden");
	}

};
