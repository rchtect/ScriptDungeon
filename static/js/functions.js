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
    document.getElementById("death-mute-txt").style.display = "none";
    document.getElementById("mute-txt").style.display = "block";
    document.getElementById("death-audio").pause();
    document.getElementById("text").innerHTML += livingState.alive.desc;
    if (muted === false) {
      document.getElementById("audio").play();
    }
  } else {
    document.getElementById("death-mute-txt").style.display = "block";
    document.getElementById("mute-txt").style.display = "none";
    document.getElementById("audio").pause();
    document.getElementById("text").innerHTML += livingState.dead.desc;
    if (muted === false) {
      document.getElementById("death-audio").play();
    }
  }
}

function playMusic() {
  if (alive == true) {
    muted = false;
    i += 1;
    document.getElementById("audio").play();
    document.getElementById("mute-txt").innerHTML = "Mute";
  } else {
    muted = false;
    i += 1;
    document.getElementById("death-audio").play();
    document.getElementById("death-mute-txt").innerHTML = "Mute";
  }
}

function death() {
  alive = false;
}

function changeOptions() {
  document.getElementById("text").innerHTML +=
    locations[optionLocation].options;
}

function updateLocation() {
  document.getElementById("text").innerHTML += locations[input].desc;
}

var i = 0;
function mute() {
  if (i === 0) {
    document.getElementById("audio").play();
    document.getElementById("mute-txt").innerHTML = "Mute";
    document.getElementById("death-mute-txt").innerHTML = "Mute";
    muted = false;
    i += 1;
  } else {
    document.getElementById("audio").pause();
    document.getElementById("mute-txt").innerHTML = "Unmute";
    document.getElementById("death-mute-txt").innerHTML = "Unmute";
    muted = true;
    i = 0;
  }
}
function muteDeath() {
  if (i === 0) {
    document.getElementById("death-audio").play();
    document.getElementById("mute-txt").innerHTML = "Mute";
    document.getElementById("death-mute-txt").innerHTML = "Mute";
    muted = false;
    i += 1;
  } else {
    document.getElementById("death-audio").pause();
    document.getElementById("death-mute-txt").innerHTML = "Unmute";
    document.getElementById("mute-txt").innerHTML = "Unmute";
    muted = true;
    i = 0;
  }
}