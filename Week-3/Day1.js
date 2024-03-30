// DOM treats an HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.

console.log(window)
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(window.document);
console.log(document);
//whole HTML document will appear

console.dir(document)
//to see the same result as in window's document

console.log(document.baseURI);//returns the absolute base URL of the document containing the node

console.log(document.links);//obtained in the form of HTML collection, not array, but it can be converted to array
console.log(document.links[1]);//HTML Collection is like an array, so a link is accessed by giving the index

//how to select an element
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// querySelector
// querySelectorAll
// etc...

console.log(document.getElementById("para1"))
console.log(document.getElementsByTagName('a')); //HTML Collection
console.log(document.getElementsByClassName('heading')); //HTML Collection

console.log(document.getElementById("para1").innerHTML)

let head1 = document.getElementById("title");
console.log(head1);
console.log(head1.id); //title
console.log(head1.class); //undefined because the document understand the class as className
console.log(head1.className); //heading

// console.log(head1.getAttribute()); //error beacuse 1 argument is required
console.log(head1.getAttribute('id')); //title
console.log(head1.getAttribute('class')); //heading
//In this method, we are passing the keys and getting the values

head1.setAttribute('class','contentHead')
console.log(head1.getAttribute("class"))
head1.setAttribute('class','heading contentHead')
console.log(head1.getAttribute("class"))

head1.style.backgroundColor = 'aqua'
head1.style.color = 'blue'
head1.style.textAlign = 'center'
head1.style.borderRadius = '7px'

//how to get content

console.log(document.getElementById("para1").textContent);//give whole text
console.log(document.getElementById("para1").innerHTML);//give visible text on screen
console.log(document.getElementById("para1").innerText);//give whole text including tags

//query selector - select the first occuring element only
console.log(document.querySelector('h2'))
console.log(document.querySelector('.heading'));
console.log(document.querySelector('#content1'));
console.log(document.querySelector('input[type="password"]'));
console.log(document.querySelector('p :first-child'));

let myUl = document.querySelector('ul')
let li1 = myUl.querySelector('li')

li1.style.color = 'red'
li1.style.display = 'inline'
li1.style.backgroundColor = 'black'
li1.style.padding = '1px'
li1.style.marginBottom = '2px'
li1.innerText = 'Special Offer Item'