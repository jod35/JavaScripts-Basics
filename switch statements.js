function caseinSwitch(val){
    var answer= "";
    switch(val){
        case 1:
            answer= "alpha";
            break;
        case 2:
            answer= "beta";
            break;
        case 3:
            answer= "gamma";
            break;
        case 4:
            answer= "delta";
            break;
        default:
            answer="Not an option";
            break;
    }
    return answer;
}
console.log(caseinSwitch(1));
console.log(caseinSwitch(2));
console.log(caseinSwitch(3));
console.log(caseinSwitch(4));
console.log(caseinSwitch(8));

//same option for one switch

function Measure(val){
    answer="";

    switch(val){
        case 1:
        case 2:
        case 3:
            answer="Low";
        case 4:
        case 5:
        case 6:
            answer="Mid";
        case 7:
        case 8:
        case 9:
            answer="High";
        
    }
    
    return answer;
}
console.log(Measure(9));

//another switch statement

function chainToSwitch(val){
    var answer="";
    switch(val){
        case "Bob":
            answer="Marley";
            break;
        case 42:
            answer="The answer";
            break;
        case 1:
            answer="There is no #1"
            break;
        case 99:
            answer="Missed me by this much!"
            break;
        case 7:
            answer="Ate Nine";
            break;
    }
    return answer;
}

console.log(chainToSwitch("Bob"));//Marley

//returning booleans from functions
//dont use if else
function isLessThan(a,b){
    return a<b;
} 
console.log(isLessThan(20,100));//true