// 1. Take this disjointed sentence and turn it into a single string
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']

// Your Code Here

// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20
    },
    {
        team: 'B',
        score: 17
    },
    {
        team: 'C',
        score: 23
    },
    {
        team: 'D',
        score: 13
    }
]

// Your Code Here

// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship
const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '41G',
    }
]
// Your Code Here
// solution:
const result = ships.reduce((previous, current) => {
    const speed = parseInt(current.speed.slice(0, -1))
    console.log("speed = ", speed);
    const previousSpeed = parseInt(previous.speed.slice(0, -1))
    console.log("previousSpeed = ", previousSpeed);
    if (speed > previousSpeed) {
        console.log(current, " is faster than ", previous);
        return current
    }
    console.log(previous, " is faster than ", current);
    return previous
}, { name: "YoShipYo", speed: "5G"})
console.log("The fastest ship type = ", result.name)
// Expected output: Tie Fighters


const sales = [120.00, 19.99, 3.50, 4.00];
const total = sales.reduce((runningTotal, currentValue) => {
    console.log(runningTotal, currentValue)
    return runningTotal + currentValue
})
// cycle 1: 120 19.99
// cycle 2: 139.99 3.5
// cycle 3: 143.49 4
console.log("total = ", total);
// expected output: 147.49

//  SAME AS:
const reducer = (runningTotal, currentValue) => runningTotal + currentValue;
console.log("sales.reduce(reducer) = ", sales.reduce(reducer));

// SAME AS:
[120.00, 19.99, 3.50, 4.00].reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue
})