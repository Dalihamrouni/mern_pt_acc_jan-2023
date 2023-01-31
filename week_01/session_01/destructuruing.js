const favoriteSinger = {
    firstName : "Abd Al Halim",
    lastName: "Mahfoudth",
    country :"Egypt",
    bestSong:"Maoued"
};
const hisFirstName = favoriteSinger.firstName;
const hisLastName = favoriteSinger["lastName"];
// console.log(`My Favorite Singer is ${hisFirstName} ${hisLastName}`);
// const {firstName, lastName} = favoriteSinger;
// console.log(`My Favorite Singer is ${firstName} ${lastName} using desctructuring `);

const {firstName:coolName, lastName} = favoriteSinger;

// console.log(`His Cool name ${coolName}`);


const superHeros = ["Superman", "SpiderMan", "Thor", "Batman", "Wonder Wonman"]

const hero2 = superHeros[1] 
const hero3 = superHeros[2]
console.log(`Second = ${hero2} and third = ${hero3}`);

const [,second,third,] = superHeros
console.log(`${second}******* ${third}`);

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

const {addresses:[,{city:homeTown}]} = person

console.log(homeTown);