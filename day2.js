// console.log('+', 2 + 2);
// console.log('-', 2 - 2);
// console.log('*', 2 * 2);
// console.log('/', 2 / 2);

// console.log(2 + 2 / 2);
// console.log('**', 2 ** 4);
// console.log('%', 5 % 2);

// ink dec ///////////////

// let counter = 10;
// counter += 1;
// counter -= 5;
// counter /= 3;
// counter *= 2;

// console.log(counter);

// > < <= >= == === ////////
// console.log(10 > 15);
// console.log(10 < 15);
// console.log(10 <= 10);
// console.log(10 >= 10);

// let a = 'Java';
// let b = 'java';
// console.log(a == b);

// function//////
// declaration, expression,arrow
//function declaration
// let studentName = 'Sara';
// student(studentName);

// function student(stuent) {
// 	console.log(`name ${stuent} of student is ${stuent}`);
// }

//function expression
// let student = function () {
// 	console.log('hello');
// };
// student();

//function arrow
// let student = () => {'hello'};
// student()

// function name(params) {
// 	return 'hello';
// }
// console.log(name());

// for
// for (let num = 0; num <= 5; num++) {
// 	console.log('num', num);
// }

// for of
// let students = ['Ali', 'Azer', 'Nihad', 'Cavad'];

// for (const name of students) {
// 	console.log('name', name);
// }

// forEach
// students.forEach((name, index, students) => {
// 	console.log('name', name);
// 	console.log('index', index);
// 	console.log('students', students);
// });

// let developerSalary = [200, 400, 800, 2000, 3400, 7000, 12010];

//map
// let map = developerSalary.map((salary, index, developerSalary) => {
// 	console.log('salary', salary * 2);
// });

//filter
// let filter = developerSalary.filter((salary, index, developerSalary) => {
// 	return index % 200 == 0;
// });

// console.log(filter);

// let developerSalary = [200, 5000, 400, 800, 2000, 3400, 7000, 12010];

// find

// let find = developerSalary.find((salary) => {
// 	return salary > 400;
// });

// console.log(find);

// findIndex

// let findIndex = developerSalary.findIndex((salary) => {
// 	return salary > 400;
// });

// console.log(findIndex);

// some , every
// let some = developerSalary.some((salary) => {
// 	return salary > 2000;
// });
// console.log(some);

// let every = developerSalary.every((salary) => {
// 	return salary > 100;
// });

// console.log(every);

//reduce
// let reduce = developerSalary.reduce((acc, salary, index, developerSalary) => {
// 	return acc + salary;
// }, 0);

// console.log(reduce);

//sort
// a > 0;
// b < 0;
// 0;

// let sort = developerSalary.sort((a, b) => {
// 	return a - b;
// });
// console.log(sort);

let developerSalary = [200, 5000, 400, 800, 2000, 3400, 7000, 12010];

//splice
// let splice = developerSalary.splice(0, 4, 'hello');
// console.log(splice);
// console.log(developerSalary);

//slice
// let slice = developerSalary.slice(0, 4);
// console.log(developerSalary);
// console.log(slice);

// split + join
// let stirng =
// 	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae cupiditate facere sed doloremque eveniet! Velit minus dignissimos, repellendus a nemo deleniti, blanditiis aspernatur reiciendis, totam minima inventore praesentium. Ab?';

// let split = stirng.split(' ');
// console.log(split);

// let join = split.join(' ');
// console.log(join);

// reverse

// let reverse = developerSalary.reverse();
// console.log(reverse);

// concat və spread aperator(...)

// let a = ['1', '2'];
// let b = ['3', '4'];

// let concat = a.concat(b);
// console.log(concat);

// let spread = [...a, ...b];
// console.log(spread);
