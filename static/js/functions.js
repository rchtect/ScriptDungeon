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
    document.getElementById("audio").play();
    document.getElementById("death-audio").pause();
    document.getElementById("text").innerHTML += livingState.alive.desc;
  } else {
    document.getElementById("death-audio").play();
    document.getElementById("death-mute-txt").style.display = "block";
    document.getElementById("mute-txt").style.display = "none";
    document.getElementById("audio").pause();
    document.getElementById("death-audio").play();
    document.getElementById("text").innerHTML += livingState.dead.desc;
  }
}

function playMusic() {
  if (alive == true) {
    document.getElementById("audio").play();
  } else {
    document.getElementById("death-audio").play();
  }
}

function death() {
  alive = new Boolean(false);
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
  if (i == 0) {
    document.getElementById("death-audio").pause();
    document.getElementById("audio").pause();
    document.getElementById("mute-txt").innerHTML = "Unmute";
    i += 1;
  } else {
    document.getElementById("audio").play();
    document.getElementById("mute-txt").innerHTML = "Mute";
    i -= 1;
  }
}

var i2 = 0;
function muteDeath() {
  if (i2 == 0) {
    document.getElementById("death-audio").pause();
    document.getElementById("audio").pause();
    document.getElementById("death-mute-txt").innerHTML = "Unmute";
    i2 += 1;
  } else {
    document.getElementById("death-audio").play();
    document.getElementById("death-mute-txt").innerHTML = "Mute";
    i2 -= 1;
  }
}

if (document.getElementById('myAudioID').duration > 0 && !document.getElementById('myAudioID').paused) {
  document.getElementById("mute-txt").innerHTML = "Mute";
  document.getElementById("death-mute-txt").innerHTML = "Mute";
} else {
  document.getElementById("mute-txt").innerHTML = "Unmute";
  document.getElementById("death-mute-txt").innerHTML = "Unmute";
}
