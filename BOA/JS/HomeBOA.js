const main = document.getElementById('region');
const sub = document.getElementById('location')
const cityForm = document.getElementById('cityForm')


// To store the locations dropdown list infromation
var regions = {
	'Hyderabad': ['LB Nagar', 'Ameerpet', 'Gachibowli', 'Miyapur'],
	'Amaravati': ['Amaravati'],
	'Karimnagar': ['Court Circle'],
	'Warangal': ['Sherpura', 'Hanamkonda'],
};


// Dynamic Dropdown list for corresponding action
main.addEventListener('change', function () {

	var selected_option = regions[this.value];

	// clearing from the sub menu
	Array.from(sub.children).forEach(function () {
		sub.removeChild(sub.children[sub.children.length - 1]);
	});

	selected_option.forEach(function (item) {
		var opt = document.createElement("option");
		opt.value = item;
		opt.text = item;
		sub.appendChild(opt);
	});

});

/*
On subimt it send region vlaue to BOA.html page

callback: RegionValue
  
   */

cityForm.addEventListener('submit', RegionValue);

function RegionValue(e) {
	e.preventDefault();
	if (Dropdown_Validation()) {
		document.location = 'file:///C:/Users/charan.netha/Desktop/JS/BOA/BOA.html?Region=' + region.value;
	}
	// document.querySelector('.overflowButton').style.display='none';
}

// Validate the information if not changes the style to express field is required

function Dropdown_Validation() {
	var empty = main.value;

	if (empty == "") {
		main.style.boxShadow = 'rgb(234 10 10) 0px 0px 20px 1px inset';
		sub.style.boxShadow = 'rgb(234 10 10) 0px 0px 20px 1px inset';
		return false;
	}
	return true;
}

document.querySelector(".main-menu").addEventListener('click',function(){
	this.style.boxShadow = 'greenyellow 0px 0px 20px 1px inset';
	sub.style.boxShadow = 'greenyellow 0px 0px 20px 1px inset';
});



