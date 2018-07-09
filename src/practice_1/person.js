export default class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
      return 'My name is ' + this.name + '. ' +'I am '+ this.age + ' years old.';
    }
}
//  calss Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
  
//     introduce() {
//       return 'my name is' + this.name + '.' +'I am'+ this.age + 'years old';
//     }
//   }
//  module.exports = {
//     Person
//  }
