let form=document.querySelector("#post");
function fun1(){
let data=new FormData(form);
// console.log(data);
var obj={};
for(let [i,j] of data){
    obj[i]=j;
}
console.log(obj);
return data;
}
let img=document.getElementById("img1");

form.addEventListener('submit',function(e){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","https://reqres.in/api/users");
    var data=fun1();
    xhr.responseType="json";
    xhr.onload=function(){
        // var data1=JSON.parse(xhr.response);
        console.log(xhr.response);
        console.log("Sucess");
    }
    xhr.onerror=function(){
        console.log("some error ocurred");
    }
    // console.log(obj)
    xhr.send(data);
    e.preventDefault();
});


//converting to jquery string
// let string=new URLSearchParams(data).toString();
// console.log(string);
