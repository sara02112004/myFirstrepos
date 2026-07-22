// class person {
//   constructor(name, degree) {
//     this.name = name;
//     this.degree = degree;
//   }
//   intro() {
//     return `hello im ${this.name} and i have degree in ${this.degree}.`;
//   }
// }
// let person1 = new person("sara", "CSE");
// let person2 = new person("ketzi", "IT");
// console.log(person1.intro());
// console.log(person2.intro());
// console.log(person1.name);
// console.log(person2.degree);

class student {
  constructor(name, rollno) {
    this.name = name;
    this.rollno = rollno;
  }
  withthis() {
    return `hello im ${this.name} and the rollno is ${this.rollno}.`;
  }
  withoutthis(name, rollno) {
    return `hello im ${name} and the rollno is ${rollno}.`;
  }
}
let student1 = new student("sara", "02");
let student2 = new student("ketzi", "01");
console.log(student1.withthis());
console.log(student2.withoutthis());
