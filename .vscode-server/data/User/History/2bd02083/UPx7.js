class Car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
   getDescription(){
          `This car is a ${this.make}${this.model} made in the year ${this.year}`;  
   } 
}

class ElectricCar extends Car {
    constructor(make,model,year,range){
        super(make,model,year);
        this.range = range;
    }
}