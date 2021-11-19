/**
 * @typedef {{ (any option in the list): Object, desc: String, options: String }} Stores the text for all locations and options.
 */
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
  "kill the eagle": {
    desc: "You try to kill the eagle but it sits on your head and pecks your brains out...... peck peck...",
    options: "<br><br> <b>(Type 'reset' or press ESC to try again)</b>",
  },
  befriend: {
    desc: "You try to befriend it, but it's <i>eagle cool</i> we are talking about. With nothing to offer him you became the offer: tasty human snack",
    options: "<br><br> <b>(Type 'reset' or press ESC to try again)</b>",
  },
  run: {
    desc: "You manage to run away without the eagle following your footsteps. The road splits in two and there's a sign that reads 'to Heaven' and 'to Hell'. Where do you go?",
    options: "<br><br> <b>(Heaven) (Hell)</b>",
  },
  /**
   * Here's a break between the North story and South story
   */
  south: {
    desc: "You see a couple penguins but they can't seem to open the can of tuna.. Do you help them?",
    options: "<br><br> <b>(Help them) (Leave them)</b>",
  },
  "help them": {
    desc: "Congratulations, you now have a clan of penguins at your disposal.. But there's a bear close by.. Do we fight him?",
    options:
      "<br><br> <b>(Fight him) (Leave with friends)</b> <p class='egg'> friends (￣▽￣)ノ</p>",
  },
  "leave them": {
    desc: "You thought you could leave huh? Now you have a pack of penguins biting your flesh off as you succumb to your doom..",
    options:
      "<br><br> <b>(Type 'reset' or press ESC to try again)</b> <p class='egg'>If I only had opened that can of tuna..</p>",
  },
  "fight him": {
    desc: "As you and your fellow comrades try to assault this poor kindhearted bear you were stripped into pieces and became today's lunch",
    options:
      "<br><br> <b>(Type 'reset' or press ESC to try again)</b> <p class='egg'>mmm crunchy humans taste the best..</p>",
  },
  "leave with friends": {
    desc: "It turns out that the bear was actually a kind-hearted vegetarian.. He owns the biggest casino in icy-town. You agree to enter his casino and you're now playing poker. Which card do you play?",
    options: "<br><br> <b>(11) (8) (3)</b>",
  },
  lose: {
    desc: "You just lost 10000000000 million cans of tuna and your penguin friends hate you. Turns out these penguins were a part of the local bird mafia and they beat the crap out you before leaving you in the cold, never to return again.",
    options: "<br><br><b>(Type 'reset' or press ESC to try again)</b>",
  },
  win: {
    desc: "You just won 10000000000 million cans of tuna for your penguin friends. Turns out these penguins were a part of the local bird mafia and you now have a fortune of <i>more useful</i> human money.. You step outside the casino and continue on your journey on the road but the path splits. You read the road sign and it says 'to Hell' and 'to Heaven'. Where do we go from here?",
    options: "<br><br> <b>(Heaven) (Hell)</b>",
  },
  hell: {
    desc: "You followed the path which led to the beautiful Norwegian town called Hell.. <i>I'm so lucky I didn't go to the 'heaven' prison</i>, you think to yourself as you enjoy a mocha coffee.<p class='egg'>More coming soon (hopefully)</p>",
    options:
      "<br><br> <b>(You completed the game! Press ESC or write 'return' to go back and try it again)</b>",
  },
  heaven: {
    desc: "You followed the path which led to the prison called Heaven. While you were on your way to heaven you were arrested for money laundering because you exchanged large amounts of tunas for money. After a day in prison you dropped the soap and died from an- erm- infection..",
    options: "<br><br><b>(Type 'reset' or press ESC to try again)</b>",
  },
};

/**
 * @typedef {{ (any state): Object, desc: String}} Stores corresponding states which the user is in
 */
var livingState = {
  alive: {
    desc: "<b class='red'>♥ You are alive ♥</b> <br><br>",
  },
  dead: {
    desc: "<b class='red'>♥ You died :( ♥</b> <br><br>",
  },
  finished: {
    desc: "<b class='red'>♥ Congratulations! ♥</b> <br><br>",
  },
};
