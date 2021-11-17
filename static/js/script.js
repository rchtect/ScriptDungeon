var currentLocation = 0;
var alive = true;
var optionLocation = "start";
var input = "";
var muted = true;
document.addEventListener("DOMContentLoaded", function () {
  alive = true;
  clearText();
  isAlive();
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
            isAlive();
            updateLocation();
            changeOptions();
            currentLocation += 1;
          } else {
            isInvalid();
          }
          break;
        case "south":
          if (currentLocation == 0) {
            clearText();
            isAlive();
            updateLocation();
            changeOptions();
            currentLocation += 2;
          } else {
            isInvalid();
          }
          break;
        case "squish":
          if (currentLocation == 1) {
            death();
            clearText();
            isAlive();
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