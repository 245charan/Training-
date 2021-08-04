const menuDOM = document.querySelector(".menu-center");
const inQueue = document.querySelector(".in-queue");
const Mixed = document.querySelector(".being-mixed");
const ReadyCollect = document.querySelector(".ready-to-collect");
const myform = document.querySelector('form');
const CusName = document.querySelector("#customer_name");
const NewOrder = document.querySelector("#beverage");


// const selectClass = document.querySelector;


//value posted from previous page
const region = document.URL.split('?')[1].split('=')[1];

let inQueueArray = [];
let Auxiliary={};
var incr = 100;
var index=0;

// get content in JSON format
const Hyd = 'https://gist.githubusercontent.com/245charan/09102aabbd738defc8d821c4dc8cf507/raw/15b1973211b58eb37434608312fe7c8fb946d585/menu.json';
const Amr = 'https://gist.githubusercontent.com/245charan/f69f34bbc0bd033388006a2c869ca3e5/raw/689e6378709158ee1bacc1c8a289a2d52e133c27/AmaravatioMenu.json';
const Knr = 'https://gist.githubusercontent.com/245charan/d8c4f69a2a81f8bb836abd9fe5cdfd4e/raw/810bed37bb8a3ec5f4c65f9dca049cbce9fbc696/KarimnagarMenu.json';
const Wgl = 'https://gist.githubusercontent.com/245charan/921b021bc79f8adb4c9e41e1982ac23e/raw/0bdf7cfebb05a43fbdfcf7ca80a237dbe66dac7a/WarangalMenu.json';



// Loading the DOM elements
if (document.readyState === "loading") {
	document.addEventListener('DOMContentLoaded', dom);
} else {
	dom();
}
function dom() {
	console.log('DOM loaded');
	GetData();
}




/*  
Calls fetchData function according to region 
arguments: {String} Hyd, Amr, Knr, Wgl
   */

function GetData() {
	if (region == "Hyderabad") {
		FetchData(Hyd);
	} else if (region == "Amaravati") {
		FetchData(Amr);
	}
	else if (region == "Karimnagar") {
		FetchData(Knr);
	}
	else if (region == "Warangal") {
		FetchData(Wgl);
	}
}

/*
Receives the string as parameter loads the JSON data 
Calls Display function by passing data
arguments: {String} url
   */
//FetchData
function FetchData(url) {
	// const response = 
	fetch(url)
		.then(function (response) {
			if (!response.ok) {
				throw new Error("HTTP error " + response.status);
			}
			return response.json();
		})
		.then(function (data) {
			Display(data);
		})
		.catch(function (error) {
			console.log(error);
		});
}


/*
Display Menu Items at right split of menu center
Auxiliary[items.name] = items.price;
Auxiliary={'Summer Punch' : '₹150'}

arguments: {Object} data
   */

function Display(data) {
	let output = '';
	let menu = data.items;
	menu.forEach(function (items) {
		Auxiliary[items.name] = items.price;
		output = output + `
			<div class="items" id=${items.id}>
			<h3>${items.name}<div class="price">${items.price}</div></h3>			
			</div>`;
		menuDOM.innerHTML = output;
	})
}

/*
Placing Order on subimt
callbacks the Submit
callback: Submit
   */
myform.addEventListener('submit',Submit);

/*
 incr gets updates for every new Order
 Calls Store function 
 Clears the data previously entered
   */
function Submit(e) {
	e.preventDefault();
		if (Dropdown_Validation()) {
		incr += 1;
		document.querySelector('.order').style.display = 'none';
		Store(CusName.value, NewOrder.value, incr);
		document.querySelector(".customer_name").value='';
		document.querySelector(".customer_name").style.boxShadow = ' #808080 0px 0px 20px 1px inset';
		document.querySelector(".beverage").value='';
		document.querySelector(".beverage").style.boxShadow = ' #808080 0px 0px 20px 1px inset';
	}
}

/*
 Returns false if the data is not enetred an submited
 Changes the syleing of labels 
   */
function Dropdown_Validation() {
	var empty1 = document.getElementById('customer_name').value;
	var empty2 = document.getElementById('beverage').value;

	if (empty1 == "" && empty2 == "") {
		document.querySelector("#customer_name").style.backgroundColor = "white";
		document.querySelector("#customer_name").style.boxShadow = 'red 0px 0px 20px 1px inset';
		document.querySelector("#beverage").style.backgroundColor = "white";
		document.querySelector("#beverage").style.boxShadow = 'red 0px 0px 20px 1px inset';
		return false;
	} else if (empty1 == "" ){
		
		document.querySelector("#customer_name").style.backgroundColor = "white";
		document.querySelector("#customer_name").style.boxShadow = 'rgb(234 10 10) 0px 0px 20px 1px inset';
		return false;
	}else if (empty2 == "") {
		document.querySelector("#beverage").style.backgroundColor = "white";
		document.querySelector("#beverage").style.boxShadow = 'rgb(234 10 10) 0px 0px 20px 1px inset';
		return false;
	}
	return true;
}


// Storage

/*
 Stores the data into an Array
 Calls the DisplayInQueue function by passing index value
		"Cname": "Charan"
		"NewOrder":"Pucnh"
	    "ID":"101"
		inQueueArray[{Name: "charan", Order: "Matka Tea", ID: 101}]

 arguments:{String} CusName,NewOrder
 arguments: {Number} OrderId
		
*/
function Store(CusName, NewOrder, OrderId) {
	
	inQueueArray.push({
		"Name": CusName,
		"Order": NewOrder,
		"ID": OrderId
	});
	DisplayInQueue(index);
	index += 1;
}

/*
  To display the Orders in InQueue section
	inQueueArray[i].Name;
	inQueueArray[i]Order;
	inQueueArray[i].ID;
	
arguments: {Number} i
 */

// 
function DisplayInQueue(i) {
	let output = '';
	output = `<div class="move">
				<p class="order_item">${inQueueArray[i].Order}</p>
				<div class="Cname">${inQueueArray[i].Name}&nbsp&nbsp${inQueueArray[i].ID}</div>
			</div>`;
			
	inQueue.innerHTML = inQueue.innerHTML + output;
	setTimeout(function () {
		DisplayBeingMixed();
	}, 3000);
}
 /*
 To display orders in Being Mixed
 apply event on Mixed to target specific element inside Mixed.
   */
 
function DisplayBeingMixed() {
	let output = '';
	output = document.querySelector(".move");
	Mixed.appendChild(output);
	
	Mixed.onclick = Fix;
}

function Fix(e) {
	if(ReadyCollect.childElementCount <= 1){
		if (e.target && e.target.parentElement.className == 'move') {
			e.stopPropagation();
			ReadyCollect.appendChild(e.target.parentElement);
		}
	}
	else{
		document.querySelector('.overflowButton').click();
	}
}


// To remove element from Ready to collect
ReadyCollect.onclick = Remove;

// applying event on parent element
function Remove(e) {
	if (e.target && e.target.parentElement.className == 'move') {
		e.stopPropagation();
		e.target.style.backgroundColor='red';
		setTimeout(function () {
		e.target.parentElement.remove();
	}, 50);
	}
}







