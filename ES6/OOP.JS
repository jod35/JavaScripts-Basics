// class Car {
//     constructor(){

//     }
// }

// const car1 = new Car();
// const car2= new Car();

// t= car1 instanceof Car;
// console.log(t);

class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
        this.userGears=['P','R','D','N']
        this.userGear=this.userGears[0];
    }
    shift(gear){
        if(this.userGears.indexOf(gear)<0){
            throw new Error(`Gear ${gear} is not found!!`);
            this.userGear=gear;
        }
    }
}

car1= new Car("Benz","E6");
car2=new Car("Prado","v8");

car1.shift('R');
car2.shift('D');

console.log(car1.userGear);
console.log(car2.userGear);
