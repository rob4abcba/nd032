// ----------------------------------------------------------
// LEVEL 1 EXERCISES
// ----------------------------------------------------------
// 1.1 Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const end = start.map(x => abs(x - 11))
const end = start.map(x => 11 - x)
console.log(end)
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 1.2 Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]
const result2 = shipMates.map(arr => arr.reverse().join(': '))
console.log(result2)
// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 1.3 Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]
const result3 = awayTeam.map((name, i) => `${name}: ${i % 2 === 0 ? 'even' : 'odd'}`)
console.log(result3)
// expected output: Array: ["Picard: even", "Riker: odd", etc...]


// ----------------------------------------------------------
// LEVEL 2 EXERCISES
// ----------------------------------------------------------
// VIDEO EXAMPLES
// More we can do
const nums = [1, 2, 3, 4, 5]
const nums2a = nums.map( (int, index, array) => {
    console.log(int)
    console.log(index)
    console.log(array)
    return int
})
console.log("nums2a = ", nums2a)
const nums2b = nums.map( (value, index, array) => {
    console.log(value)
    console.log(index)
    console.log(array)
    return value
})
console.log("nums2b = ", nums2b)

// ----------------------------------------------------------
// 2.2 Create a multidimensional array of each item and its index in the original Array
const sci_fi_shows1 = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']
const result22 = sci_fi_shows1.map((battleship, index) => [battleship, index])
console.log(result22)
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 2.3 for each item in this array, create a multidimensional array containing the entire original array
const sci_fi_shows2 = [1, 2, 3, 4]
const result23 = sci_fi_shows1.map((intergerYo, index) => sci_fi_shows2)
console.log(result23)
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]


// ----------------------------------------------------------
// ADVANCED EXERCISES
// ----------------------------------------------------------
// Directions: 

// ["1", "2", "3"].map(parseInt)
console.log('["1", "2", "3"].map(parseInt) = ', ["1", "2", "3"].map(parseInt));
// const parseIntArray = ["2", "1", "3"].map(parseInt);
const base = 10;
// const parseIntArray = ["2", "1", "3"].map(parseInt(item, base));
const parseIntArray = ["2", "1", "3"].map((item) => parseInt(item, base));
console.log('parseIntArray = ', parseIntArray );

// ----------------------------------------------------------
// REAL LIFE EXERCISES
// ----------------------------------------------------------

// One common thing we use map for in real life is to reformat objects to have a shape that is better for our purposes. 
// For instance, we only care about the name and first three characters of the id for the races below. 
// Use map to grab those values and create a new array with them.

var index = [
    {key: 1, sector: 10, t_score: 18, id: '1236n7e8', value: 'Klingon'},
    {key: 4, sector: 145, t_score: 12, id: '293847hs8', value: 'Minbari'},
    {key: 8, sector: 214, t_score: 5, id: '283hy8347', value: 'Cylon'},
    {key: 3, sector: 8346, t_score: 10, id: 'n9837ks857', value: 'Jawa'},
]
console.log(index.map( (item) => `${item.value} ${item.id.substring(0,3)}`))

// Another solution
function getNameId3Char(item) {
    var NameId3Char = [item.value,item.id.substring(0,3)].join(" ");
    return NameId3Char;
  }
  console.log(index.map(getNameId3Char));