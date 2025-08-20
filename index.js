// Updated person class
function person(name){
    this.name=name;
    this.greet="hello";
}
person.prototype.sayhello=function(){
    console.log("how are baby"+this.name);
}
let p1=new person("sreedevi");
p1.sayhello();
console.log(p1.greet);