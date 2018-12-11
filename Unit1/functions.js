const noun1 = "heart"
const noun2 = "friends"
const noun3 = "pet"

console.log('typeof noun1 is...', typeof noun1); // expect "string", LOL

const madlib = `Be kind to your ${noun1}-footed ${noun2}
For a duck may be somebody\'s ${noun3},`;


console.log(madlib)

// within the () in getMadLib()
// we place as many ARGUMENTS as we want
// delimited by ,
function getMadLib(n1, n2, n3) {
    // in here, place the repeatable steps necessary
    // to perform this "recipe"

    const madlib = `Be kind to your ${n1}-footed ${n2}
For a duck may be somebody\'s ${n3},`;

    return madlib;
}

console.log(typeof getMadLib)
const madlib1 = getMadLib("aaaa", "bbbb", "cccc")
console.log(madlib1)

const madlib2 = getMadLib("dddd", "eeee", "ffff")
console.log(madlib2)

