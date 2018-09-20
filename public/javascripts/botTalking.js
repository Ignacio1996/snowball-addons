var interactionNumber = 0;

function updateScroll(){
    var element = document.getElementById('scroller');
    element.scrollTop = element.scrollHeight;
}

// Button pressed displays answers
// Also shows the next interaction
// Button gets disabled after pressing
// Both buttons should be disabled, one hidden
function displayAnswers(button) { //displays answers and next interaction
    // var nextElement = button.parentNode.nextElementSibling.children;
    // Object.keys(nextElement).forEach((key) => {
    //     nextElement[key].style.display = "block";

    // });
    interactionNumber++;
    var parent = button.parentNode.parentNode.parentNode;
    var interactions = document.getElementsByClassName(parent.className);
    // Displays next interaction
    button.disabled = true;

    // Finds the buttons in the interaction
    var buttonsInChoice = button.parentNode.parentNode.getElementsByTagName("button");
    for (let eachButton = 0; eachButton < buttonsInChoice.length; eachButton++) {
        if (!buttonsInChoice[eachButton].disabled) {
            //Hides the rest of the buttons
            buttonsInChoice[eachButton].style.display = "none";
        }
    }

    //display next interaction
    setTimeout(()=>{
        interactions[interactionNumber].style.display = "block";
    }, 2000);

    //ANSWERS execution
    var botTextAnswers = button.parentNode.nextElementSibling.children;
    console.log(botTextAnswers);
    Object.keys(botTextAnswers).forEach((key, n)=>{
        setTimeout(()=>{
            botTextAnswers[key].style.display = "inline-block";
            updateScroll();
        }, 800 * n);

    })
    
    //this long variable accesses what the bot has to say first: 
    //Displays next botText in order
    var botDiv = interactions[interactionNumber].children[0].children; // current div class="bot"
    //delay button execution
    setTimeout(()=>{
        Object.keys(botDiv).forEach((key, n) => {
            setTimeout(() => {
                botDiv[key].style.display = "";
                updateScroll();
            }, 1000 * n);
            
        });
    }, 1500);
}



//Displays first element of array of interactions
function displayFirstElement() {
    //first interaction
    var interactions = document.getElementsByClassName('interaction')[0];
    interactions.style.display = "";
    var pChildren = interactions.children[0].children;
    Object.keys(pChildren).forEach((key, n)=>{
        setTimeout(() => {            
            pChildren[key].style.display = "";
        }, 1000 * n);

    });
}