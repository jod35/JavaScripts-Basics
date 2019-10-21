class Person{
    constructor(name,age,gender,sports,location,nationality){
        this.name = name;
        this.age=age;
        this.gender=gender;
        this.nationality=nationality;
        this.location=location;
        this.sports=['Soccer','Basketball','Arsenal'];
        this.sport=sports[0];

    }

    fanOf(sport){
        if(this.sports.indexOf(sport)<0){
            throw Error("That sport doesnot the business!!");
            this.sport=sport;
        }
    }
}

const Jona= new Person("Ssali Jonathan",20,"Male","Ugandan","Basketball");
console.log(Jona);





