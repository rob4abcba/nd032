// MC: For IE browser, need to create own flat() function
function flat(input, depth = 1, stack = [])
{
    for (let item of input)
    {
        if (item instanceof Array && depth > 0)
        {
            flat(item, depth - 1, stack);
        }
        else {
            stack.push(item);
        }
    }
    return stack;
}
if (!Array.prototype.flat)
{
    Object.defineProperty(Array.prototype, 'flat',
    {
        value: function(depth = 1, stack = [])
        {
            for (let item of this)
            {
                if (item instanceof Array && depth > 0)
                {
                    item.flat(depth - 1, stack);
                }
                else {
                    stack.push(item);
                }
            }
            return stack;
        }
    });
}

// ----------------------------------------------------------
// FLAT EXERCISES
// ----------------------------------------------------------
// 1. For the video
var nested_arr = [1, 2, [3, 4, [5, 6]]];
nested_arr.flat(1);
// [1, 2, 3, 4, [5, 6]]
console.log("nested_arr.flat(1) = ", nested_arr.flat(1))
var more_nested = [1, 2, [3, 4, [5, 6]]];
more_nested.flat(2);
// [1, 2, 3, 4, 5, 6]
console.log("more_nested.flat(2) = ", more_nested.flat(2))

// ----------------------------------------------------------
// Exercises
// 2. This short list of some marvel characters is abitrarily nested. 
// Experiment with the effect of flattening to various depths.
const characters = [
    ['Starlord', 'Gamora', 'Groot'],
    ['Dr. Strange', ['Captain America', 'Bucky Barnes'], ['Thor', 'Hulk', ['Loki']], 'Thanos'],
    ['Iron Man', 'Ultron'],
    ['Spider Man', ['Venom']],
    ['Professor X', 'Wolverine', 'Quicksilver', ['Magneto']]
]
console.log("characters = ", characters)
console.log("characters.flat() = ", characters.flat())
console.log("characters.flat(1) = ", characters.flat(1))
console.log("characters.flat(2) = ", characters.flat(2))

// ----------------------------------------------------------
// FIND AND INCLUDES EXERCISES
// ----------------------------------------------------------
// For the video
// ----------------------------------------------------------
// FIND
const best_bars1 = [
    'Mos Eisley Cantina',
    'Clark`s Bar',
    '10 Forward',
    'The Restaurant at the End of the Universe',
    'The Prancing Pony',
    '10 Forward',
]
const test1a = best_bars1.find(x => x === 'Quark`s Bar')
const test1b = best_bars1.find(x => x === '10 Forward')
console.log(" ")
console.log("best_bars1 = ", best_bars1)
console.log("best_bars1.find(x => x === 'Clark`s Bar') = ", best_bars1.find(x => x === 'Clark`s Bar'))
console.log("best_bars1.find(x => x === 'Quark`s Bar') = ", test1a)
console.log("best_bars1.find(x => x === '10 Forward') = ", test1b)
console.log("best_bars1.find(x => x === '10 Backward') = ", best_bars1.find(x => x === '10 Backward'))
console.log("best_bars1.find(x => x === 'The Prancing Pony') = ", best_bars1.find(x => x === 'The Prancing Pony'))

// This shows that if no value in the array is found to meet the criteria, `undefined` will be the result. 
// Also, if there are multiple items that match the criteria, it does not change the output.
// ----------------------------------------------------------
// INCLUDES
const best_bars2 = [
    'Mos Eisley Cantina',
    'Clark`s Bar',
    '10 Forward',
    'The Restaurant at the End of the Universe',
    'The Prancing Pony',
    '10 Forward',
]
// console.log(" ")
// console.log("best_bars2 = ", best_bars2)
console.log("best_bars2.includes('Clark`s Bar') = ", best_bars2.includes('Clark`s Bar'))
console.log("best_bars2.includes('Quark`s Bar') = ", best_bars2.includes('Quark`s Bar') )

// You can see that includes only returns a true or false value. 
// Includes can also be used on strings
console.log("best_bars2.includes('The Prancing Ponies') = ", best_bars2.includes('The Prancing Ponies'))
console.log("best_bars2.includes('The Prancing Pony') = ", best_bars2.includes('The Prancing Pony'))

// ----------------------------------------------------------
// Exercises
// ----------------------------------------------------------
// Best use cases for FIND are when you want to cast a wider net, 
// because you get to create your own criteria that can be either very specific or more generic.
// 1. Determine whether any of the following have a value that contains the characters 'ABC'
const ids = [
    'ADHKE',
    'ANFKM',
    'QIMVU',
    'PQMFU',
    'ABCKO',
    'IUABC'
]

// ----------------------------------------------------------
// 2. It best to use INCLUDES when what the value is does not matter, simply its presence. 
// Imagine the scenario that you are need to check a user's id against a list of admin id's.
const currentUserId = '29nv283bfc0szn16723'
const admins = [
    '02398cn7syap0dmbnv0',
    '2389sakvjhw8e7f09fv',
    '09mxvb82kzjd6v1sfdg',
    '9a76zxmsdnv1u622345',
    '29nv283bfc0szn16723',
    '029834zmnv9jhgfu2ab',
    '12mnz09v87bas78fb12',
    '098Xc8x76m3nb4aposi'
]

// ----------------------------------------------------------
// 3. Checking between lists. Another thing that you might need to do in real life is check items between two arrays. Check if array B has any values that are also in array A. 
// This becomes especially helpful when the values are hard to distinguish visually
const A = [
    '02398cn7syap0dmbnv0',
    '2389sakvjhw8e7f09fv',
    '09mxvb82kzjd6v1sfdg',
    '9a76zxmsdnv1u622345',
    '29nv283bfc0szn16723',
    '029834zmnv9jhgfu2ab',
    '12mnz09v87bas78fb12',
    '098Xc8x76m3nb4aposi'
]
const B = [
    '13xnse8aanv87Hdnfv8',
    '2389sakvjhw8e7f09fv',
    '12mn0vnZkadfh237LPd',
    '1209MNBd8723nvkwejs',
    '298374naskdj273ubsl',
    '098LKJnsvijevkwejf6'
]