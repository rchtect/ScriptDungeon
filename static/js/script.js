var currentLocation = 0;
var alive = new Boolean(true);
var optionLocation = "start";
var input ="";
document.addEventListener("DOMContentLoaded", function () {
  alive = new Boolean(true);
  clearText();
  isAlive();
  document.getElementById("text").innerHTML += locations.start.desc;
  changeOptions();
  document.addEventListener("keydown", enter, false);
  function enter(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
      input = document.getElementById("usr-input").value.toLowerCase();
      optionLocation = input
      switch (input) {
        case "north":
          if (currentLocation == 0) {
            clearText();
            isAlive();
            updateLocation();
            changeOptions();
            currentLocation += 1
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
            currentLocation += 2
          } else {
            isInvalid();
          }
          break;
          case "squish":
            if (currentLocation == 1) {
              alive = new Boolean(false);
              clearText();
              isAlive();
              updateLocation();
              changeOptions();
              currentLocation += 2
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
      } 
      document.getElementById("usr-input").value = "";
    } else if (keyCode == 27) {
      backHome();
    };
  }
});
