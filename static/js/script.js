var currentLocation = 0;
var alive = true;
var optionLocation = "start";
var input = "";
var muted = true;
document.addEventListener("DOMContentLoaded", function () {
  alive = true;
  clearText();
  isAliveMusic();
  document.getElementById("text").innerHTML += locations.start.desc;
  changeOptions();
  document.addEventListener("keydown", enter, false);
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
        /**
         * Here's a break between the North story and South story
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
