class House {
  protected street: string;
  public readonly type: string;
  private tenants: string[] = [];

  constructor(n: string, t: string) {
    this.street = n;
    this.type = t;
  }

  public showAddress(this: House): void {
    console.log("Adress " + this.street);
  }

  public showType(this: House) {
    console.log("Type " + this.type);
  }

  public addTenant(name: string) {
    this.tenants.push(name);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string;
  constructor(street: string, general: string) {
    super("Stone", street);
    this.chargeOfTheHouse = general;
  }

  public showAddress(): void {
    console.log("Adress " + this.street);
  }

  public showTenants() {
    console.log("General " + this.chargeOfTheHouse);

    super.showTenants();
  }
}

const stoneHouse = new StoneHouse("Euro", "Max");
stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Nikita");

stoneHouse.showTenants();

// const house = new House("Nova", "Wood");

// house.addTenant("Max");
// house.addTenant("Nikita");
// house.showTenants();

// const copyHouse = { showAddress: house.showAddress, street: "NewNova" };
// copyHouse.showAddress(" somestring");

// static //
class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static isStaticMethod() {
    console.log("I am static");
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
const obj4 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();
obj4.showCount();

UseStatic.isStaticMethod();

class MyLib {
  public static count() {
    console.log("numbers");
  }

  public static custon() {
    console.log("custon");
  }
}

MyLib.count();
MyLib.custon();

//  Abstract classes//
abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Maize extends Plane {
  public startEngine() {
    return "Ta-ta-ta";
  }
}

class Boeing extends Plane {
  public startEngine() {
    return "Buuuu";
  }
}

const maize = new Maize();
const boeing = new Boeing();

maize.sitInPlane();
boeing.sitInPlane();

console.log(maize.startEngine());
console.log(boeing.startEngine());

// object interface //
interface IPerson {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

type Person = {
  readonly name: string;
  age: number;

  greet: (phrase: string) => void;
};

let user: IPerson;

user = {
  name: "Max",
  age: 21,

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Hello, my name is ");

// classes interface//
interface IPerson {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }
  private checkAge() {
    if (this.age < 28) {
      throw new Error("Pilot too young");
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  flyMessage(): void {
    console.log("We are flying");
  }
}

abstract class Plane2 {
  protected pilot?: IPilot;

  public sitInPlane2(pilot: IPilot) {
    this.pilot = pilot;
  }

  public abstract startEngine2(): boolean;
}

class Boeing2 extends Plane2 {
  public startEngine2(): boolean {
    if (!this.pilot) {
      throw new Error("No pilot in cabin");
    }
    console.log("Staaaaart");

    this.pilot.flyMessage();
    return true;
  }
}

const pilot = new Pilot("Max", 35);
const boeing2 = new Boeing2();

pilot.greet("Hello, my name is");
boeing2.sitInPlane2(pilot);
boeing2.startEngine2();

// function interface//
// type AddFunc = (n1: number, n2: number) => number;

// const foo: AddFunc = (n1: number, n2: number) => {
// return n1 + n2;
// }

interface AddFunc {
  (n1: number, n2: number): number;
}

const foo5: AddFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

// Homework task//
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person1 {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House1 {
  protected door = false;
  private tenants: Person1[] = [];

  constructor(protected key: Key) {}

  comeIn(person1: Person1): void {
    if (this.door) {
      this.tenants.push(person1);
      console.log("Person inside");
    } else {
      throw new Error("door is close");
    }
  }

  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House1 {
  openDoor(key: Key): boolean {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = true);
  }
}

const key = new Key();
const house1 = new MyHouse(key);
const person8 = new Person1(key);

house1.openDoor(person8.getKey());
house1.comeIn(person8);
