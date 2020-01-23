// ----------------------------------------------------------
// OBJECT FREEZE EXAMPLE from Video
// ----------------------------------------------------------
const current_show = {
    title: 'Dr. Who',
    seasons: 11,
    current_season: 4
}
// as a const, we can do this:
current_show.current_season = 5
// but if we freeze the object
Object.freeze(current_show);
current_show.current_season = 5;
// Throws an error and current_season remains unchanged

// OBJECT FREEZE EXERCISE
// ----------------------------------------------------------
// Directions: Create your own object and freeze it!
const dude = {
    age: 29,
    job: 'Software Engineer',
    pay: '120k'
}
console.log("dude.pay = ", dude.pay);
dude.pay = '150k';
console.log("dude.pay = ", dude.pay);
Object.freeze(dude);
dude.pay = '180k';
console.log("dude.pay = ", dude.pay);