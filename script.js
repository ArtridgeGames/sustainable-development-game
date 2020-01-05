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
var resultIcon = document.getElementById("result-icon");
var resultContainer = document.getElementById("result-container");
var resultBtn = document.getElementById("result-btn");

var obj = undefined;
var canAnswer = false;

function askObject() {
  canAnswer = true;
  obj = objects[Math.floor(Math.random() * objects.length)]
  object.innerHTML = obj.name;
  object.classList.remove("no-transition");
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
  if (canAnswer) {
    canAnswer = false;
    resultContainer.style.transform = "scale(1)";
    if (chosenOption == obj.recyclable) {
      resultIcon.setAttribute("class", "fas fa-check");
      resultIcon.style.color = "#5cb85c";
    } else {
      resultIcon.setAttribute("class", "fas fa-times");
      resultIcon.style.color = "#d9534f";
    }
  }
}

resultBtn.onclick = function() {
  resultContainer.style.transform = "scale(0)";
  window.setTimeout(function() {
    object.style.top = "110%";
    window.setTimeout(function() {
      object.classList.add("no-transition");
      object.style.top = "-10%";
      window.setTimeout(function() {
        askObject();
      }, 300);
    }, 300);
  }, 300);
}
