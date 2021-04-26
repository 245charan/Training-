function TraineeIDCreator (theTrainee) {
    var i;
    var uniqueID = 2769;
    for (i = 0; i <  .length; i++) {
      theTrainee[i]["id"] = function ()  {
        return uniqueID + i;
      };

    }
    
    return theTrainee;
}

var trainee = [{name:"Aravind", id:0}, {name:"Charan", id:0}, {name:"Ashok", id:0}, {name:"Krishna", id:0},{name:"Dheeraj", id:0}];

var createIdForJSTrainee = TraineeIDCreator (trainee);
var AravindID = createIdForJSTrainee [0];
var CharanID = createIdForJSTrainee [1];


console.log(AravindID.id()); // 2774
console.log(CharanID.id()); // 2774



// to avoid such mistake use IIFE

function TraineeIDCreator (theTrainee) {
    var i;
    var uniqueID = 2769;
    for (i = 0; i < theTrainee.length; i++) {
      theTrainee[i]["id"] = (function ()  {
        return uniqueID + i;
      })();

    }
    
    return theTrainee;
}

var trainee = [{name:"Aravind", id:0}, {name:"Charan", id:0}, {name:"Ashok", id:0}, {name:"Krishna", id:0},{name:"Dheeraj", id:0}];

var createIdForJSTrainee = TraineeIDCreator (trainee);
var AravindID = createIdForJSTrainee [0];
var CharanID = createIdForJSTrainee [1];


console.log(AravindID.id); // 2769
console.log(CharanID.id); //2770