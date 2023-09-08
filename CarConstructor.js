function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.model = model;
  this.milesPerGallon = milesPerGallon;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
  return this.tank;
};

Car.prototype.drive = function (distance) {
  if (this.tank / this.milesPerGallon > distance) {
    this.odometer += distance;
    this.tank -= distance * this.milesPerGallon;
    return this.odometer;
  } else if (this.tank / this.milesPerGallon < distance) {
    this.odometer += this.tank / this.milesPerGallon;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  } else {
    this.odometer += distance;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};
let car = new Car("BMW",10);
console.log(car.drive(10));
console.log(car.fill(100));
console.log(car.drive(100));




