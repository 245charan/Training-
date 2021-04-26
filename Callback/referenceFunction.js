function TraineeID(){
	var TraineeID = 2770;
	
	return {
		getID: function (){
			return TraineeID;
		},
		setID: function(newID){
			TraineeID = newID;
		}
	};
}

var ID = TraineeID();
ID.getID(); //2770
ID.setID(2786); 
ID.getID(); //2786

