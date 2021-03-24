let str = "";
let x=10;
let y=10

for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
        if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
            str= str.concat("*");
        }else if(i >= y / 2
            && j > ((y / 2) -  i) * (-1)
            && j < (y - ((y / 2) -  i) * (-1))){
            str = str.concat("*");
        }
        else {
            str = str.concat(" ");
        }
    }
    str = str.concat("\n");
}

console.log(str)

/*--------------------
 Diamond of Asterisks
 ---------------------*/