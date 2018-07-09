
import Person from "../practice_8/person";
import Student from "../practice_8/student";

export default  class klass{
    leader;
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(this.number==student.klass.number){
            this.leader = student;
        }else{
            return null;
        }
        
    }
}



