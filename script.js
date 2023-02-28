//math.trunc gets rid of fractional digits
let randomNumber = Math.trunc(Math.random() * 30) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // provision for non-response from the playa
  //falsy
  if (!guess) {
    displayMessage("Please Insert a Number, My friend 😡");
  } else if (guess === randomNumber) {
    displayMessage("Correct 🎉🎉");
    document.querySelector(".number").textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber
          ? "Punguza Kiasi, Too High 🤣🤣 "
          : "Ongeza kiasi, Too low 🤣🤣"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Loose, Take this L!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  randomNumber = Math.trunc(Math.random() * 30) + 1;

  displayMessage("Begin...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
