var header = document.querySelector('#header');
var scrollN ;
//opacity after px

function checkOP() {
  	if (window.pageYOffset > 100) {
    	header.classList.add('op');


  	} else {
    	header.classList.remove('op');

  	}
};

//hide in scrolling

window.addEventListener('scroll', function() {
  checkOP();
  if(typeof scrollN == "undefined"){scrollN = 0;}
	if(pageYOffset>150 && pageYOffset > scrollN){
		header.classList.add('out');
    hMenu.classList.add('show');
    showMenu=true;
    icon2.classList.remove("open");
	}
	else{
		header.classList.remove('out');
	}
	scrollN = pageYOffset;
  
});

//menu





//hidden menu
var showMenu = new Boolean(true);
var hMenu = document.getElementById('hidden-menu');
var icon2 = document.getElementById('icon-menu');

icon2.onclick = function(){
	if(showMenu == false){
    	hMenu.classList.add('show');
    	showMenu=true;
      icon2.classList.remove("open");
    }
    else{
    	hMenu.classList.remove('show');
    	showMenu=false;
      icon2.classList.add("open");
    }


}

