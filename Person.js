function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.compareAge = function (obj) {
  if (this.age > obj.age) {
    console.log(`${obj.name} is younger than me`);
  } else if (this.age === obj.age) {
    console.log(`${obj.name} is the same age as me`);
  } else {
    console.log(`${obj.name} is older than me`);
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
p1.compareAge(p2); // "Joel is older than me."
p2.compareAge(p1); //"Samuel is younger than me."
p1.compareAge(p3); // "Lily is the same age as me."
