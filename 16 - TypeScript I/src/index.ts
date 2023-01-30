export {};
console.log("Hello TypeScript!");

//? let a:string;
//? let a = 42;
//? let b = "hello";
//? console.log(a)

let myVar: any = "kerim";
myVar = 77;
console.log(myVar)

let numbers: number[] = []; // = [1,2,3];
//? numbers.push("3");  //* Error

let v1:unknown = 5;

let v2: number = v1 as number;

console.log("v1 :", v1, " v2 :", v2)

let firstName = "Mark";
let lastName = "Maddison";

// function getFullName():void {
//   return firstName + " " + lastName
// }

let num = 4.325;

function RoundUp(n: (string | number)): string {
  //* Type narrowing
  if (typeof n === "number") {
    return n.toFixed(2);
  } else if (typeof n === "string") {
    return parseFloat(n).toFixed(2)
  }
  return ""
}

console.log(RoundUp(num))
console.log(RoundUp("5.825"))


function greet(message: string, person: string): string {
  return message + " " + person + "!"
}

const gr1 = greet("Good night", "Kerim");
console.log(gr1)

type Control = "user" | "admin" | "moderator"
let c : Control = "moderator"

let d = c as Control

type Person = {
  firstName: string,
  lastName: string,
  age: number
};

let people: Person[] = [];

people.push({firstName:"John", lastName:"Doe", age:33})