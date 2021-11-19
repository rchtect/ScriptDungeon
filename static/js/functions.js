/** Global variable for iterating between muted states. */
var i = 0;
/** Refreshes the displayed text. */
function clearText() {
  var text = document.getElementById("text");
  while (text.firstChild) text.removeChild(text.firstChild);
}
/** Refreshes the text written in the inputfield. */
function clearInput() {
  document.getElementById("usr-input").value = "";
}
/** Used by both ESC button, reset command and title link, resets everything and turns user to start. */
function backHome() {
  clearText();
  alive = new Boolean(true);
  isAliveMusic();
  document.getElementById("text").innerHTML += locations.start.desc;
  currentLocation = 0;
  optionLocation = "start";
  changeOptions();
  clearInput();
}
/** Alerts if input is invalid */
function isInvalid() {
  alert("The input is invalid");
}
/** A function for handling living states texts and corresponding music being played.
 * Also plays music if muted is false and toggles corresponding buttons for playing and pausing death.mp3 and main.mp3. 
 */
function isAliveMusic() {
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
  if (completed == true) {
    document.getElementById("text").innerHTML = "";
    document.getElementById("text").innerHTML += livingState.finished.desc;
  }
}
/** Function used by play music button uses i variable to iterate between muted and false. 
 * Button can only play and not mute. */
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
/** Rather useless function but good when switch-case function gets longer. 
 * Makes the global variablea live to false which plays death music and shows death info. */
function death() {
  alive = false;
}
/** Updates options text under desc text depending on the value of global varaible optionLocation. */
function changeOptions() {
  document.getElementById("text").innerHTML +=
    locations[optionLocation].options;
}
/** Updates display text under desc depending on the value of global varaible input. Clears inputfield. */
function updateLocation() {
  document.getElementById("text").innerHTML += locations[input].desc;
  document.getElementById("usr-input").value = "";
}
/** Function for muting for main.mp3. Uses global variable i for iteration between mute and unmute. */
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
/** Function for muting for death.mp3. Uses global variable i for iteration between mute and unmute. */
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
