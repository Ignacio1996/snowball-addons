var interactionNumber = 0;


function displayAnswers(button) {
    var nextElement = button.parentNode.nextElementSibling.children;
    Object.keys(nextElement).forEach((key) => {
        nextElement[key].style.display = "block";
        
    });
    interactionNumber++;
    var parent = button.parentNode.parentNode;
    var interactions = document.getElementsByClassName(parent.className);
    interactions[interactionNumber].style.display = "block";
    button.disabled = true;
    
}



//Displays first element of array of interactions
function displayFirstElement(){
    var interactions = document.getElementsByClassName('interaction');
    interactions[0].style.display = "";
}

