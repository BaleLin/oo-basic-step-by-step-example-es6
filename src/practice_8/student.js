

import Person from "../practice_7/person";

export default  class Student extends Person{
    constructor(id,name, age,klass){
        super(name, age);
        this.id = id;
         this.klass = klass;
    }
     introduce() {
      return super.introduce()+ ` I am a Student. I am at Class ${this.klass.number}.`
    }
    assignLeader(){
        return 
    }
}


