// we use let and for in a for loop below

var funcs=[];

for(let i=0;1<5;i++){
    funcs.push(()=>{
      console.log(i);
      
    });
}

console.log(funcs[0]);
