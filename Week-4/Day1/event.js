// JS is a sequentially run language but, 
// browser events are invoked on some activity, they will not run sequentially

//1st approach : 'onclick' event directly injected in HTML
// But this approach is not good because when application will scale, there will be some problem.

//2nd approach
document.getElementById('spring').onclick = function() {
    alert('spring season clicked!')
}

//3rd approach
document.getElementById('spring').addEventListener('click',()=>{
    alert('spring season clicked again!')
},false)

//4th approach - attachEvent()
//used in early times when running applications was very difficult on Internet Explorer

//5th approach - .on [JQuery]


//EVENT OBJECT
document.getElementById('spring').addEventListener('click',(e)=>{
    console.log(e);
},false) //PointerEvent

//Different types of events : Browser and environment events

//EVENT PROPAGATION
document.getElementById('spring').addEventListener('click',(e)=>{
    console.log(e);
},false)
document.getElementById('spring').addEventListener('click',(e)=>{
    console.log(e);
},true)

//There seems no difference while execeuting the above two.

//Event propagation has two context - Event Bubbling (false) and Event Capturing (true)

//Event Bubbling (script tracking elements from inside to outside as bubble goes from bottom to top)
document.getElementById('images').addEventListener('click',(e)=>{
    console.log("Clicked inside the ul");
},false)
document.getElementById('autumn').addEventListener('click',(e)=>{
    console.log("Autumn season clicked");
},false)

//Autumn season clicked
//Clicked inside the ul

//Event Capturing (goes from top to bottom)
document.getElementById('images').addEventListener('click',(e)=>{
    console.log("Clicked inside the ul");
},true)
document.getElementById('autumn').addEventListener('click',(e)=>{
    console.log("Autumn season clicked");
},true)

//Clicked inside the ul
//Autumn season clicked

//Using stopPropagation() - to stop bubbling
document.getElementById('images').addEventListener('click',(e)=>{
    console.log("Clicked inside the ul");
},false)
document.getElementById('autumn').addEventListener('click',(e)=>{
    console.log("Autumn season clicked");
    e.stopPropagation()
},false)

//Autumn season clicked

//Using preventDefault() - to stop the default action
document.getElementById('link').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("Google clicked");
    e.stopPropagation()
},false)