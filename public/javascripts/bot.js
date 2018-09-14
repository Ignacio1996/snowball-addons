var formNum = 0;

function addBotForm() {
    formNum = document.getElementsByClassName('botForm').length -1;
    var newBotForm = `
    <div class="botForm">
    <div class="botText">
        <h5>Bot Talks ${formNum }</h5>
        <input class="botText${formNum}" style="display: block" type="text" value="Howdy! Im the bot${formNum}" name="bot[talk][${formNum}]">
        <button type="button" onclick="addBotText(this)">Bot Text +</button>
    </div>
    
    <br>

    <div class="userForm">
        <h5 >Student Button 1</h5>
        <input style="display: block" type="text" value="Yes!"name="bot[student][decision][${formNum}]">
        <br>
        <div class="botAnswers">
            <h5>Bot Answers ${formNum+1}</h5>
            <input style="display: block" type="text" value="Great! Lets move forward!${formNum+1}"  name="bot[student][answer][${formNum}][0]">
            <button type="button" onclick="addBotAnswer(this)">Bot Answer +</button>
        </div>
        <br>
        <button type="button" onclick="addStudentForm(this)">Student Decision +</button>
    
    </div>
    <br>
    </div>`;
    var currentForm = document.getElementsByClassName('botForm')[formNum ];

    currentForm.insertAdjacentHTML('afterend', newBotForm);

}

function addBotText(element) {
    console.log("form num:", formNum);
    
    var newBotText = `
        <input style="display: block" type="text" value="Ready to get started? ${formNum}" name="bot[talk][${formNum}]">`;
    element.parentNode.insertAdjacentHTML('beforeend', newBotText);

}

function addBotAnswer(element){
    console.log(element.parentNode);
    var className = "userFormCount" + formNum;
    var formCount = document.getElementsByClassName(className);
    var newStudentAnswer = `
        <input style="display: block" type="text" value="So sad!" name="bot[student][answer][${formNum}][${formCount.length }]">`
    element.parentNode.insertAdjacentHTML('beforeend', newStudentAnswer);
}



function addStudentForm(element){  
    console.log(element.parentNode);
    var className = "userFormCount" + formNum;
    var formCount = document.getElementsByClassName(className);
    console.log(formCount.length);
    

    var newStudentForm =`
    <div class="userForm">
        <div class="userFormCount${formNum}"
            <h5>Student Button 1</h5>
            <input style="display: block" type="text" value="No" name="bot[student][decision][${formNum}]">
            <br>
            <div class="botAnswers">
                <h5>Bot Answers 1</h5>
                <input style="display: block" type="text" value="So sad! We will continue anyways"  name="bot[student][answer][${formNum}][${formCount.length +1}]">
                <button type="button" onclick="addBotAnswer(this)">Bot Answer +</button>
            </div>
            <br>
            <button type="button" onclick="addStudentForm(this)">Student Decision +</button>
        </div>
    </div>`
    element.parentNode.insertAdjacentHTML('afterend', newStudentForm);
    
}

