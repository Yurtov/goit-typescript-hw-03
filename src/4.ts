class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door && this.key.getSignature() === person.getKey().getSignature()) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
      if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
      } 
    }
  }

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
