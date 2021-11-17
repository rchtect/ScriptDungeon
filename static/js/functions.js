function clearText() {
  var text = document.getElementById("text");
  while (text.firstChild) text.removeChild(text.firstChild);
}
function clearInput() {
  document.getElementById("usr-input").value = "";
}
function backHome() {
  clearText();
  alive = new Boolean(true);
  isAlive();
  document.getElementById("text").innerHTML += locations.start.desc;
  currentLocation = 0;
  optionLocation = "start";
  changeOptions();
  clearInput();
}

function isInvalid() {
  alert("The input is invalid");
}

function isAlive() {
    if (alive == true) {
        document.getElementById("text").innerHTML += livingState.alive.desc;
      } else {
        document.getElementById("text").innerHTML += livingState.dead.desc;
      }
}

function death() {
    alive = new Boolean(false);
}

function changeOptions() {
    document.getElementById("text").innerHTML += locations[optionLocation].options
}

function updateLocation() {
    document.getElementById("text").innerHTML += locations[input].desc
}