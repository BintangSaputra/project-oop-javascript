const numberA = 10;
const numberB = 10;

class ClassName {
  constructor(ipa, ips) {
    // this.attributeA = ipa;
    this.attributeB = ips;
    this.clickMeSenpai();
    this.countMeSenpai();
  }

  clickMeSenpai() {
    console.log("Nani");
  }

  countMeSenpai() {
    console.log(numberA * numberB + numberA / numberB);
  }
}

const newObject = new ClassName("ipa", "ips");

console.log(newObject);

class Binatang {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`The ${this.name} is walking`);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this, (name = newName);
  }
}

const raccoon = new Binatang("Raccoon");

console.log(raccoon);

raccoon.walk();

class city {
  constructor(destination) {
    this.destination = destination;
  }

  drive() {
    console.log(
      `You are driving to ${
        this.destination
      }, and will be arrived in 50 minutes`
    );
  }

  getName() {
    return this.destination;
  }

  setName(newName) {
    this.city = newCity;
  }
}

const bandung = new city("Bandung");

console.log(bandung);

bandung.drive();

// create object

class cars {
  constructor(carName, type, color, engineCapacity, price) {
    this.carName = carName;
    this.type = type;
    this.color = color;
    this.engineCapacity = engineCapacity;
    this.price = price;
  }

  getcarName() {
    return this.carName;
  }

  gettype() {
    return this.type;
  }

  getengineCapacity() {
    return this.engineCapacity;
  }

  getprice() {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigit: 0
    }).format(this.price);

    return formattedPrice;
  }

  carExplain() {
    console.log(`This is ${this.carName}, and its type is ${
      this.type
    } has a lot of colors, including ${this.color}.
     It has big engine capacity ${
       this.engineCapacity
     } and this is the cheapest model ${this.price}`);
  }
}

const newCar = new cars("Tesla", "ax100", "red", "2000cc", 200000000);

console.log(newCar);

newCar.carExplain();

document.getElementById("carList").innerHTML = newCar;

// extend oop

class FantasticBeast extends Binatang {
  constructor(name, species) {
    super(name);
    this.species = species;
  }

  fly(destination) {
    console.log(`${this.name} the ${this.species} is flying to ${destination}`);
  }
}

const dragon = new FantasticBeast("Hungarian Horntail", "Dragon");

console.log(dragon);

class SuperCar extends cars {
  constructor(carName, technology) {
    super(carName);
    this.technology = technology;
  }

  drive(specification) {
    console.log(`${this.carName} is the most powerful supercar with ${
      this.technology
    }, it can fly
    to 300kmh in 10 sec.`);
  }
}

const Esemka = new SuperCar("Esemka 123", "supercharged");

console.log(Esemka);

Esemka.drive();
