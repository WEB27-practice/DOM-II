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

// example of how selecting multiple elements doesn't work with this pattern
// const cardTitles = document.querySelectorAll(".card-title")

// cardTitles.addEventListener("click", () => {
//     carTitles.style.color = "hotpink";
// })

// double click event
const changeImg = document.querySelector('.logo');
changeImg.addEventListener("dblclick", () => {
  changeImg.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
})
// resize event
const dogsRule = document.querySelector(".card-img-top");

window.addEventListener("resize", () => {
  dogsRule.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
});

console.log(window);

// step 2: Stop propogation

// step 3: prevent default action




// extra scroll event
