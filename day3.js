// object
// const developer = {
// 	//key:value
// 	name: 'Isa',
// 	job: 'Mentor',
// 	age: 27,
// 	man: true,
// 	isaSurname: {
// 		surname: 'Afandiyev',
// 	},
// 	fullName: function (name) {
// 		return name;
// 	},
// };

// const developer = {
// 	name: 'Isa',
// 	age: 27,
// 	isaSurname: {
// 		surname: 'Afandiyev',
// 	},
// };
// console.log(developer.isaSurname.surname);

// console.log(developer['isaSurname']['surname']);

// Add, Delete, Update
//add
// developer.adress = 's.Rustam';
// console.log(developer);

//Delete
// delete developer.adress;
// console.log(developer);

//Update
// developer.age = 30;
// console.log(developer);

// for in
// for (const key in developer) {
// 	console.log(key);
// 	console.log(developer[key]);
// }

//Object.keys
// const keys = Object.keys(developer);
// console.log(keys);

//Object.values
// const value = Object.values(developer);
// console.log(value);

//Object.entries
// const entries = Object.entries(developer);
// console.log(entries);

// console.log('name' in developer);

// const a = {
// 	name: 'bla bla',
// };

// const b = {
// 	age: '3',
// };

// Object.assign;
// let assign = Object.assign(a, b);
// assign.age = 7;
// a.age = 10;
// b.h.h = 7;
// console.log(assign);
// console.log(b);

// spread (...)
// let spread = {
// 	...a,
// 	...b,
// };
// console.log(spread);
// console.log(a);

// console.log(b?.h?.h);

//Date
// const data = new Date();
// console.log(data);

// new Data(year,month,date,hours,minutes,seconds,ms)

// console.log(data.getFullYear());
// console.log(data.getMonth());
// console.log(data.getDate());
// console.log(data.getMinutes());

// data.setFullYear(2021);
// console.log(data);

//this
// console.log(this);
// function name() {
// 	console.log(this);
// }

// name();

// const user = {
// 	nickName: 'Force',
// 	name() {
// 		console.log(this);
// 	},
// };

// user.name();

// const developer = {
// 	fullName: 'Maxsim',
// 	programmingLaungage: 'JavaScript',
// 	getFullName(age) {
// 		console.log(this);
// 		console.log(this.fullName);
// 		console.log('age', age);
// 	},
// 	getProgrammingLaungage: function () {
// 		console.log(this);
// 		console.log(this.getFullName);
// 	},
// };

// let getFullName = developer.getFullName;
// developer.getFullName();
// getFullName();
// console.log(getFullName);
// bind, call,apply
// const user = {
// 	name: 'Maxim',
// 	getFullName() {
// 		console.log(this);
// 	},
// };

// user.getFullName();

// const bind = getFullName.bind(user, 20);
// bind();
// getFullName.call(user, 20);
// getFullName.apply([20, 0, 3]);
