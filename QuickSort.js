function qsort(arr, l , n){
    if(l<n)
    {
        var pivot = partition(arr, l, n);
        qsort(arr,l,pivot-1);
        qsort(arr, pivot+1, n);
    }
}

function partition( arr, l , n){
    var i=l-1;
    var pivot= arr[n];
    for(var j=l;j<n;j++){
        if(arr[j]<= pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,n);
    return i+1;
}

function swap(arr, a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

var arr = [10,45,75,41,1,21,57,58,39,4]
qsort(arr,0,arr.length-1);
console.log(arr);
