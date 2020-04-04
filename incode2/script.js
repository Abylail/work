var header = document.querySelector('#header');
var text1 = document.querySelector('#text-box-1');

//opacity after px

document.addEventListener('scroll', function() {
  	if (window.pageYOffset > 50) {
    	header.classList.add('op');

    	text1.classList.add('op2');
    	text1.classList.remove('op1');

  	} else {
    	header.classList.remove('op');

    	text1.classList.remove('op2');
    	text1.classList.add('op1');

  	}
});

//hide in scrolling
var srollN = 0;

window.addEventListener('scroll', function() {
	if(pageYOffset>30 && pageYOffset > scrollN){
		header.classList.add('out');
	}
	else{
		header.classList.remove('out');
	}
	scrollN = pageYOffset;
});
