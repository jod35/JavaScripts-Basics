function isThisTrue(){
    if (isThisTrue){
        return "It is true!"
    }
    return "it is false"
}
console.log(isThisTrue(true));//returns true
// returns true as isThisTrue is true

//the equality operator
//this converts to the type equated to


function Equal(val){
    if (val ==12){
        return "Equal";
    }
    return "Not equal to"
}

console.log(Equal(13));//returns not equal to

//the strict equality operator
//this does no conversion

function StrictlyEqual(x){
    if (x===10){
        return " Strictly Equal to " + x;
    }
    return "Not Equal to " + x;

}

console.log(StrictlyEqual('10'));

//testing for equality
function TestEquality(a,b){
    if (a===b){
        return a + " is Equal to " + b;
     }
     return a + "is not equal to " + b;
}

console.log(TestEquality(10,"10"));//"10 is not equal to 10"

//inequality operator

function TestInequality(x){
    if (x !=100){
        return x + " is not equal to 100";
    }
    return x + " is equal to 100";
}

console.log(TestEquality(10));

//strict inequality operator

function testNotEqual(x){
    if (x !== 10){
        return x +" is not equal to 10";
    }
    return x + " is equal to 10";
}
console.log(testNotEqual("10"));//returns not equal to because no data type conversion occurs


//logical greater than

function greaterThan(x){
    if (x > 100){
        return x + " is  greater than 100";
    }
    
    if(x>10){
        return x + " is greater than 10";
    }
    return '10 or under!!'
}
console.log(greaterThan(10));//10 or under

//greater than or equal to operator
function greaterThanOrEqualTo(x){
    if(x>=50){
        return "Passed"
    }
    return "Failed!!!"//Passed
}
console.log(greaterThanOrEqualTo(56));
//less than operator
function LessthanOrEqualTo(x){
    if (x<=50){
        return "50 or less"
    }
    if (x<=10){
        return "10 or less"
    }
    return "over 10"

}
console.log(LessthanOrEqualTo(45));//50 or less

//logical and operator

function trueForBoth(x){
    if (x>=50 && x <=65){
        return "Mediocre"
    }
    if (x>65 && x<=100){
        return "Genius"
    }
}
console.log(trueForBoth(75));//Genius

//logical or operator

function trueForEitherOne(x){
    if (x >=20 || x<=50){
        return "Ok"
    }
    return "There is a problem"
}
console.log(trueForEitherOne(30));//ok

//else

function BeautifulOrUgly(x){
    if (x==20){
        return "Beautiful"
    }
    else{
        return "Ugly"
    }
}
console.log(BeautifulOrUgly(100));//ugly

//else if  

function GradeMark(mark){
    if (mark >=95){
        return "A"
    }
    else if(mark >=90 && mark <=94){
        return "B"
    }
    else if(mark>=85 && mark <=89){
        return "C"
    }
    else if(mark>=80 && mark <=84){
        return "D"
    }

    else if(mark>=75 && mark <=79){
        return "E"
    }
    else if(mark>=70 && mark <=74){
        return "O"
    }
    else{
        return "F"
    }
  
   

}
console.log(GradeMark(76));//E

//CHAINING IFS
function Size(x){
if (x<5){
    return "Tiny";
}
else if(x < 10){
    return "Small";
}
else if(x<15){
    return "Medium"
}
else if (x<20){
    return "Large"
}
else{
    return "Huge"
}
}
console.log(Size(4));//tiny

