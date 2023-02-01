// Array of object
// let users: object[];


type User = {
    userName: string,
    userId:number
}

let users: User[]
users = [];
// // object
// let user1: {
//   userNames: string;
//   userId: number;
// };

let user1:User = {
    userName: 'Rokibul',
    userId:124
}
let user2: User = {
    userName: 'Islam',
    userId:1234
}
users.push(user1)
console.log(users);

type RequestTypes = "GET" | "POST"

function requestTypeFunc(request:RequestTypes) {
    
}
requestTypeFunc("GET")

class IUser{
    // Propertise, methods, constructor
    userName: string;
    age: number;
    constructor(userName:string, age:number) {
        this.userName = userName;
        this.age = age;
    }
    display():void {
        console.log(`userName: ${this.userName}, age:${this.age}`);
    }
}


let user11 = new IUser("Rokibul", 23);
user11.display()

// Inheritence by extends IUser
class Student extends IUser {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(`userName: ${this.userName}, age:${this.age}, Id:${this.studentId}`);
  }
}

const student = new Student("Rokibul", 22, 223)

// Abstraction Class 
abstract class AIUser {
    userName: string;
    age: number;
  constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
  }
    abstract display(): void;
}
// Inheritence by extends IUser
class AStudent extends IUser {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(`userName: ${this.userName}, age:${this.age}, Id:${this.studentId}`);
  }
}
