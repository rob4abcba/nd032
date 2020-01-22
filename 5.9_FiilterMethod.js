// 1. Find all the words with more than 7 characters
const words1 = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']
// Your Code
const result1 = words1.filter((item) => { return item.length > 7 } );
console.log("result1 = ", result1)
console.log("words1.filter((item) => { return item.length > 7 } ) = ", result1)
// expected output: Array ['shepherd']

// ----------------------------------------------------------
// 2. Find all even values
const words2 = [12, 13, 14, 15, 16, 17]
// Your Code
const result2 = words2.filter((item) => { return item%2 == 0 } );
console.log("result2 = ", result2)
// expected output: Array [12, 14, 16]

// ----------------------------------------------------------
// REAL LIFE EXAMPLE
// We often use filter to quickly pull all the items that share a status or other characteristic. 
// For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]

// Your code
const result3 = hunters.filter((item) => { return item.status == 'active' } );
console.log("result3 = ", result3)
// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]

// Video examples
// ----------------------------------------------------------
const values = ['true', true, 'yes', 'no', 1, 0, 'false', false];
const result4 = values.filter(v => v == true);
console.log("result4 = ", result4);
// expected output: Array [true, 1]