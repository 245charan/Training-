
//value posted from previous page
const Area = document.URL.split('?')[1].split('=')[1];

// To stores the menu for corresponding regions
const optionList = {
	'Hyderabad': ['Sparkling Cranberry Punch', 'Iced Chocolate Delight', 'Raspberry Fizz', 'Virgin Frozen Margarita', 'Summer Punch'],
	'Amaravati': ['Sparkling Cranberry Punch', 'Iced Chocolate Delight', 'Raspberry Fizz', 'Virgin Frozen Margarita', 'Summer Punch', 'Matka Tea'],
	'Karimnagar': ['Sparkling Cranberry Punch', 'Iced Chocolate Delight', 'Raspberry Fizz', 'Virgin Frozen Margarita', 'Summer Punch', 'Mango Mule', 'Tomato Lassi'],
	'Warangal': ['Sparkling Cranberry Punch', 'Iced Chocolate Delight', 'Raspberry Fizz', 'Virgin Frozen Margarita', 'Summer Punch', 'Mango Mule', 'Sparkling Apple Sangria', 'Ice Light'],
};


/* Updates Dropdown list for corresponding action
 CusName = document.querySelector("#customer_name")
 NewOrder = document.querySelector("#beverage")
  */
NewOrder.addEventListener('focus', function () {

	let selected_option = optionList[Area];

	// clearing from the sub menu
	Array.from(NewOrder.children).forEach(function () {
		NewOrder.removeChild(NewOrder.children[NewOrder.children.length - 1]);
	});
		
		selected_option.forEach(function (item) {
			if(item){
				let opt = document.createElement("option");
				opt.value = item;
				opt.text = item;
				NewOrder.appendChild(opt);
			}else{
			console.log('Error selected_option value missing');
		}
	});

});