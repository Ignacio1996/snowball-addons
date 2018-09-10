var formNum;

function addBotForm(){
    formNum = document.getElementsByClassName('botForm').length;
    var newBotForm = `
    <div class="botForm">
    <div class="botText">
    <h5>Bot Talks1</h5>
    <input class="botText${formNum}" style="display: block" type="text" value="Bot conversation" name="bot[talk][${formNum}]">
    <button type="button">Bot Text +</button>
    </div>
    
    <br>

    <div class="userForm">
    <h5>Student Button 1</h5>
    <input style="display: block" type="text" value="Good1" name="bot[student][decision][${formNum}]">
    <input style="display: block" type="text" value="Good Answer1" name="bot[student][answer][${formNum}][0]">
    <button type="button">Bot Answer +</button>
    
    </div>
    <br>
    </div>`;
    var currentForm = document.getElementsByClassName('botForm')[formNum-1];
    
    currentForm.insertAdjacentHTML('afterend', newBotForm);
    
}

function addBotText(element){
    
    
}