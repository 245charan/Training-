var volume=(function(){
	var L,W,H;
	
	function VolumeUtil(...args){
		if(args.length==3){
			L=args[0];W=args[1];H=args[2];
			return L*W*H;
		}
		else if(args.length>3 || args.length !== 0){
			return "Invalid call";
		}
		else {
			return function(...args2){
			return VolumeUtil(this,...args.concat(args2));
		}
		}

	};
	//return VolumeUtil;
})();

volume(10,20,30);