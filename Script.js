//lecture 01
/*var  firstName = 'balkrishna';
console.log(firstName);
var lastName = 'Mittal';
console.log(lastName);
var age = 23;
console.log(age);
var fullAge = true;
console.log(fullAge);
*/


//Lecture 02
/*var name = 'nitesh';
var age = 22;
console.log(name + age);
console.log(age + age);
var job, isMarried;
console.log(job);
job = 'teacher';
isMarried = false;
console.log(name + '' + age + '' + job + '' + isMarried);
*/

//lecture 03
var birthYear = 2018 - 22;

birthYear = 2018 - 22 * 4;
console.log(birthYear);


var age = 16;
if (age < 20)
{
    console.log("person is teenager");
} else {
    console.log("person is adult");
}

// Arrays
var names = ['john', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(name[2]);//retives value from array
names[1] = 'Ben';
console.log(names);

var nitesh = ['nitesh', 'bansal', 1996, 'develpoer', false];
nitesh.push('yelow');
nitesh.unshift('Mr.');
console.log(nitesh);
nitesh.pop();
nitesh.shift();
console.log(nitesh);
if (nitesh.indexOf('farmer') === -1 )
{
    console.log("nitesh is farmer");
} else
{
    console.log('nitesh is devloper');
}
 
//Object

var car = {
    name: 'maruti suzuki',
    color: 'red',
    price: '$32000',
    classtype : 'A'
};
console.log(car.color);
console.log(car['classtype']);

var yu = 'price';
console.log(car[yu]);

car.price = '$42000';
car[color] = 'blue';
console.log(car);

var nitesh = new Object();
nitesh.name = 'nitesh Bansal';
nitesh.YearOfBirth = 1996;
nitesh['occupation'] = 'software Developer';
