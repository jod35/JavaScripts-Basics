const friends =["Jovia","Andrew","Perez","Innocent"];
//array of strings

const posts=[
    {
        id :1,
        author: "Kiggundu Jonathan",
        title: "Sickness during Exams",
        post_content :"Let us pray for my sister Jerusha"
    },
    {
        id :2,
        author: "Kiggundu Christine",
        title: "Sickness during Exams",
        post_content :"Let us pray for my daughter Jerusha"
    },

]
//arrays of onjects

const mixed=[1,2,3,"#","Jonathan",{
    name:24,
    age:46
}]; //array of mixed data types

const multi =[
[1,2,3],
[4,5,6],
[7,8,9]
];

// to access the number of elements in an array
console.log(multi.length);
//returns 3

//indexing
console.log(multi[0]);
// returns [1,2,3]
