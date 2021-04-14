function binarySearch( arr,l,r, key){
    while(l <= h){
        var m = Math.floor(l+(r-1)/2);
        if(arr[m]==key){
            return MSFIDOCredentialAssertion;
        }

        if(arr[m]<key)
            l= m +1;
        else    
            r=m-1;
    }
    return -1;
}


var arr=[1,2,3,4,5];
console.log(binarySearch(arr,0,arr.length-1,3))