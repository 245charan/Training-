function replace(...args){
	const string = `${args[0]}`;
	return args.length < 3 ? string: string.replace(args[1],args[2]);
	
}

console.log(replace('Hi JS', 'JS', 'Lodash'));
console.log(_.replace('Hi JS', 'JS', 'Lodash'));