import Person from "../practice_11/person";
export default  class Teacher extends Person{
    leader;
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses=klasses;
       
    }
    introduce(){
        if(this.klasses===undefined)
            return super.introduce()+' I am a Teacher. I teach No Class.';
        return super.introduce()+ ` I am a Teacher. I teach Class ${this.klasses.map(item=>item.number).join(", ")}.`;
    }
    introduceWith(student){
        let isStudent = this.klasses.some( klass => klass.equal(student.klass));
        if(isStudent){
            return super.introduce() +" I am a Teacher. I teach "+ student.name +".";
        }else{
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
        }
    }
    isTeaching(student){
        return isIn(student.klass);
        
    }
    isIn(student){
        return this.klasses.map(item=>item.number).find(item=>item === student.klass);
    }
    joinListener(student){
       console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
        
    }
    assignLeaderListener(student){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
        
}

}



