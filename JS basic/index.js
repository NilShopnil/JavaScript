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
document.getElementById("demo6").innerHTML = `I love ${country} and it is very nice country , which's population is ${a2+b2} crore`;

let array1 = ["Md","Arif","Baktiar","Nil","Shopnil"];
for (i=0;i<array1.length;i++)
{
    console.log(array1[i]);
}
array1.splice(2,2,"Lemon","Kiwi");
console.log(array1);
/*function loop(value){
    document.getElementById("demo7").innerHTML = value;

}
array1.forEach(loop);*/

const array2 = [1,2,3,4,5,9,8,7,6];
array2.sort(function(a,b){
    //return a-b;          //Assending
    return b-a  //dessending
})
console.log(array2);

const person101 = {fname:"John", lname:"Doe", age:25};
for(let x in person101){
    console.log(x);
    console.log(person101[x]);
}
const a12=[5,8,98,51,47,13,59,47];
for(let x of a12){   //It returns value of index
    console.log(x);
}
for(let x in a12){   //It returns indexNo
    console.log(x);
}

try{

}

catch(err){

}

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    create(){
        console.log(`${this.name} car is creating of version ${this.year}`);
    }
}

const car1 = new car("BMW",2018);
car1.create();
