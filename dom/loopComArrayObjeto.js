let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
]

const person = {fname:"John", lname:"Doe", age:25};

/*
for (let a in person){
  console.log(a);
  console.log(person[a]);
}
console.log(person.fname);
*/

/*
console.log(person.fname);

for (let car of cars){
  console.log(car, car.color);
}

//em resumo o for in é somente pra acessar objetos
//o for of é para acessar array com multiplos objetos
// for of: It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
*/