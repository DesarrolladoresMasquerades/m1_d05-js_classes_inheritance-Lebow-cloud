const person1 = {
    firstName: "Ali",
    age: 23

}

const person2 = {
    firstName: "Giovanni",
    age: 55
}

class Person {
    constructor( firstName, age){
        this.firstName = firstName || " " // in the constructor we define and asing to create properties
        this.age = age || 0
    }
    tellAge(){
        return this.age
    }
}

const marco = new Person( "Marco", 48) // Here u see the constructor function invoked



const carlos = new Person( "Carlos", 25) 
const carol = new Person( "Carol") 

console.log(carol.tellAge())
console.log(marco.tellAge())
console.log(carlos.tellAge())

class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
      this.fur = ""
      this.weight = 0
      this.age = ageOfAnimal
      this.legs = 4
      this.name = nameOfAnimal
    }
  
    speak(){
      return `Hello I am ${this.name}`
    }
  
    walk(){
      return `I am going out alone because I am ${this.age} years old`
    }
  }

  const snowFlake = new Animal ("Snowflake", 3)

  console.log(
      snowFlake.speak(),
      snowFlake.walk()
  )

    class cat extends Animal{
        constructor(){   
            super()   
            this.kind = "cat"
        }
    }

    class dog extends Animal{
        constructor(nameOfAnimal, ageOfAnimal){
            super(nameOfAnimal, ageOfAnimal)
            this.kind = "dog"
        }
        speak(){
            return super.speak() + `Hello I am a ${this.kind}`
        }
    }

    const martini = new dog("martini", 12)
    console.log("maritni", martini.speak(), martini.walk())

    const santana = new dog("Santana", 9)
    console.log("santana speaks and walks", santana.speak(), santana.walk())