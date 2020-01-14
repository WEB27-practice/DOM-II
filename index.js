/*Objectives:
- Explain what events are in the browser window, and how event listeners can listen for those events.
- add event listeners and event handlers to elements.
- recognize event propagation and the method used to prevent it.
*/

// Step 1: Review Events

/* psuedo code */
// the element  the event  the code we want to run

// mouse events 
const catImage = document.querySelector('.card-img-top');
console.log(catImage);

catImage.addEventListener('mouseenter', () => {
    catImage.style.transform = "scale(1.2)";
    catImage.style.transition = "transform 0.3s";
})

catImage.addEventListener('mouseleave', () => {
    catImage.style.transform = "scale(1)";
    catImage.style.transition = "transform 0.3s";
})
// click event 

// double click event

// resize event


// step 2: Stop propogation

// step 3: prevent default action




// extra scroll event
