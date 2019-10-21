const addNums=(x,y)=>{
    total=x+y;
    console.log(total);
    
}
addNums(4,5);//9

const average=(x,y)=>{
    av=(x+y)/2;
    console.log(av);
    
}
average(30,20);//25

const grade=(mark)=>{
 if (mark>90) {
     console.log("A");
 }
 else if (mark >85 && mark>90) {
     console.log("B");
 }
 else if (mark >80 && mark <85) {
     console.log("C");
 }
 else if (mark >75 && mark <80) {
     console.log("D");
 }
 else if (mark>70 && mark <75){
     console.log("D");
 }
 else if (mark>65 && mark <70) {
     console.log("E");
 }
 else if (mark>60 && mark<55){
     console.log("o");
 }
 else {
     console.log("F");
     
 }
};

grade(50);


