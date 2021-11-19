/** Global variables which might be used inbetween script.js and main.js. */
var currentLocation = 0;
var alive = true;
var optionLocation = "start";
var input = "";
var muted = true;
var completed = false;
/** Adds an eventlisterner for if DOM is loaded. Runs the whole script if loaded.
 * @param {Boolean} "DOMContentLoaded"
 */
document.addEventListener("DOMContentLoaded", function () {
  /** Starts with alive. Clears text and adds alive music. Starts at desc in start object in locations object. Listens for keydown event. */
  alive = true;
  clearText();
  isAliveMusic();
  document.getElementById("text").innerHTML += locations.start.desc;
  changeOptions();
  /** Adds an eventlisterner for if DOM is loaded. Runs the whole script if loaded.
   * @param {Boolean} "keydown"
   * @param {Function} enter
   * @param {Boolean} false
   */
  document.addEventListener("keydown", enter, false);
  /** Creates keyCode variable. Checks if enter or esc is pressed.
   * If enter is pressed then it runs the main if statement.
   * Puts text from inputfield and gives it to global variable input in lowercase format.
   * Global variable optionLocation is given the same value as input.
   * Runs through switch statement which checks the input variable each case runs through some form of
   * currentLocation validation.
   * this is to ensure that the user doesn't skip timeline.
   * If two options can lead to the same thing then input and optionLocation will remain correct by hardcoded means.
   * Finish can be attained by both South and North timeline in which case currentLocation can be 5 or 8
   * Else alerts to user if input is invalid
   * If esc is pressed then it runs backHome function.
   * Lastly resets inputfield again.
   */
  function enter(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
      input = document.getElementById("usr-input").value.toLowerCase();
      optionLocation = input;
      switch (input) {
        case "north":
          if (currentLocation == 0) {
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 1;
          } else {
            isInvalid();
          }
          break;
        case "squish":
          if (currentLocation == 1) {
            death();
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "let be":
          if (currentLocation == 1) {
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "kill the eagle":
        case "kill":
          if (currentLocation == 3) {
            input = "kill the eagle";
            optionLocation = "kill the eagle";
            death();
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "run":
          if (currentLocation == 3) {
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        /**
         * Visual break between the North story and South story
         */
        case "south":
          if (currentLocation == 0) {
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "help":
        case "help them":
          if (currentLocation == 2) {
            input = "help them";
            optionLocation = "help them";
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "leave":
          if (currentLocation == 4) {
            input = "leave with friends";
            optionLocation = "leave with friends";
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          }
        case "leave them":
          if (currentLocation == 2) {
            input = "leave them";
            optionLocation = "leave them";
            death();
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else if (currentLocation >= 2) {
            return;
          } else {
            isInvalid();
          }
          break;
        case "fight":
        case "fight him":
          if (currentLocation == 4) {
            input = "fight him";
            optionLocation = "fight him";
            death();
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "leave with friends":
          if (currentLocation == 4) {
            input = "leave with friends";
            optionLocation = "leave with friends";
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "11":
          if (currentLocation == 6) {
            input = "win";
            optionLocation = "win";
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "8":
        case "3":
          if (currentLocation == 6) {
            death();
            input = "lose";
            optionLocation = "lose";
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        /**
         * Visual break for the end choices
         */
        case "hell":
          if (currentLocation == 8 || currentLocation == 5) {
            completed = true;
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
          } else {
            isInvalid();
          }
          break;
        case "heaven":
          if (currentLocation == 8 || currentLocation == 5) {
            death();
            clearText();
            isAliveMusic();
            updateLocation();
            changeOptions();
          } else {
            isInvalid();
          }
          break;
        case "reset":
          backHome();
          break;
        case "close":
          window.close();
          break;
        default:
          isInvalid();
      }
      document.getElementById("usr-input").value = "";
    } else if (keyCode == 27) {
      backHome();
    }
  }
});
