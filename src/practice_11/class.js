

export default  class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.klass.equal(this)){
            this.leader = student;
            if(this.listenAssignLeaderTeacher!==undefined)
            this.listenAssignLeaderTeacher.assignLeaderListener(student);
        } 
        else
        console.log('It is not one of us.');
    }
    equal(klass){
        return this.number===klass.number;
    }
    isNumberEqual(student){
        this.klasses.number === student.klasses.number;
     }
    appendMember(student){
        student.klass = this;
        if(this.listenJoinTeacher!==undefined)
        this.listenJoinTeacher.joinListener(student);
    }
    registerAssignLeaderListener(teacher){
        this.listenAssignLeaderTeacher = teacher;;
    }
    
    registerJoinListener(teacher){
        this.listenJoinTeacher = teacher;
    }

}







