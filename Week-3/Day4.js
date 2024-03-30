//CREATING A NEW ELEMENT

//let's create a div
const div = document.createElement('div')
console.log(div); //<div></div>

div.className = 'divClass'
div.id = 'divId'

//to add other attributes
div.setAttribute('title','divTitle')
div.style.backgroundColor = 'green'
div.style.color = 'yellow'
div.style.padding = '10px'
div.style.borderRadius = '5px'
// div.innerHTML = 'A New Div Is created'

/*
For optimization sake, setAttribute() is preferred to set any attribute rather than changing it by dot simply
.attributeName approach override the values, it carry the values reference first and then set the new values
whereas setAttribute() directly make changes, 1 step is saved here

Similarly, innerText or innerHTML is not preferred to add a text as it is not well optimized way.
Following approach should be used to add a text.
 */

div.appendChild(document.createTextNode('A New Div Is created'))

// Now. last task is to display our created div on screen
document.body.appendChild(div)