function guessTheWord() {
  let words = [
    "dog",
    "cat",
    "rabbit",
    "lion",
    "elephant",
    "giraffe",
    "bear",
    "zebra",
    "hippopotamus",
    "fox",
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  let wordArray = word.split("");
  let wordPlaceholder = [];
  for (let i = 0; i < wordArray.length; i++) {
    wordPlaceholder.push("_");
  }
  console.log("Welcome to the Word Guess Game!");
  console.log(`You have 6 failed attempts left.`);
  let incorrectGuesses = 0;
  let failedAttempts = [];
  while (incorrectGuesses < 6 && wordPlaceholder.indexOf("_") !== -1) {
    console.log(wordPlaceholder.join(" "));
    console.log("Incorrect guesses: " + incorrectGuesses);
    console.log("Failed attempts: " + failedAttempts.join(", "));
    console.log("Attempts left: " + (6 - incorrectGuesses));
    let guess = prompt("Guess a letter:").toLowerCase();
    let isCorrect = false;
    for (let j = 0; j < wordArray.length; j++) {
      if (wordArray[j] === guess) {
        wordPlaceholder[j] = guess;
        isCorrect = true;
      }
    }
    if (!isCorrect) {
      incorrectGuesses++;
      failedAttempts.push(guess);
    }
  }
  if (wordPlaceholder.indexOf("_") === -1) {
    console.log("You win! The word was " + word + ".");
  } else {
    console.log("You lose. The word was " + word + ".");
  }
}

guessTheWord();