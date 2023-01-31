export {}

interface IPerson {
  firstName: string,
  lastName: string,
  citizenId: string
}

interface IEmployee {
  firstName: string,
  lastName: string,
  id: number,
  salary: number,
  department: string
}

class CwInstructor implements IPerson, IEmployee {

  salary: number = 10000;
  citizenId = "123456789"

  constructor(public firstName:string, public lastName:string, public department:string, public id:number) {}

}

let noah = new CwInstructor("Noah","Adams", "Full-Stack", 1)
console.log(noah)

const employeeInfo = (employee: IEmployee) => {
  console.log(`Employee Name : ${employee.firstName} \nEmployee Lastname : ${employee.lastName} \nEmployee Department : ${employee.department}`);
}

employeeInfo(noah)


type Bird = {
  fly : () => void
};
type Fish = {
  swim : () => void
};
type Cat = {
  meow : () => void
};
type Pet = Bird | Fish | Cat

//-------------------------------------------------------------------
//* Simplify code

//? let user = getUser();
//? console.log(user && user.address ? user.address.street : undefined)

//- --> console.log(user?.address?.street)

//? let x = status !== null && status !== undefined ? status : getStatus();

//- --> let x = status ?? getStatus()  //? Nullish Coalescing 

//-------------------------------------------------------------------


//* GENERICS

function getItems<T>(items: T[]): T[] {
  return items;
}

// const getAllItems = <T>(items: T[]): T[] => items;

let numArr = getItems([4,5,6])
//* numArr.push("Dan Brown")  //* Gives error

function displayType<T, U>(p1: T, p2: U): void {
  console.log("param1: " + p1 + " param1 type: " + typeof p1);
  console.log("param2: " + p2 + " param2 type: " + typeof p2);
}

displayType(console.log, 4 < 8)



function update<O extends object, K extends keyof O>(
  obj: O,
  key: K,
  newValue: O[K]
): O {
  return { ...obj, [key]: newValue };
}

interface Product {
  name : string;
  price: number;
  brand: string;
}

let prod1 = { name: "SSD", price: 220, brand: "WD" }

let blogArticle1 = { title:"asdfasd", Author:"Mark", description: "asfascascasasvasvav"}

update(blogArticle1, "description", )

update(prod1, "price", "7")