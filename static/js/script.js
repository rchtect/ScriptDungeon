/**
 * This variable stores all locations that the developer has made 
 * with objects that has descriptions.
 * Descriptions change the text shown in the textbox.
 */
var locations = {
  start: {
    desc: "I welcome you, oh, my child. Where do you wish to go?<br><br><b>(North) (South)</b>",
  },
  north1: {
    desc: "Bravery for thy who choseth <b>North</b> as you shall conquer the unseen.",
  },
};

/**
 * .ready() Makes sure the function loads when the page loads
 */
$(document).ready(function () {
    /**
     * Shows start page
     */
  $("#text").empty().append(locations.start.desc);
  $(document).keypress(function (key) {
    if (key.which === 13 && $("#usr-input").is(":focus")) {
      var input = $("#usr-input").val().toLowerCase();
      switch (input) {
        case "north":
          $("#text").empty().append(locations.north1.desc);
          break;
        case "south":
          alert("southern ye?");
          break;
        case "reset":
          $("#text").empty().append(locations.start.desc);
          break; 
        case "close":
          window.close()  
        break;
        default:
          alert("'Tssss invaliddd");
      };
      $("#usr-input").val("");
    }
  });
});
