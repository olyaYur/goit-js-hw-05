"use strict"; 


const users = 
 [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

    const totalBalanceMale = users 
    .filter(people => people.gender === "male")
    .reduce((total, element)=> {return total + element.balance}, 0);

     console.log(totalBalanceMale);

     const totalBalanceFemale = users 
     .filter(people => people.gender === "female")
     .reduce((total, element)=> {return total + element.balance}, 0);
 
      console.log(totalBalanceFemale);




    




