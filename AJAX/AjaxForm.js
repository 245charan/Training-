var data ;
let formID = document.getElementById('formID');
var para = document.createElement('p');
document.body.appendChild(para);
formID.addEventListener('submit', function(e){
	let formData = new FormData(formID);
	data = formData;
	var request = new XMLHttpRequest();
	request.open('POST', 'http://dummy.restapiexample.com/api/v1/create');
	request.onload = function(ev){
		if(request.status == 200){
			para.textContent = "success"
		}
		else{
			para.textContent = "Error: " + request.status ;
		};
	};
	request.onerror = function(){
		para.textContent = "Error sending data";	
	}
	request.send(formData)
	e.preventDefault();
} , false);

/*/Serializing form data
function Serialize(formDATA){
	var obj = {};
	for(var [key,value] of formDATA ){
		if(obj[key]!== undefined){
			if(!Array.isArray(obj[key])){
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		}
		else{
			obj[key] = value;
		};
	};
	return obj;
};*/