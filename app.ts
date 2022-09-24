let num: number;

num = 10.05;

let person = "Bob";

let arr: string[] = [];
arr = ["hhh", "kkk"];

let mmm: any[] = [];
mmm = [1, 2, "oooo", {}];

let arrObj: { name: string }[];
arrObj = [{ name: "Tania" }, { name: "Mother" }];

let obj: { name: string };
obj = { name: "Tania" };
console.log(obj.name);

let db: {
  id: number;
  title: string;
  info?: {
    date: Date;
    isNew: boolean;
  };
};

db = {
  id: 1,
  title: "New",
  info: {
    date: new Date(),
    isNew: true,
  },
};

let some: unknown;
some = 10;
some = "string";
let str: string;
if (typeof some === "string") {
  str = some;
}

// tuple  -кортеж, do not change
let fixed: [string, number];
fixed = ["str", 10];
fixed.push("new");
fixed.pop();

enum Toggle {
  ENABLE,
  DISABLE,
}
const service = {
  status: Toggle.ENABLE,
};
if (service.status === Toggle.ENABLE) {
  console.log("It is active");
}

// Union Type
let union: number | string;
union = 10;
union = "str";

// Literal Type
let active: "start" | "end";
active = "start";

const fruit: string[] = [];
function workWithArr(arr, value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
  }
  return arr;
}
workWithArr(fruit, "banana", "add");

// types of returns in functions
function print(): void {
  console.log("some log");
}

function combine(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Some error");
}

// eval - hwo runs text as code
function createServerPerson(name: string) {
  return eval(`
  (() => {
    return {
      name: '${name}'
    }
  })()
  `);
}

function createPerson(name: string): { name: string } {
  return createServerPerson(name);
}
const person2 = createPerson("Alex");

// function type
let foo: Function;
foo = () => {};

let foo2: (param: number) => void;
foo2 = (param: number) => {
  console.log("some number");
};

function culc(
  num1: number,
  num2: number,
  callback: (arg1: number, arg2: number) => number
) {
  return callback(num1, num2);
}
function fooCallback(num1: number, num2: number) {
  return num1 + num2;
}
const result = culc(1, 2, fooCallback);

// Custom Types
type PersonType = {
  name: string;
  age?: number;
  showName: () => void;
};

const person1: PersonType = {
  name: "Alex",
  age: 38,
  showName() {
    this.name;
  },
};
const person3: PersonType = {
  name: "Tania",
  age: 36,
  showName() {
    console.log(this.name);
  },
};
