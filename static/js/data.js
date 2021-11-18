var locations = {
  start: {
    desc: "You see the tall mountains penetrating the sky on the north side of the map and you see the icy lake on the south side. Where do you wish to go?",
    options: "<br><br> <b>(North) (South)</b>",
  },
  north: {
    desc: "As you walk up the north side you see an ant. Do you squish it or let it be?</b>",
    options: "<br><br> <b>(Squish) (Let be)</b>",
  },
  squish: {
    desc: "You step on the ants.. 'It's fun' you say, not realizing that the ants are crawling under your clothes and biting you over and over again until you fall on the ground and die.",
    options: "<br><br> <b>(Type 'reset' or press ESC to try again)</b>",
  },
  "let be": {
    desc: "You let the ants be free to live their own life. 'Ants must be good for something after all' you think as you walk away but as you're about to pass the road a giant eagle eats them all up. What are we supposed to do now?",
    options: "<br><br> <b>(Kill the eagle) (Run) (Befriend it)</b>",
  },
  south: {
    desc: "You see a couple penguins but they can't seem to open the can of tuna.. Do you help them?",
    options: "<br><br> <b>(Help them) (Leave them)</b>",
  },
  "help them": {
    desc: "Congratulations, you now have a clan of penguins at your disposal.. But there's a bear close by.. Do we fight him?",
    options: "<br><br> <b>(Fight him) (Leave with friends)</b>",
  },
  "leave them": {
    desc: "You thought you could leave huh? Now you have a pack of penguins biting your flesh off as you succumb to your doom..",
    options: "<br><br> <b>(Type 'reset' or press ESC to try again)</b> <p class='egg'>If I only had opened that can of tuna..</p>",
  },
};

var livingState = {
  alive: {
    desc: "<b class='red'>♥ You are alive ♥</b> <br><br>",
  },
  dead: {
    desc: "<b class='red'>♥ You died :( ♥</b> <br><br>",
  },
};
