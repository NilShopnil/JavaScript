let x = "Nil";
let y = "Shopnil";
document.getElementById("demo1").innerHTML = x +" "+ y;

let a = 5 ,b=6,c=a+b;
document.getElementById("demo2").innerHTML = c;
 
let obj = {firstName:"Nil",lastName:"Shopnil",age:40,extra:" years old" };
document.getElementById("demo3").innerHTML = obj.firstName + " "+ obj.lastName + " is " + obj.age + obj.extra;
console.log(obj["age"]);

let array = [1,2,3,4,5];
document.getElementById("demo4").innerHTML = array[2];

function myFunction(name,time){
    let value = name + " is coding from " + time;
    return value;
}
document.getElementById("demo5").innerHTML = myFunction("Shopnil","8:00 am");

const person = {
    firstName:"Md Arif" , lastName: "Baktiar",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());  //lost of mistake from 21 to 27;

let xx = "asb8yayvfuyvuyvsyuveusbduhvatvdvuasvdasasdas";
console.log(xx.length);

let aa = "you love \"your country\" Bangladesh"; //"\" also use to write code to next line
console.log(aa); // == : value same or type same kina, === : value and type both same kina

let a1 = "I love my country";
console.log(a1.slice(7,14));
console.log(a1.split(" "));

let gf = "I love my ex gf";
let newgf = gf.replace("ex","recent");
console.log(newgf);     //Only first match replace

//Text.trim() used to trim spaces in input

let variable1 = `It's my life my rules`;
console.log(variable1);

let country = `Bangladesh` , a2=10 , b2=5;
document.getElementById("demo6").innerHTML = `I love ${country} and it is very nice country , which's populatio is ${a2+b2} crore`;

