// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// your code
// const end = start.map(x => abs(x - 11))
const end = start.map(x => (11 - x))
console.log(end)
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]
// your code
// const JobNameArray = shipMates.map(item => `"${item[1]}: ${item[0]}"`)
function JobNameItem(item) {
    // return `"${item[1]}: ${item[0]}"`
    return `${item[1]}: ${item[0]}`
}
const JobNameMap = shipMates.map(JobNameItem)
console.log(JobNameMap)
// EASIER WAY
const result = shipMates.map(arr => arr.reverse().join(': '))
console.log(result)
// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code
const result3 = awayTeam.map((name, iYo) => `${name}: ${iYo % 2 === 0 ? 'even' : 'odd'}`)
console.log(result3)

// expected output: Array: ["Picard: even", "Riker: odd", etc...]


// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows1 = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']
const result4 = sci_fi_shows1.map((name, iYo) => [name, iYo])
console.log(result4)
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const sci_fi_shows2 = [1, 2, 3, 4]
const result5 = sci_fi_shows2.map((name) => sci_fi_shows2)
console.log(result5)
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]
