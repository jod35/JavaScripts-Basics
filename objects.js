var ourDog={
    "name":"Zoey",
    "legs":4,
    "tails":1,
    "friends":['everything']
};

var myDog={
    "name":"Duggy",
    "legs":"3",
    "tails":2,

};

//accessing properties using dot notation
var zoey_legs=ourDog.legs;
console.log("Our dog has " + zoey_legs + " " + "legs");
//accessing properties using bracket notation
var zoey_friends=ourDog.friends;
console.log("Our dog has " + zoey_friends + " " + "as a friend");