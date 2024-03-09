// OBJECTS
//declaring object by -> 1)Literal(Singelton obj is not made) 2)Constructor(Singleton obj is made)

//by constructor
const prod = new Object() //singleton

//by literals
const user1 = {
    fullName : "ABC",
    "age" : 20,
    location : "Delhi",
    email : "abc123@gmail.com",
    2 : 123,
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(user1)

/*
In arrays, we can't define keys(index)by ourself, it is 0,1,2,3...
But in objects, we can define both keys as well as values.
Also, by default the system processes the keys as strings
*/

//accessing value by keys
console.log(user1.email)
console.log(user1["email"])// accessing like an array

//Q- Declare a symbol and  add it inside the object as key value pairs and print it.
const id = Symbol('#abc')

const user2 = {
    identity : 123,
    [id] : '#abc',
    city : "gurgaon"
}
console.log(user2)

//changing values
user1.email = "xyz@gmail.com"
console.log(user1)

//lock the values so that nobody could change it
Object.freeze(user2)
user1.identity = "122@gmail.com"
console.log(user2)//no change in identity due to freeze()

//adding functions in objects
user1.greet = function() {
    console.log(`Hello ${this.fullName}`)//this keyword is used to reference same object
}
console.log(user1.greet)//function(anonymous) because here function's reference is returned, not the function
console.log(user1.greet())//Hello ABC
//undefined printed coz here 1 execution is automatically done


// OBJECTS PART-2

//object inside object
const prod1 = {
    name : {
        prodType : {
            type : "ballPen",
            brand : "jiffy"
        }
    }
}
console.log(prod1)

prod1.color = "blue"
prod1.isBought = true
prod1.rating = 4
console.log(prod1)

//acessing obj inside obj
console.log(prod1.name.prodType.brand)

//combining obj
const firstName = {
    1 : 't',
    2 : 'r',
    3 : 'i',
    4 : 'p',
    5 : 't',
    6 : 'i'
}

const lastName = {
    7 : 'b',
    8 : 'h',
    9 : 'a',
    10 : 't',
    11 : 'n',
    12 : 'a',
    13 : 'g',
    14 : 'a',
    15 : 'r'
}

const myFullName = Object.assign({},firstName,lastName)//target,source
console.log(myFullName)

const FullName = {...firstName,...lastName}//spread operator
console.log(FullName)


//array of objects
const pens = [
    {
        id : 1,
        color : "black"
    },
    {
        id : 2,
        color : "blue"
    },
    {
        id : 3,
        color : "red"
    },
    {
        id : 4,
        color : "green"
    },
]

console.log(pens[1].color)

console.log(Object.keys(prod1))//returns array of keys
console.log(Object.values(prod1))//returns array of values
console.log(Object.entries(prod1))//returns arr(key-value) inside arr(obj)

//to check whether a key exist
console.log(prod1.hasOwnProperty('rating'))