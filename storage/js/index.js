var wordList = document.getElementById('home__hero-title').dataset.wordlist.
split(',').
map(function (word) {
  return {
    markup: word.split('').map(function (letter) {return '<span>' +
      letter + '</span>';}),

    length: word.length,
    delay: 6000 };

});
var phraseContainer = document.getElementById('phrase-container');
var randomStartIndex = Math.floor(Math.random() * wordList.length);
var completeCycle = wordList.reduce(function (accumulator, currentValue, currentIndex) {
  var wordDelay = 2000 + currentValue.length * 100 * 2;
  currentValue.delay = wordDelay;
  return accumulator + wordDelay;
}, 0);

var colours = ['one', 'two', 'three', 'four', 'five'];

// console.log(wordList);

function setNodeClass(characterNode, index, className, initialDelay) {
  setTimeout(function () {
    characterNode.classList.toggle(className);
  }, initialDelay + 100 * index);
}

var cycleWord = function cycleWord(word, wordDelay, colourIndex) {
  setTimeout(function () {
    console.log(colourIndex);
    phraseContainer.innerHTML = word.markup.join('');
    phraseContainer.className = colours[colourIndex];
    for (var i = 0; i < word.length; i++) {
      setNodeClass(phraseContainer.childNodes[i], i, 'show', 0);
    }
    for (var _i = word.length - 1; _i > -1; _i--) {
      setNodeClass(phraseContainer.childNodes[_i], _i * -1, 'show', 2500 + word.length * 300);
    }
  }, wordDelay);
};

var cycleWordList = function cycleWordList() {
  var wordDelay = 0;
  var colourIndex = 0;
  for (var wordCount = 0; wordCount < wordList.length; wordCount++) {
    if (wordCount > 0) {
      wordDelay = wordDelay + wordList[(randomStartIndex + wordCount - 1) % wordList.length].delay;
    }
    // console.log(wordDelay);
    cycleWord(wordList[(randomStartIndex + wordCount) % wordList.length], wordDelay, colourIndex);
    colourIndex = (colourIndex + 1) % colours.length;
  }
};

var cycleWords = function cycleWords() {
  cycleWordList();
  setTimeout(function () {
    cycleWords();
  }, completeCycle);
};

cycleWords();