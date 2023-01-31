const a  = [10,20,3];
const b = a;

a.push(9000);
b.push(2000);

// console.log("a ==== ",  a); //? [10,20,3,9000]

// console.log("b === ", b); //? [10,20,3,2000]
// ? Correct result a= b = [10,20,3,9000,2000]

// * Arrays and Objects are complex Data typres :: they are passed by reference not by value

const c = [...a] // Create a new copy of a and assign it to c
a.push(888888888)

// console.log("a === ",  a); //? 
// console.log("b === ", b); //? 
// console.log("c === ", c); //? 

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };



//   console.log(person2);

  person["id"] = 9498852585  
  const person2 = {...person}
  console.log("Person = ", person);

  console.log("Person 2  = ", person2);