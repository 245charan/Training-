function getImage(file){
	return new Promise((res,rej) => {
		try{
			const data = readFile(file)
			resolve(data)
		}
		catch(err){
			reject(new Error(err))
		}
	})
}
file = "C:\Users\charan.netha\Downloads\tyrion.jpg";
getImage(file);

getImage(file){
	.then(image => console.log(image));
	.catch(error => console.log(error))
	.finally(() => console.log("All done"))
}