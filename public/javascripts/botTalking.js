var interactionNumber = 0;


// Button pressed displays answers
// Also shows the next interaction
// Button gets disabled after pressing
// Both buttons should be disabled
function displayAnswers(button) {  //displays answers and next interaction
    var nextElement = button.parentNode.nextElementSibling.children;
    Object.keys(nextElement).forEach((key) => {
        nextElement[key].style.display = "block";

    });
    interactionNumber++;
    var parent = button.parentNode.parentNode.parentNode;
    var interactions = document.getElementsByClassName(parent.className);
    // Displays next interaction
    button.disabled = true;
    // Finds the buttons in the interaction
    var buttonsInChoice = button.parentNode.parentNode.getElementsByTagName("button");
    for (let eachButton = 0; eachButton < buttonsInChoice.length; eachButton++) {
        console.log(buttonsInChoice[eachButton]);
        if (!buttonsInChoice[eachButton].disabled) {
            buttonsInChoice[eachButton].style.display = "none";
        }
    }
    
    
    setTimeout(() => {
        interactions[interactionNumber].style.display = "block";
        console.log(interactions[interactionNumber]);
        
    }, 600)


}



//Displays first element of array of interactions
function displayFirstElement() {
    var interactions = document.getElementsByClassName('interaction');
    interactions[0].style.display = "";
}

