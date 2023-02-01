export class IIUser {
  // Propertise, methods, constructor
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`userName: ${this.userName}, age:${this.age}`);
  }
}
