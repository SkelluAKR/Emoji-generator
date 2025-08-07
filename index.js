const emoji = require("emoji-dictionary");
const emojiNames = emoji.names;
const randomName = emojiNames[Math.floor(Math.random() * emojiNames.length)];
const unicodeEmoji = emoji.getUnicode(randomName);

console.log(unicodeEmoji);
