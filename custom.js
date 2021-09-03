//Open the modal 
function openModal() {
	document.getElementById('modal').style.display = 'block';
}

//Close the modal
function closeModal() {
	document.getElementById('modal').style.display = 'none';
}


//Show Slide 
let index = 1;
showSlide(index);

//Next&Previous Btn Control
function plusSlide(n) {
	showSlide(index+=n);
}

//Image btn controller;
function currentImg(n) {
	showSlide(index = n)
}

function showSlide(n) {
	const slides = document.getElementsByClassName('slide');
	const dots = document.getElementsByClassName('demo');
	var i;
	if(n < 1) {index = slides.length}
	if(n > slides.length) {index = 1}
	
	for(i = 0; i<slides.length; i++ ) {
		slides[i].style.display = 'none';
	}
	for(i=0;i<dots.length;i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[index-1].style.display = 'block';
	dots[index-1].className += ' active';
}



