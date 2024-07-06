// index.js
const chalk = require('chalk');
const figlet = require('figlet');
const gradient = require('gradient-string');
const boxen = require('boxen');

function textToOrange(text) {
    const styledText = chalk.hex('#FFA500')(text);
    const gradientText = gradient(['orange', 'yellow']).multiline(figlet.textSync(styledText));
    const boxedText = boxen(gradientText, { padding: 1, margin: 1, borderColor: 'orange' });
    console.log(boxedText);
}

module.exports = textToOrange;
