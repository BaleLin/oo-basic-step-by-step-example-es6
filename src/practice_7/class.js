
import Person from "../practice_7/person";

export default  class klass{
    leader;
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
}


