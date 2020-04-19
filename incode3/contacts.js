var phone = document.querySelector('#phone');
var nam = document.querySelector('#name');
var time = document.querySelector('#time');
var err = document.querySelector('#error');
var suc = document.querySelector('#success');

const regex = /7([0-9]){3}([0-9]){7}/g;

function check(){
	if(regex.test(phone.value)){
		err.innerHTML = '';
		phone.value='';
		time.value='';
		nam.value = '';
		suc.innerHTML='Заявка успешно принята';
	}
	else{
		err.innerHTML = 'Неправильно введен номер';
		suc.innerHTML='';
	}
}
