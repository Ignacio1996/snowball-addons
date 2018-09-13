var interactionNumber = 0;


// Button pressed displays answers
// Also shows the next interaction
// Button gets disabled after pressing
// Both buttons should be disabled
function displayAnswers(button) {
    var nextElement = button.parentNode.nextElementSibling.children;
    Object.keys(nextElement).forEach((key) => {
        nextElement[key].style.display = "block";

    });
    interactionNumber++;
    var parent = button.parentNode.parentNode;
    var interactions = document.getElementsByClassName(parent.className);
    // Displays next interaction
    button.disabled = true;
    setTimeout(() => {
        interactions[interactionNumber].style.display = "block";
    }, 600)


}



//Displays first element of array of interactions
function displayFirstElement() {
    var interactions = document.getElementsByClassName('interaction');
    interactions[0].style.display = "";
}


function displayBotAnimation() {

}