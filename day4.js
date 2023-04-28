// OOP  Object Oriented Programming

//function class
// function Animal(name) {
// 	this.name = name;

// 	this.getName = function () {
// 		return this.name;
// 	};
// }

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// const cat = new Animal('cat');
// console.log(cat);

//inheritens

// class Plane {
// 	constructor(type, numberOfPassengers) {
// 		this.type = type;
// 		this.numberOfPassengers = numberOfPassengers;
// 	}

// 	startFlight() {
// 		console.log('start');
// 	}
// }

// //extends

// class MilitiryPlane extends Plane {
// 	constructor(type) {
// 		super(type, 0);
// 		this.numberOfGuns = 0;
// 	}

// 	setNumberOfGuns(numberOfGuns) {
// 		this.numberOfGuns = numberOfGuns;
// 	}
// }

// const plane = new Plane('plane', 150);
// // console.log(plane);
// const militiryPlane = new MilitiryPlane('militiryPlane');
// // console.log(militiryPlane);
// militiryPlane.setNumberOfGuns(4);
// console.log(militiryPlane);

// //instanceof
// class Animal {}
// console.log(militiryPlane instanceof Animal);

//

//incapsulation ///////
//public
//privet #

// class Developer {
// 	#salary;
// 	constructor(name, programmingLanguage) {
// 		this.name = name;
// 		this.programmingLanguage = programmingLanguage;
// 		this.#salary = 3000;
// 	}

// 	#startCoding() {
// 		console.log('start Coding');
// 	}
// }

// class Junior extends Developer {
// 	constructor(name) {
// 		super(name);
// 	}
// }

// const developer = new Developer('Afin', 'JavaScript');
// const junior = new Junior('Sahil');
// console.log(junior);

//polymophism
// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	makeASound() {}
// }

// class Dog extends Animal {
// 	constructor(name) {
// 		super(name);
// 	}

// 	makeASound() {
// 		console.log('gav gav');
// 	}
// }

// class Cat extends Animal {
// 	constructor(name) {
// 		super(name);
// 	}
// 	makeASound() {
// 		console.log('mau mau');
// 	}
// }

// const dog = new Dog('dog');
// const cat = new Cat('Cat');
// console.log(dog);
// dog.makeASound();
// cat.makeASound();

//abstaction

// class Football {
// 	constructor(name, club) {
// 		this.name = name;
// 		this.club = club;
// 	}

// 	shoot() {}
// 	pass() {}
// }

// class Forward extends Football {
// 	constructor(name, club) {
// 		super(name, club);
// 	}

// 	shoot() {
// 		console.log('wery good');
// 	}
// 	pass() {
// 		console.log('normal');
// 	}
// }

// class Galkeeper extends Football {
// 	constructor(name, club) {
// 		super(name, club);
// 	}

// 	shoot() {
// 		console.log('bad');
// 	}
// 	pass() {
// 		console.log('good');
// 	}
// }

//static
// class Car {
// 	static isCar(car) {
// 		return car instanceof Car;
// 	}

// 	static initialParams = {
// 		name: 'Audi',
// 		maxSpeed: '200',
// 	};

// 	constructor(name, maxSpeed) {
// 		this.name = name || Car.initialParams.name;
// 		this.maxSpeed = maxSpeed || Car.initialParams.maxSpeed;
// 	}
// }

// const car = new Car();
// const isCar = Car.isCar(car);
// console.log(isCar);

// Task 2

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge(newPerson) {
// 		if (this.age > newPerson.age) {
// 			alert(`${this.name} older  ${newPerson.name}`);
// 		} else if (this.age < newPerson.age) {
// 			alert(`${this.name} younger   ${newPerson.name}`);
// 		}
// 	}
// }

// const person1 = new Person('Maxim', 24);
// const person2 = new Person('Svetlana', 36);
// const person3 = new Person('Irina', 23);

// person1.compareAge(person2); // Maxim is younger than Svetlana

// person2.compareAge(person3); // Svetlana is older than Irina
// person3.compareAge(person1); // Irina is younger than Maxim
class Dictionary {
	constructor(name) {
		this.name = name;
		this.words = {};

		this.add = function (word, description) {
			this.words.word = word;
			this.words.description = description;
		};
		this.remove = function (key) {
			delete this.words[key];
		};
		this.get = function (key) {
			return this.words[key];
		};
		this.showAllWords = function () {
			console.log(`${this.words.word} - ${this.words.description}`);
		};
	}
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'is popular');

dictionary.remove('JavaScript');
dictionary.showAllWords();
console.log(dictionary.words);
