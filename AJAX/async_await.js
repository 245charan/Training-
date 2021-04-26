console.log('Async/Await');

async function func(){
	console.log('Inside func function');
	const response = await fetch('https://api.github.com/users');
	console.log('before response');
	const users = await response.json();
	console.log('users resolved');
	return users;
}

console.log("Before calling func");
let a = func();
console.log("After calling func");
console.log(a);
a.then(data => console.log(data));
console.log('Last line of this JS file');



