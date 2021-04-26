var allUserData = [];

function logIn (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

}
getInput ({name:"Charan", speciality:"JavaScript"}, logIn);

