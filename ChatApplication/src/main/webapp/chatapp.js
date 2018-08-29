/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

addAnother = function() {
    var ul = document.getElementById("chatlist");
    var li = document.createElement("li");
    var children = ul.children.length +1;
    li.setAttribute("id", "element"+children);
    li.appendChild(document.createTextNode("Element "+children));
    ul.appendChild(li);
};