

import Person from "../practice_9/person";

export default  class Student extends Person{
    constructor(id,name, age,klass){
        super(id,name, age);
        this.klass = klass;
        //console.log("aaa"+this.id);
    }
     isEqual(student){
        return student.id===this.id;
     }
     introduce() {
        if(this.klass.leader!==undefined&&this.isEqual(this.klass.leader)){
            return super.introduce()+ ` I am a Student. I am Leader of Class ${this.klass.number}.`
        }else{
            return super.introduce()+ ` I am a Student. I am at Class ${this.klass.number}.`
        }
       
    }
    
}


