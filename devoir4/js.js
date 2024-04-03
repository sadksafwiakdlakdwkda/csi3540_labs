function register() {
    let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let code = "";
    for(let i=0; i<3;i++){
        let index = Math.floor(Math.random() * list.length);
        code += list[index];
    }
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let time = document.getElementById("time").value;
    let gender = document.getElementById("gender").value;
    let tableBody = document.querySelector("#waitListTable tbody");
    let newRow = document.createElement("tr");
    let nameCell = document.createElement("td");
    let telCell = document.createElement("td");
    let codeCell = document.createElement("td");
    let timeCell = document.createElement("td");
    nameCell.textContent = name;
    telCell.textContent = tel;
    codeCell.textContent = code;
    timeCell.textContent = time;
    newRow.appendChild(nameCell);
    newRow.appendChild(telCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(codeCell);
    tableBody.appendChild(newRow);
    update(name,gender,tel,time,code);
}


function next(){
    deleterecord();
    let tableBody = document.querySelector("#waitListTable tbody");
    if (tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
    } else {
        alert("No more patient!");
    }
}


function update(name,gender,tel,time,code){
    $.ajax({
        url: `update.php?&name=${name}&gender=${gender}&tel=${tel}&time=${time}&code=${code}`,
        type: 'GET', 
        success: function(response) {
            console.log('Success:', response);
        }
    });
}
function deleterecord(){
    $.ajax({
        url: `done.php`,
        type: 'GET', 
        success: function(response) {
            console.log('Success:', response);
        }
    });
}

function search(){
    let code = document.getElementById("code").value;
    let position = document.getElementById("position");
    $.ajax({
        url: `find.php?&code=${code}`, 
        type: 'POST',
        success: function(response) {
            console.log(response);
            result = count(response,code);
            position.innerHTML = result;
        }
    });
}

function count(codes, targetCode) {
    let target = codes.find(code => code.code === targetCode);
    if (!target) return "Sorry, your code is invalid, please try again!"; 
    let targetTime = target.registrationtime;
    let count = 0;
    codes.forEach(code => {
      if (code.registrationtime < targetTime) {
        count++;
      }
    });
    let result = "";
    if (count == 0){
        result = "You are the first, please go to see the doctor!";
    }
    else if (count == 1){
        result = "There is 1 people in front of you and it might take 15 minutes";
    }else{
        let time = count*15;
        result = "There are " + count + " people in front of you and it might take " + time + " minutes";
    }
    return result;
}