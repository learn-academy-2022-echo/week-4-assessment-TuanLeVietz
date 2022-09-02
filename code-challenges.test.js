// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test");
// const { describe } = require("yargs");

// const { it } = require("node:test");
// const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Pseudocode: We create a code by using describe/it method. We define 2 constants named expected1 and expected2 and assign them to the expected outputs arrays. Since the output could have different outcomes we use expect.arrayContaining to make sure the output has the same values

describe("shuffleArray", () => {
    const expected1 = ["yellow", "blue", "pink", "green"];
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
    it("takes the initial array, removes the first string then shuffles the new array", () => {
    expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected1))
    expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.arrayContaining(expected2));
    });
});


// b) Create the function that makes the test pass.

// declare a function named shuffleArray with a parameter of array
//Inside the function we assign arr to array. Using build in methods we use .shift() to remove the first element of the array, using .sort() we shuffle the new array.

const shuffleArray = (array) => {
    let arr = array
    arr.shift()
    arr.sort(() => Math.random() - 0.5)
    return arr
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

//Pseudocode: We invoke the method describe/it with the argument netVotes.
//In English we describe what the function does and we provide it with an argument for the function to call on. Using toEqual we chain it together and expect it to equal the expected output. 

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("netVotes", () => {
    it("returns the net total of votes", () => {
        expect(netVotes(votes1.upVotes, votes1.downVotes)).toEqual(11)
        expect(netVotes(votes2.upVotes, votes2.downVotes)).toEqual(-31)
    })
})

// // b) Create the function that makes the test pass.



const netVotes = (upvotes, downvotes) => {
    let a = upvotes    
    let b = downvotes
    return a - b    
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

//Pseudocode:  We invoke the method describe/it with the argument noDupli.
//We describe what the function does and we provide it with an argument for the function to call on. Since were combining two arrays we are gonna set the argument to the first and second array. Using toEqual we chain it together and expect it to equal the expected array. 


describe("noDupli", () => {
    it("combines both arrays and returns one array with no duplicates", () => 
    expect(noDupli(dataArray1,dataArray2)).toEqual["array", "object", "number", "string", "Boolean", "null", "undefined"])
})

// // b) Create the function that makes the test pass.
//Pseudocode: We create a function named noDupli. Inside the function we declare an array called dataArray3. Using the spread operator we pass in the 2 data arrays and we combine them using the set() method. This way we can combine both arrays and output the values in the new array with no duplicates.

const noDupli = () => {
    let dataArray3 = [...new Set([...dataArray1, ...dataArray2])]
    return dataArray3
}