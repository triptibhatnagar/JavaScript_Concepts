// HIGH ORDER ARRAY LOOPS
//FOR OF LOOP
/*
["","",""] -> arrays of strings
[{},{},{}] -> arrays of objects(e.g- database)
*/

//array
const nums = [10,9,8,7,6]
for (const num of nums) {
    console.log(num);
}

//string
const strs = "Tripti Bhatnagar"
for(const str of strs) {
    console.log(`${str}`);
}

//map
/*
Map holds key-value pairs and remembers original insertion order of the keys , it has unique key-value pairs
*/
const map = new Map()
map.set("js","JavaScript")
map.set("py","Python")
map.set("java","Java")

console.log(map);

//loop on map
for (const key of map) {
    console.log(key);//key-value pairs are printed as form of different arrays
}

//hence destructuring of array is done
for(const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}

//object
const obj = {
    game1 : "SubwaySurf",
    game2 : "CandyCrush",
    game3 : "TempleRun"
}

// for (const key of obj) {
//     console.log(key);//TypeError: obj is not iterable
// }

// => for of loop don't work on objects

//FOR IN LOOP

//objects
for (const key in obj) {
    console.log(key);//it would print the keys
}

//to obtain values of the same object
for(const key in obj) {
    console.log(obj[key]);//it would print the values
}

//array
const colors = ["red","blue",'yellow','green']
for(const color in colors) {
    console.log(color);//it would print the numbered indices i.e. keys of arrays
}

//map
for(const key in map) {
    console.log(key);//nothing is printed => Map is not iterable
}

//FOR EACH LOOP
const items = ["pizza","burger","momos","sandwich","noodles"]
items.forEach(function(item) {
    console.log(item);//elements of array are passed as parameters inside function
})

items.forEach((item) => {//arrow fxn
    console.log("FoodItem :",item)
})

//In above case, we directly pass the function
//But we can make function before and pass its *reference* (not execeution) inside forEach method

function printMsg(item) {
    console.log(`Your ${item} is ready!`)
}
items.forEach(printMsg)

//forEach has access of not only the item , but also of index and arraylist too

//this is a format of database - array of objects
const progLang = [
    {
        lang : "Javascript",
        ext : ".js"
    },
    {
        lang : "Python",
        ext : ".py"
    },
    {
        lang : "Java",
        ext : ".java"
    }
]

progLang.forEach((item) => {
    console.log(`The extension of ${item.lang} is ${item.ext}`);
})