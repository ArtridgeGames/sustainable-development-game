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

function askObject() {
  var obj = objects[Math.floor(Math.random() * objects.length)]
  object.innerHTML = obj.name;
  object.style.top = "40%";
}

window.onload = function() {
  askObject();
}
