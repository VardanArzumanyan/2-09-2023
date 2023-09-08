function Person(name, age) {
  this.stomach = [];
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
    return `Person ate food`;
  }
  return `Person stomach is full`;
};
Person.prototype.poop = function () {
  this.stomach.length = 0;
  return `Person stomach is empty`;
};
Person.prototype.toString = function () {
  return `${(this.name, this.age)}`;
};

let person = new Person();

console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.eat("A"));
console.log(person.poop());
