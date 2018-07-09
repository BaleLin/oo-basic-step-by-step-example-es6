import Person from "../practice_3/person";

export default  class Student extends Person{
    constructor(name, age,klass){
        super();
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
     introduce() {
      return `I am a Student. I am at Class ${this.klass}.`;
    }
}

