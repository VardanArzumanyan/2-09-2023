function Baby(name,age,favoriteToy){
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy

}

Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
}

let baby = new Baby("A",2,"ell");
console.log(baby.play());