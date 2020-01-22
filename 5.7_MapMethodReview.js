// ----------------------------------------------------------
// LEVEL 1 EXERCISES
// ----------------------------------------------------------
// 1.1 Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const end = start.map(x => abs(x - 11))
console.log(end)
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 1.2 Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

const result = shipMates.map(arr => arr.reverse().join(': '))
console.log(result)

// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 1.3 Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

const result = awayTeam.map((name, i) => `${name}: ${i % 2 === 0 ? 'even' : 'odd'}`)
console.log(result)
// expected output: Array: ["Picard: even", "Riker: odd", etc...]


// ----------------------------------------------------------
// LEVEL 2 EXERCISES
// ----------------------------------------------------------
// VIDEO EXAMPLES
// More we can do
const nums = [1, 2, 3, 4, 5]

const nums2 = nums.map(int, index, array => {
    console.log(int)
    console.log(index)
    console.log(array)
    return int
})

// ----------------------------------------------------------
// 2.2 Create a multidimensional array of each item and its index in the original Array

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 2.3 for each item in this array, create a multidimensional array containing the entire original array

const sci_fi_shows = [1, 2, 3, 4]

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]