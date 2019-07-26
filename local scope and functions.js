//variables inside a function have a local scope

function Myvar(){
    var myVar=10;
    console.log(myVar);
}

Myvar();

console.log(myVar);

//myvar is a local variableand cannot work outside the function as shown(an error)