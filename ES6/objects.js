const obj ={};
obj.name= "Ssali Jonathan";
obj.age=20;
obj.height=180;

// console.log(obj);
// // { name: 'Ssali Jonathan', age: 20, height: 180 }

obj["NOT AN IDENTIFIER"]=3;
obj["NOT AN IDENTIFIER"];

sam ={
    name : "Samuel",
    age:20
}

sam.speak= function speak() {
return "Hello there";
}

console.log(sam.speak());

sam.uni="UTAMU";
console.log(sam);
// { name: 'Samuel',
//   age: 20,
//   speak: [Function: speak],
//   uni: 'UTAMU' }

delete sam.uni;

console.log(sam);
// { name: 'Samuel', age: 20, speak: [Function: speak] }

