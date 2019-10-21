//wrap all methods and properties within an object
let jon={
  name:"Jonathan",
  age:20,
  course:"Software Engineering",
  describeBoy: function () {
      console.log(this.name + " is " + this.age + " years old.");
      
  }
}

jon.describeBoy();