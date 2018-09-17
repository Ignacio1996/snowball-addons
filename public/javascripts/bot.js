var formNum = 0;

function addBotForm() {
    formNum = document.getElementsByClassName('botForm').length -1;
    var newBotForm = `
    <div class="botForm">
    <div class="botTalks">
    <img class="bot-img" src="/images/bot.png" >
        <input  class="form-control botTalks${formNum}" type="text" value="Howdy! Im the bot${formNum}" name="bot[talk][${formNum}]" required>
        <input  class="form-control botTalks${formNum}" type="text" value="Howdy! Im the bot${formNum}" name="bot[talk][${formNum}]" required>
        <button class="btn btn-primary" type="button" class="btn btn-primary" onclick="addTextClone(this)">+</button>
        </div>
    
        <br>

    <div class="userForm">
        <div class="student">
            <img class="student-img" src="/images/user.png" >
            <input  class="form-control student-input" style="display: block" type="text" value="Yes!"name="bot[student][decision][${formNum}]">
        </div>
        <br>
        <div class="botAnswers">
            <img class="bot-img" src="/images/bot.png" >
            <input  class="form-control"style="display: block" type="text" value="Great! Lets move forward!${formNum+1}"  name="bot[student][answer][${formNum}][0]">
            <input  class="form-control"style="display: block" type="text" value="Great! Lets move forward!${formNum+1}"  name="bot[student][answer][${formNum}][0]">
            <button class="btn btn-primary" type="button" onclick="addTextClone(this)">+</button>
        </div>
        <br>
        <button class="btn btn-primary ml-auto" type="button" onclick="addStudentForm(this)">Student Decision +</button>
    
    </div>
    <br>
    </div>`;
    var currentForm = document.getElementsByClassName('botForm')[formNum ];
    currentForm.insertAdjacentHTML('afterend', newBotForm);

}

function addTextClone(element) {    
    var newBotText = element.previousElementSibling.cloneNode(true);
    newBotText.style.display = "block";
    newBotText.value = "";
    element.parentNode.insertBefore(newBotText, element.nextSibling);
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
            <img class="student-img" src="/images/user.png" >
            <input class="form-control student-input" type="text" value="No" name="bot[student][decision][${formNum}]">
            </div>
            <br>
            <div class="botAnswers">
                <img src="/images/bot.png" >
                <input class="form-control" style="display: block" type="text" value="So sad! We will continue anyways"  name="bot[student][answer][${formNum}][${formCount.length +1}]">
                <input class="form-control" style="display: block" type="text" value="So sad! We will continue anyways"  name="bot[student][answer][${formNum}][${formCount.length +1}]">
                <button class="btn btn-primary" type="button" onclick="addTextClone(this)">+</button>
            </div>
            <br>
            <button class="btn btn-primary" type="button" onclick="addStudentForm(this)">Student Decision +</button>
        </div>
    </div>`
    element.parentNode.insertAdjacentHTML('afterend', newStudentForm);
    
}




function updateScroll(){
    var element = document.getElementById('scroller');
    element.scrollTop = element.scrollHeight;
}

setInterval(updateScroll, 500);