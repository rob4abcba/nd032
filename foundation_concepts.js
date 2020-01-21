/* 
// MC With a couple edits I faked it out to get the correct answer.  However, a better solution is at the bottom.
// Directions: Translate from normal function to pure function
// MC let greeting = 'Hello, '
const greet = (name) => {
  // MC define initial greeting inside the function to avoid repeated accumulation of names added to the end
  let greeting = 'Hello, '
    return greeting += name
}
// this code could be problematic because greeting is in the global scope. 
// We could not use the greeting a second time, because the greeting variable is changed to contain the name
console.log(greet('Arthur.'))
console.log(greet('Arthur.'))
*/

// BETTER Solution: Create a PURE function version below
const greet = (name, base_greeting) => {
    return `${base_greeting} ${name}`
}

let greeting = "Hello, "

greet('Arthur.', greeting)
// now we can reuse greeting, and the greet function is pure

console.log(greet('Arthur.', greeting)) 
// expected output: Hello, Arthur

