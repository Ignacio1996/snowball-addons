function displayAnswers(button) {
    var nextElement = button.parentNode.nextElementSibling.children;
    Object.keys(nextElement).forEach((key) => {
        nextElement[key].style.display = "block";
        console.log(nextElement[key].style.display);
    });
}