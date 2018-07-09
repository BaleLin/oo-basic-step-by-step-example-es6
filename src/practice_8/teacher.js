import Person from "../practice_7/person";

export default  class Teacher extends Person{
    constructor(name, age,klass){
        super(name,age);
        this.klass = klass;
        // this.name = name;
        // this.age = age;
        
    }
     introduce() {
         if(this.klass!==undefined){
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass.number}.`
         }else{
            return super.introduce()+` I am a Teacher. I teach No Class.`
         }  
    }

    introduceWith(student){
        if(student.klass === this.klass){
            return super.introduce()+` I am a Teacher. I teach ${student.name}.`;
        }
            return super.introduce()+` I am a Teacher. I don't teach ${student.name}.`;
}
}


