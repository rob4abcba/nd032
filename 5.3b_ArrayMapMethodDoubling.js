const nums = [1, 2, 3, 4, 5]
// Internal callback
// ----------------------------------------------------------------------
const doubles = nums.map(x => x * 2)
console.log("doubles = ", doubles)
// expected output: Array [2, 4, 6, 8, 10]

// External callback
// ----------------------------------------------------------------------
const doubler = function(x) {
    return x * 2
}
// WRONG
// const doubles2 = nums.map(x => {
//     return doubler
// })
// RIGHT
const doubles2 = nums.map(doubler)

console.log("doubles2 = ", doubles2)
// expected output: Array [2, 4, 6, 8, 10]

// TRIPLER
const triplerFunc = function(x) {
    return x * 3
}
const triplerMap = nums.map(x => {
    return x * 3
})
console.log("triplerMap = ", triplerMap)
// expected output: Array [ 3, 6, 9, 12, 15 ]