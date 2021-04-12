function Stack() {
    this.stackContent= [];
    this.top = 0;
    this.push= push;
    this.pop=pop;
    this.getTop = pop;
}

function push(elem){
    this.stackContent[this.top++] = elem;
}
function pop(){
    return this.stackContent[--this.top];
}
function getTop(){
    return this.stackContent[this.top-1];
}