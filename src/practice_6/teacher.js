
import Person from "../practice_6/person";

export default  class Teacher extends Person{
    constructor(name, age,klass){
        super(name,age);
        this.klass = klass;
        // this.name = name;
        // this.age = age;
        
    }
     introduce() {
         if(this.klass!==undefined){
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`
         }else{
            return super.introduce()+` I am a Teacher. I teach No Class.`
         }
      
    }
}

