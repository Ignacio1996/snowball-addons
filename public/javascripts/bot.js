var formNum = 0;

function addBotForm() {
    formNum = document.getElementsByClassName('botForm').length -1;
    var newBotForm = `
    <div class="botForm">
    <div class="botTalks">
        <img src="/images/bot.png" >
        <input  class="form-control  class="form-control botTalks${formNum}" style="display: block" type="text" value="Howdy! Im the bot${formNum}" name="bot[talk][${formNum}]" required>
        <button class="btn btn-primary" type="button" class="btn btn-primary" onclick="addTextClone(this)">V</button>
    </div>
    
    <br>

    <div class="userForm">
        <h5 class="student-input">Student Button 1</h5>
        <div class="student">
            <input  class="form-control student-input"style="display: block" type="text" value="Yes!"name="bot[student][decision][${formNum}]">
            <img class="student-input" style="margin: 0px" src="/images/user.png" >
        </div>
        <br>
        <div class="botAnswers">
            <h5>Bot Answers ${formNum+1}</h5>
            <input  class="form-control"style="display: block" type="text" value="Great! Lets move forward!${formNum+1}"  name="bot[student][answer][${formNum}][0]">
            <button class="btn btn-primary" type="button" onclick="addTextClone(this)">Bot Answer +</button>
        </div>
        <br>
        <button class="btn btn-primary" type="button" onclick="addStudentForm(this)">Student Decision +</button>
    
    </div>
    <br>
    </div>`;
    var currentForm = document.getElementsByClassName('botForm')[formNum ];

    currentForm.insertAdjacentHTML('afterend', newBotForm);

}

function addTextClone(element) {    
    var newBotText = element.previousElementSibling.cloneNode(true);
    element.parentNode.appendChild(newBotText);
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
            <input class="form-control" style="display: block" type="text" value="No" name="bot[student][decision][${formNum}]">
            <br>
            <div class="botAnswers">
                <h5>Bot Answers 1</h5>
                <input class="form-control" style="display: block" type="text" value="So sad! We will continue anyways"  name="bot[student][answer][${formNum}][${formCount.length +1}]">
                <button class="btn btn-primary" type="button" onclick="addTextClone(this)">Bot Answer +</button>
            </div>
            <br>
            <button class="btn btn-primary" type="button" onclick="addStudentForm(this)">Student Decision +</button>
        </div>
    </div>`
    element.parentNode.insertAdjacentHTML('afterend', newStudentForm);
    
}

