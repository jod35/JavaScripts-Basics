//variables defined outside a function have a global scope
//the var keyword can make a variable be within the scope of a function
//forexample

var j="Jonathan";

function hello(){
    name="Jerusha";
    //name will not work in the second function if given the var key word
    // the var keyword keeps a variable within the scope of a function and it cannot be therefore used in other functions.
         
 }
function verify(){
    if(j=='Jonathan'){
        console.log("This is Jonathan");
    }

    if(name=='Jerusha'){
        console.log("This is Jerusha");
    }
}

hello();
verify();
