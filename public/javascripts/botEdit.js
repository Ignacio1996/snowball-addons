var formNum;

function updateScroll(){
    var element = document.getElementById('scroller');
    element.scrollTop = element.scrollHeight;
}

function addBotForm() {
    formNum = document.getElementsByClassName('botForm').length;
    var newBotForm = `
    <div class="botForm">
    <button class="btn btn-danger" onclick="removeParent(this)">X</button>
        <div class="botTalks">
            <input  class="form-control botTalks${formNum}" type="text" style="display: inline" value="Hey! Im the bot${formNum}" name="bot[talk][${formNum}]" required>
            <button class="btn btn-primary" type="button" class="btn btn-primary" onclick="addTextClone(this)">+</button>
        </div>
        <br>

        <div class="userForm">
            <div class="student">
            <input  class="form-control student-input" style="display: inline" type="text" value="Yes!"name="bot[student][decision][${formNum}]">
            </div>
            <br>
            <div class="botAnswers">
                <input  class="form-control"style="display: inline" type="text" value="Great! Lets move forward!${formNum+1}"  name="bot[student][answer][${formNum}][0]">
                <button class="btn btn-primary" type="button" onclick="addTextClone(this)">+</button>
            </div>
            <br>
            <button class="btn btn-primary ml-auto" type="button" onclick="addStudentForm(this)">Student Decision +</button>

        </div>
    <br>
    </div>`;
    var currentForm = document.getElementsByClassName('botForm')[formNum-1];
    currentForm.insertAdjacentHTML('afterend', newBotForm);

}

function removeParent(el){
  el.parentNode.remove();
}

function removeInputContainer(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function addTextClone(element) {
    //Create container that can be removed at once when the remove button is clicked
    var newInputContainer = document.createElement('div');
    var newBotText = element.previousElementSibling.cloneNode(true);

    //Create remove button for each input
    var removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger');
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', removeInputContainer);
    removeButton.textContent = "-";

    newBotText.style.display = "inline";
    newBotText.value = "";

    newInputContainer.classList.add('addedText');

    newInputContainer.appendChild(newBotText);
    newInputContainer.appendChild(removeButton);
    element.parentNode.appendChild(newInputContainer);
}



function addStudentForm(element){
    console.log(element.parentNode);
    var className = "userFormCount" + formNum;
    var formCount = document.getElementsByClassName(className);
    console.log(formCount.length);


    var newStudentForm =`
    <div class="userForm">
        <div class="userFormCount${formNum} student"
            <div class="student">
            <input class="form-control student-input" type="text" value="No" name="bot[student][decision][${formNum}]">
            </div>
            <br>
            <div class="botAnswers">
                <input class="form-control" style="display: inline" type="text" value="So sad!"  name="bot[student][answer][${formNum}][${formCount.length +1}]">
                <button class="btn btn-primary" type="button" onclick="addTextClone(this)">+</button>
            </div>
            <br>
            <button class="btn btn-primary" type="button" onclick="addStudentForm(this)">Student Decision +</button>
        </div>
    </div>`
    element.parentNode.insertAdjacentHTML('afterend', newStudentForm);

}
