let bot = new RiveScript(); // initialisation de rivescript

const brains = ["french/brain/french.rive"];

bot.loadFile(brains).then(botReady).catch(botNotReady);

function botReady() {
  bot.sortReplies();
}

function botNotReady(err) {

}

