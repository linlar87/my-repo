// const name = 'Jhon';
// const age = 31;
// const job = 'Web dev';
// const city = 'Miami';
// let html;

// //Without template strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job 
// + '</li><li>City: ' + city +'</li></ul>';

// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city +'</li>' + 
//         '</ul>';

//         function hello(){
//             return 'hello';
//         }

// // With template string (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City2: ${city}</li>
//         <li>${2+2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </UL>
// `;
// document.body.innerHTML = html;

// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val; 

// //Get array lenght
// val = numbers.length;
// val = Array.isArray(numbers);
// val = numbers[3];
// val = numbers[0];
// //Insert into array
// numbers[2] = 100;
// //Find index of value
// val = numbers.indexOf(36);

// //Mutatning Arrays
// //add on to end
// // numbers.push(250)
// // //add on to front
// // numbers.unshift(120)
// // //take off from end
// // numbers.pop()
// // //take off from front
// // numbers.shift()
// // //splice values
// // numbers.splice(1,3);
// // //reverse
// // numbers.reverse();
// // // Concatenate array
// // val = numbers.concat(numbers2)
// //sorting arrays
// // val = fruit.sort();
// // val = numbers.sort();

// //Use the compare function
// val = numbers.sort(function(x,y){
//     return x - y;
// });
// val = numbers.sort(function(x,y){
//     return y - x;
// });

// //Find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);

const person = {
    firstName: 'Sam',
    lastName: 'Smmith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
document.body.innerHTML = val;