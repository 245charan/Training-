burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
leftNav = document.querySelector('.left-nav')
rightNav = document.querySelector('.right-nav')


burger.addEventListener('click',()=>{
	leftNav.classList.toggle('v-class-resp');
	rightNav.classList.toggle('v-class-resp');
	navList.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
	
})