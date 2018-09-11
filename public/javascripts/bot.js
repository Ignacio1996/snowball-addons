var formNum = 0;

function addBotForm() {
    formNum = document.getElementsByClassName('botForm').length;
    var newBotForm = `
    <div class="botForm">
    <div class="botText">
        <h5>Bot Talks ${formNum + 1}</h5>
        <input class="botText${formNum}" style="display: block" type="text" value="Bot conversation${formNum}" name="bot[talk][${formNum}]">
        <button type="button" onclick="addBotText(this)">Bot Text +</button>
    </div>
    
    <br>

    <div class="userForm">
        <h5>Student Button 1</h5>
        <input style="display: block" type="text" value="Good1"         name="bot[student][decision][${formNum}]">
        <br>
        <div class="botAnswers">
            <h5>Bot Answers ${formNum+1}</h5>
            <input style="display: block" type="text" value="${formNum+1}"  name="bot[student][answer][${formNum}][0]">
            <button type="button" onclick="addBotAnswer(this)">Bot Answer +</button>
        </div>
        <br>
        <button type="button" onclick="addStudentForm(this)">Student Decision +</button>
    
    </div>
    <br>
    </div>`;
    var currentForm = document.getElementsByClassName('botForm')[formNum - 1];

    currentForm.insertAdjacentHTML('afterend', newBotForm);

}

function addBotText(element) {
    console.log("form num:", formNum);
    
    var newBotText = `
        <input style="display: block" type="text" value="Bot ${formNum}" name="bot[talk][${formNum}]">`;
    element.parentNode.insertAdjacentHTML('beforeend', newBotText);

}

function addBotAnswer(element){
    console.log(element.parentNode);
    var newStudentAnswer = `
        <input style="display: block" type="text" value="Good Answer1" name="bot[student][answer][${formNum}][0]">`
    element.parentNode.insertAdjacentHTML('beforeend', newStudentAnswer);
}



function addStudentForm(element){  
    console.log(element.parentNode);
    var newStudentForm =`
    <div class="userForm">
        <h5>Student Button 1</h5>
        <input style="display: block" type="text" value="Good1"             name="bot[student][decision][${formNum}]">
        <br>
        <div class="botAnswers">
            <h5>Bot Answers 1</h5>
            <input style="display: block" type="text" value="Good Answer1"  name="bot[student][answer][${formNum}][0]">
            <button type="button" onclick="addBotAnswer(this)">Bot Answer +</button>
        </div>
        <br>
        <button type="button" onclick="addStudentForm(this)">Student Decision +</button>
    </div>`
    element.parentNode.insertAdjacentHTML('afterend', newStudentForm);
    
}