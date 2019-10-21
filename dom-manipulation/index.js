var p =document.createElement('p');
var node =document.createTextNode("Up above the world so high");

p.appendChild(node);

var parent =document.getElementById("div1");
parent.appendChild(p);

var para1 =document.createElement("p");
var node1 = document.createTextNode("Like A Diamond in the Sky");

para1.appendChild(node1);

parent.appendChild(para1);