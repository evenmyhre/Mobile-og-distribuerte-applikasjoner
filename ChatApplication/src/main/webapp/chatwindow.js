/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

addAnother = function () {

    var x = document.getElementById("textinput");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    console.log(document.getElementById('textinput').value);
    var input = document.getElementById('textinput').value;
    var ul = document.getElementById("messages");
    var li = document.createElement("li");
    li.style.textAlign = "center";
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
};

function createUser() {
                    var first = document.getElementById("firstname").value;
                    var second = document.getElementById("lastname").value;
                    document.getElementById("fullname").innerHTML = first + " " + second;
                   
                }
function goToChat(){
    
    window.location.href = "currentConversation.html";
}
                