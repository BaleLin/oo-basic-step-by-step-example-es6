

import Person from "../practice_8/person";

export default  class Student extends Person{
    constructor(id,name, age,klass){
        super(id,name, age);
        this.klass = klass;
        //console.log("aaa"+this.id);
    }
     introduce() {
        if(this===this.klass.leader){
            return super.introduce()+ ` I am a Student. I am Leader of Class ${this.klass.number}.`
        }else{
            return super.introduce()+ ` I am a Student. I am at Class ${this.klass.number}.`
        }
       
    }
    
}


