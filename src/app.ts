// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person1 {
//   constructor(private key: Key) {}

//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House1 {
//   protected door = false;
//   private tenants: Person1[] = [];

//   constructor(protected key: Key) {}

//   comeIn(person1: Person1): void {
//     if (this.door) {
//       this.tenants.push(person1);
//       console.log("Person inside");
//     } else {
//       throw new Error("door is close");
//     }
//   }

//   public abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House1 {
//   openDoor(key: Key): boolean {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("Key to another door");
//     }
//     return (this.door = true);
//   }
// }

// const key = new Key();
// const house1 = new MyHouse(key);
// const person8 = new Person1(key);

// house1.openDoor(person8.getKey());
// house1.comeIn(person8);
