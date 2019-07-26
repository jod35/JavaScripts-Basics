function Hello(name,age){
    
    var result='Hello ' + name + "\n" + "Your age is " + age; 

    console.log(result);


}

Hello("jonathan",20);


console.log('\n\n');

function Bmi(height,weight){
    var bmi= weight/(height * height);

    console.log("Your BMI is " + bmi + "kg/square metre");

}

Bmi(20,5)