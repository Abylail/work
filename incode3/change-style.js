var styleBar1 = document.querySelector('#third');
var styleBar1Button = document.querySelector('#third-button');
var styleBar1Text = document.querySelector('#third-text');
var styleNumber1 = 1;


function changeStyle1(){
	if(styleNumber1 == 1){
		styleBar1.classList.remove("third-style-1");
		styleBar1Button.classList.remove("third-button-style-1");

		styleBar1.classList.add("third-style-2");
		styleBar1Button.classList.add("third-button-style-2");
		styleBar1Text.classList.add("third-text-style-2");

		styleNumber1 = 2;
	}
	else if(styleNumber1 == 2){
		styleBar1.classList.remove("third-style-2");
		styleBar1Button.classList.remove("third-button-style-2");
		styleBar1Text.classList.remove("third-text-style-2");

		styleBar1.classList.add("third-style-3");
		styleBar1Button.classList.add("third-button-style-3");
		styleBar1Text.classList.add("third-text-style-3");

		styleNumber1 = 3;
	}
	else if(styleNumber1 == 3){
		styleBar1.classList.remove("third-style-3");
		styleBar1Button.classList.remove("third-button-style-3");
		styleBar1Text.classList.remove("third-text-style-3");

		styleBar1.classList.add("third-style-4");
		styleBar1Button.classList.add("third-button-style-4");
		styleBar1Text.classList.add("third-text-style-4");

		styleNumber1 = 4;
	}
	else if(styleNumber1 == 4){
		styleBar1.classList.remove("third-style-4");
		styleBar1Button.classList.remove("third-button-style-4");
		styleBar1Text.classList.remove("third-text-style-4");

		styleBar1.classList.add("third-style-1");
		styleBar1Button.classList.add("third-button-style-1");

		styleNumber1 =1;
	}
}