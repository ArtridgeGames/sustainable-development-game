var objects = [
  {
    name: "Objet 1",
    recyclable: false
  },
  {
    name: "Objet 2",
    recyclable: true
  },
  {
    name: "Objet 3",
    recyclable: true
  },
  {
    name: "Objet 4",
    recyclable: false
  }
]

var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var object = document.getElementById("object");
var result = document.getElementById("result");
var result = document.getElementById("result-container");

var obj = undefined;
function askObject() {
  obj = objects[Math.floor(Math.random() * objects.length)]
  object.innerHTML = obj.name;
  object.style.top = "40%";
}

window.onload = function() {
  askObject();
}

leftBtn.onclick = function() {
  click(true);
}
rightBtn.onclick = function() {
  click(false);
}

function click(chosenOption) {
  if (chosenOption == obj.recyclable) {
    result.setAttribute("class", "fas fa-check");
  } else {
    result.setAttribute("class", "fas fa-times");
  }
}
