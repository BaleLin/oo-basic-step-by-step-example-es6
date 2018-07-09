

import Person from "../practice_10/person";
import Student from "../practice_10/student";

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
            this.leader = null;
            console.log ("It is not one of us.")
        }
      }
      equal(_klass){
        return this.number === _klass.number;
}
      appendMember(student){
        if(student.klass!==undefined){
            student.klass = this;
        }
    } 
}




