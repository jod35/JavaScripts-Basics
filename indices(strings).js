var myName="Ssali Jonathan";//get the letter at your choice of index
console.log(myName[4]);

//this returns the letter at the index of 4
console.log(myName[myName.length -1]);//get trhe last ;letter of the string

//get the nth letter off the string
//foreaxmple the second last

console.log(myName[myName.length -2])


//madlibs game

function wordblanks(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    result+=myAdjective + " " + myNoun + " " + myVerb + " the lazy boy " + myAdverb;
    return result;
}

console.log(wordblanks("Jonathan","big","punched","hardly"))
