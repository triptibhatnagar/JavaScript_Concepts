//TASK - Click on img and the img is removed
/*
document.querySelector('#images').addEventListener('click',(e) => {
    console.log(e);
    console.log(e.target);//img
    console.log(e.target.parentNode);//li

    let removeIt = e.target.parentNode
    removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
})
*/


//By chance if we click on li, whole ul will be removed
//hence we will do some strict checks
document.querySelector('#images').addEventListener('click',(e) => {
    console.log(e.target);//img
    console.log(e.target.parentNode);//li
    console.log(e.target.tagName);
    
    if(e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})