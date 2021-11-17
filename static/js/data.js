var locations = {
  start: {
    desc: "You see the tall mountains penetrating the sky on the north side of the map and you see the icy lake on the south side. Where do you wish to go?",
    options: "<br><br> <b>(North) (South)</b>",
  },
  north: {
    desc: "As you walk up the north side you see an ant. Do you squish it or let it be?</b>",
    options: "<br><br> <b>(Squish) (Let be)</b>"
  },
  south: {
    desc: "test test"
  },
  squish: {
    desc: "It is very unfortunate of you to pass away this way. By an ant even! You see your soul leave your body and there's no turning back now...",
    options: "<br><br> <b>(Type 'reset' or press ESC to try again)</b>",
  }
};

var livingState = {
  alive: {
    desc: "<b class='alive'>♥ You are alive ♥</b> <br><br>"
  },
  dead: {
    desc: "<b class='reddead'>♥ You died :( ♥</b> <br><br>"
  }
}
