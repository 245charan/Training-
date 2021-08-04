const pop = document.querySelector("body > section.salesTable > div.populateDiv > button");


//To Display Sales Log
document.querySelector(".sales").addEventListener('click', function () {
	document.querySelector('.salesTable').style.display = 'flex';
	})

//Close the Sales Log
document.querySelector(".salesTable").addEventListener('click', function (e) {
	if (e.target == this) {
		document.querySelector('.salesTable').style.display = 'none';
	}
}, false);



document.querySelector(".sales").addEventListener('click',populateButton);

// Triggers the populate button intentionally displayed none
function populateButton(){
	pop.style.display='none';
	pop.click();
}

	pop.addEventListener('click',populate);




/*
			Display the odres in tabular form

	S.no			Item				Order Id		price
	 1	     Iced Chocolate Delight			101			₹150

 */
function populate(){
	var tableBody =document.querySelector("body > section.salesTable > div > table > tbody");
			for(let ind =0; ind<inQueueArray.length;ind++){
			var TR = document.createElement('tr');
			let output =`
				<td>${inQueueArray[ind].ID-100}</td>
				<td>${inQueueArray[ind].Order}</td>
				<td>${inQueueArray[ind].ID}</td>
				<td>${Auxiliary[inQueueArray[ind].Order]}</td>`
			tableBody.appendChild(TR);
			TR.innerHTML = output;
	}
	//Setting array to empty and index starts from zero again
	inQueueArray=[]
	index=0;
}






// To display Order PopUp

document.querySelector("body > nav > div.nav-order > button").addEventListener('click', function () {
	document.querySelector('.order').style.display = 'flex';
});



// close the on clicking on x 

document.getElementById('close').addEventListener('click', function () {
	document.querySelector('.order').style.display = 'none';
});

// close the on clicking outside form
document.querySelector(".order").addEventListener('click', function (e) {
	if (e.target == this) {

		document.querySelector('.order').style.display = 'none';
	}

}, false);










//To Display Ready to delivery is full
document.querySelector(".overflowButton").addEventListener('click', function () {
	document.querySelector('.overflowDiv').style.display = 'flex';
	})

//Close Ready to delivery is full
document.querySelector(".overflow").addEventListener('click', function (e) {
	if (e.target == this) {
		document.querySelector('.overflow').style.display = 'none';
	}
}, false);
