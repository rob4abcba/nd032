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