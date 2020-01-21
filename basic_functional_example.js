// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
// ES5 Solution
function sayHello() {
    const time = new Date().getHours()
    if(time > 12 && time < 17) {
        return "Good Afternoon"
    } 
    return "Good Morning!"
}
// sayHello();
console.log("ES5", sayHello()) 

// ES6 Solution
const greet = () => {
    // Here a date has been assigned  
    // while creating Date object 
    var A = new Date(); 
    // hour from above is being  
    // extracted using getHours() 
    var B = A.getHours();
    if (B > 12 && B < 17) {
        return "Good Afternoon";
    } else {
        return "Good Morning!";
    }
  }
//   greet();
  console.log("ES6", greet()) 



// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------


