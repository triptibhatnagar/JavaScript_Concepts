//let's make a function to add <li> and calling it, rather than writing code all over again

function addLang(langName) {
    let liLang = document.createElement('li')
    liLang.innerHTML = `${langName}`
    document.querySelector('.lang').appendChild(liLang)
}

addLang('Python')
addLang('Java')

// This is not an optimized approach

//optimized
function optApp(langName) {
    let liLang = document.createElement('li')
    liLang.appendChild(document.createTextNode(langName))
    document.querySelector('.lang').appendChild(liLang)
}
optApp('TypeScript')

// EDIT VALUES

//Approach-1
let selectLang = document.querySelector('li:nth-child(2)')
selectLang.innerHTML = 'C'

//Approach-2
const newLi = document.createElement('li')
newLi.textContent = 'C++'
selectLang.replaceWith(newLi)

//Approach-3
let firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TypeGo</li>'

// REMOVE
const lastLang = document.querySelector('li:last-child')
lastLang.remove()