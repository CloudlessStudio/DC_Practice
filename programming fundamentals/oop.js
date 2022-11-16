class Animal{
constructor(noise, legs){
    this.noise = noise;
    this.legs = legs;
}
speak(){
    console.log(this.noise);
}
legCount(){
    console.log("This animal has "+ this.legs + " legs");
}

}




let Dog = new Animal("Bark!",4);
let Cat = new Animal("Meow!",4);
let Goose = new Animal("Honk!",2);

Dog.speak();
Dog.legCount();

Cat.speak();
Cat.legCount();

Goose.speak();
Goose.legCount();