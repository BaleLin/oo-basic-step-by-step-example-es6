import Person from "../practice_3/person";

export default  class Worker extends Person{
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
       
    }
     introduce() {
      return `I am a Worker. I have a job.`;
    }
}
