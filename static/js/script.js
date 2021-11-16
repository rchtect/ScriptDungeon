document.addEventListener("DOMContentLoaded", function () {
  var text = document.getElementById("text");
  while (text.firstChild) text.removeChild(text.firstChild);
  document.getElementById("text").innerHTML += locations.start.desc;
  document.addEventListener("keydown", enter, false);
  function enter(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
      var input = document.getElementById("usr-input").value.toLowerCase();
      switch (input) {
        case "north":
          while (text.firstChild) text.removeChild(text.firstChild);
          document.getElementById("text").innerHTML += locations.north1.desc;
          break;
        case "reset":
          while (text.firstChild) text.removeChild(text.firstChild);
          document.getElementById("text").innerHTML += locations.start.desc;
          break;
        case "close":
          Window.close();
          break;
      }
      document.getElementById("usr-input").value = "";
    }
  }
});
