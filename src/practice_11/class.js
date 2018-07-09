

import Person from "../practice_11/person";
import Student from "../practice_11/student";

export default  class klass{
    leader;
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number
    }

    assignLeader(student){
        if(this.number === student.klass.number){
            this.leader = student;
            if(student.klass.equal(this.assignLeaderListener.klass)){
                console.log (`I am ${this.assignLeaderListener.name}. I know ${student.name} become Leader of Class ${this.number}.`)
            }
        }else{
            this.leader = null;
            console.log ("It is not one of us.")
        } 
    }

    appendMember(student){
        student.klass = this;
        if(student.klass.equal(this.joinListener.klass)){
            console.log (`I am ${this.joinListener.name}. I know ${student.name} has joined Class ${this.number}.`);
        }
    }

    equal(peopleklass){
        return this.number === peopleklass.number;
    }

    registerAssignLeaderListener(teacher){
        this.assignLeaderListener = teacher;
    }

    registerJoinListener(teacher){
        this.joinListener = teacher;
    }
}







