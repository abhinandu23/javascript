//primitive

//7types ,string , number , boolean , null , undefined , symbol,
//bigint

//reference

//array , objects , functions

const id = Symbol("124")
const anotherid = Symbol('124')
console.log(id === anotherid);



const heros = ["abhi", "nandu", "h"];
let myObj = {
    name: "abhinandu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);