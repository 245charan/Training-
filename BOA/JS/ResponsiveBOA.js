// references of container,splited page left and right 
const left  = document.querySelector(".left");
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// left.addEventListener('mouseenter',function(){
	// container.classList.add('hover-left')
// });
// left.addEventListener('mouseleave', function(){
	// container.classList.remove('hover-left')
// });

//Increses the width of right split to 70% and left split to 30%

right.addEventListener('mouseenter', function(){
	container.classList.add('hover-right')
	
	/* changing the width of ,Border,In Queue, Being Mixed and Ready to Collect */
	
	document.querySelector('.border').style.width='20vw';	
	document.querySelector('.column1').style.width='20vw';
	document.querySelector('.column2').style.width='20vw';
	document.querySelector('.column3').style.width='20vw';
	
});
// right.addEventListener('mouseleave', function(){
	// container.classList.remove('hover-right')
// });