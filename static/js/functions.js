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
    document.getElementById("audio").muted = false;
    document.getElementById("death-audio").muted = true;
    document.getElementById("text").innerHTML += livingState.alive.desc;
  } else {
    document.getElementById("death-mute-txt").style.display = "block";
    document.getElementById("mute-txt").style.display = "none";
    document.getElementById("audio").muted = true;
    document.getElementById("death-audio").muted = false;
    document.getElementById("text").innerHTML += livingState.dead.desc;
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
    document.getElementById("death-audio").muted = true;
    document.getElementById("audio").muted = true;
    document.getElementById("mute-txt").innerHTML = "Unmute";
    i += 1;
  } else {
    document.getElementById("audio").muted = false;
    document.getElementById("mute-txt").innerHTML = "Mute";
    i -= 1;
  }
}

var i2 = 0;
function muteDeath() {
  if (i2 == 0) {
    document.getElementById("death-audio").muted = true;
    document.getElementById("audio").muted = true;
    document.getElementById("death-mute-txt").innerHTML = "Unmute";
    i2 += 1;
  } else {
    document.getElementById("death-audio").muted = false;
    document.getElementById("death-mute-txt").innerHTML = "Mute";
    i2 -= 1;
  }
}

window.addEventListener("load", function () {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createBufferSource();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "audio-autoplay.wav");
  xhr.responseType = "arraybuffer";
  xhr.addEventListener("load", function (r) {
    audioCtx.decodeAudioData(xhr.response, function (buffer) {
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.loop = false;
    });
    source.start(0);
  });
  xhr.send();
});
