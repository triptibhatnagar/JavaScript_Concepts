const parent = document.querySelector('.parent')
console.log(parent);

//FROM PARENT TO CHILD
console.log(parent.children); // O/p in form of HTML Collection(like an array, but not an array)
console.log(parent.children[1]); //<div class="day">Tuesday</div>
console.log(parent.children[4].innerHTML); //Friday

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); 
}
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday

parent.children[6].style.backgroundColor = 'aqua'
parent.children[6].style.color = 'black'

//other properties
console.log(parent.firstElementChild) //<div class="day">Monday</div>
console.log(parent.lastElementChild); //<div class="day" style="background-color: aqua; color: black;">Sunday</div>

//FROM CHILD TO PARENT 
let day1 = document.querySelector('.day')
console.log(day1);
console.log(day1.parentElement);

//FROM SIBLING TO SIBLING
console.log(day1.nextElementSibling.nextElementSibling);

//Nodes
console.log("Nodes : ",parent.childNodes);// NodeList(15)
/*
Why 15 even if there are 7 nodes?
    because when we press enter to move on next line, there occurs a line break, and it is also counted as a node.
What if there are more than 1 linebreaks?
    no change in nodelist, nodes will remain 15, because line break is counted once.
What if we add a comment in between?
    change in nodelist, nodes will be 17 now, due to a linebreak and a comment.
*/