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
