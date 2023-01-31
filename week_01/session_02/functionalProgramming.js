// *                 callback functions                                                                 
// Callback function is a function passed as a argument (parameter) to another function

// setTimeout(function(){
//     console.log("Hello 👋👋👋");
// }, 5000)

// -                                        MAP & FILTER                                    
// *                                            MAP                                                         

const arrayOne = [1,4,9, 16];
// For Loop

// for(let i=0; i<arrayOne.length;i++){
//     console.log(arrayOne[i]);
// }
// arrayOne.map(elemantOfArrayOne=>console.log(elemantOfArrayOne))

// arrayOne.map((elemantOfArrayOne,index)=> console.log(`The element is ${elemantOfArrayOne} and the Index = ${index}`))

const newArray = arrayOne.map(elemantOfArrayOne => elemantOfArrayOne+2)

// console.log(newArray);

const animals = ["leopard 🐆", "giraffe🦒", "zebra 🦓", "monkey 🐵", "elephant 🐘", "loin 🦁"]

// animals.map((animal, id)=> console.log(animal + " is Cool ", "-----",id))

// *                                                       Filter                                                           
const arr = []
// for(let i =0 ; i< animals.length;i++){
//     if(animals[i].length<6){
//         arr.push(animals[i])
//     }
// }

const filteredAnimals = animals.filter(elem => {if(elem.length>8){
    return elem;
}})
// console.log(filteredAnimals);

// *                                            combine Filter & Map  & rest_spred                                                

const newAnimals = animals.filter(animal => animal.includes("o")).map(a=> a + " <===> This Animal contains O 😁")

// console.log(newAnimals);

const people =[
    {name:"Alex", age:23},
    {name:"Sarah", age:17},
    {name:"Max", age:28},
    {name:"Amelia", age:18},
    {name:"Bob", age:30},
    {name:"Mary", age:16},
    {name:"Sue", age:28},
    {name:"George", age:38},
];

const peropleOver18 = people.filter(person => person.age>=18).map(p =>  p = {...p,major:true})

console.log(peropleOver18);