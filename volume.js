function volume1(L,W,H){
	return L*W*H;
}
	
function volume2(L){
	function a(W){
		function b(H){
			return L*W*H;
		}
		return b;
	}
	return a;
}


function volume3(L){
	function c(W,H){
		return L*W*H;
	}
	return c;
}

volume1(10,20,30);

volume2(10)(20)(30);

volume3(10)(20,30);
		