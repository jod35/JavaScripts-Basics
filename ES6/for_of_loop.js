let incomes=[120000,230000,45000];
let total=0;

for(income of incomes){
    total+=income;
   
}
console.log(total);
//395000

for(let income of incomes){
incomes+=5000;
}
console.log(total);
