// // ================function===============

// function myfun(){
//     console.log("hello words!");
// }
// myfun();


// function add( a, b) {
    
// var c = a + b;
// console.log(c)

// }

// add( 20,10);
// add( 10,10);
// add( 2,10);


// var shoes= 100;
// var stateTax = 1.1;
// function totalprice(price, tax) {
//     return price * tax;
// }
// var topay= totalprice(shoes,stateTax);
// console.log(topay);

// var currencyone = 100;
// var currencytwo = 0;
// var exchangeRate = 1.2;
// function convertcurrancy(amount, rate){
//     return amount * rate;

// }
// currencytwo= convertcurrancy(currencyone,exchangeRate);
// console.log(currencytwo);


// let counter = 100;
// function example() {
//     console.log(counter);
//     counter = counter -20;
// if (counter === 0) return;    
// example();
// }
// example()

// function getTotal(a,b) {
//     return a + b
// }
// var num1 = 2;
// var num2 = 3;

// var total = getTotal(num1, num2);
// console.log (total)

// function getDistance(mph, h) {
//     return mph * h
// }
// var mph = 60;
// var h = 2;
// var distance = getDistance(mph, h);

// console.log(distance); 


// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())

// function addTwoNums(a, b) {
//     console.log(2 + 4)
// }
// addTwoNums()
// var brid = {
//     haswings:true,
//     canFly:true,
//     hasFeathers:true
// }
// var bird = {
//   hasWings: true,
//   canFly: true,
//   hasFeathers: true
// };

// var eagle1 = Object.create(bird);
// console.log("eagle1:", eagle1);

// console.log("eagle1 has wings:", eagle1.hasWings);
// console.log("eagle1 can fly:", eagle1.canFly);
// console.log("eagle1 has feathers:", eagle1.hasFeathers);

// var eagle2 = Object.create(bird);
// console.log("eagle2 has wings:", eagle2.hasWings);

// var penguin1 = Object.create(bird);
// penguin1.canFly = false;
// console.log("penguin1:", penguin1);


// const car= {
//     engine:true,
//     steering: true,
//     speed:"slow"
// }
// const sportsCar = Object.create(car);
// sportsCar.speed= "fast";
// console.log("the sportsCar object:", sportsCar);
// for (prop in sportsCar){
//     console.log('😃', prop);
// }
// for (prop of Object.keys(sportsCar)){
//     console.log('😆', prop + ":"+ sportsCar[prop]);
// }

// var greet = "Hello";
// var place = "World";
// console.log(greet + " " + place + "!");

// let a =12;
// let b= 8;
// let c = a+b
// console.log(c)


// console.log("hello")


// console.log(`${1 + 1 + 1 + 1 + 1 } stars!`) 

// Task 1
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// function logDairy() {
//     for (prop of Object.values(dairy))
//         console.log(prop)
// }
// logDairy()
// // Task 2
// const animal = {
// canJump: true
// };
// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;
// function birdCan() {
//     for (prop of Object.keys(bird)) {
//         console.log(`${prop}: ${bird[prop]}`);
//     }
// }
// birdCan()
// // Task 3
// const animal1 = {
// canJump: true
// };
// const bird1 = Object.create(animal1);
// bird1.canFly = true;
// bird1.hasFeathers = true;
// function animalCan() {
//     for (prop in bird1) {
//     console.log(`${prop}: ${bird1[prop]}`);
//   }
// }
// animalCan()


// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appendIndex);


// Dom
// const h2 = document.createElement('h2')
// h2.innerText = "this is an h2 heading"
// 'this is an h2 heading'
// h2.setAttribute('id', 'sub-heading')

// h2.setAttribute('class', 'secondary')

// h2

// <h2 id="sub-heading"  class= "secondary"> This is an h2 heading </h2>


// document.bodyappendchild(h2)
// <h2 id= "sub-heading" class="secondary"> This is an h2 heading </h2>



// function myFunction() {
//   var x = 5;
//   if (true) {
//     var y = 10;
//   }
//   console.log(x); // Output: 5
//   console.log(y); // Output: 10
// }
// myFunction();
// function myFunction() {
//     let x = 5;
//     if (true) {
//       let y = 10;
//       console.log(x); // Output: 5
//       console.log(y); // Output: 10
//     }
//     console.log(x); // Output: 5
//     console.log(y); // ReferenceError: y is not defined
//   }
//   myFunction();

// function myFunction() {
//     const x = 5;
//     if (true) {
//       const y = 10;
//       console.log(x); // Output: 5
//       console.log(y); // Output: 10
//     }
//     console.log(x); // Output: 5
//     console.log(y); // ReferenceError: y is not defined
//   }
//   myFunction()

// ===========================Object============
let myObject = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
  
  console.log(myObject.name); // "John"
  console.log(myObject.address); // "Anytown"
  