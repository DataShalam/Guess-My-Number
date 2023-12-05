"use strict";

let SECRET_NUMBER = Math.trunc(Math.random() * 50) + 1;
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);

const enterGuess = function (e) {
  const guess = Number(document.querySelector(".guess").value);

  if (e.key === "Enter" || e.type === "click") {
    if (!guess || guess < 1 || guess > 50) {
      // When Input Out Of Bounds
      document.querySelector(".message").textContent =
        "⛩️ Select between 1 and 50";
    }
    // When WIN
    else if (guess === SECRET_NUMBER) {
      highScore < score ? (highScore = score) : (highScore = highScore);
      document.querySelector(".message").textContent = "🎉 Correct Number!";

      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".number").textContent = SECRET_NUMBER;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
    // When Input Is High
    else if (guess > SECRET_NUMBER && score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    }
    // When Input is Low
    else if (guess < SECRET_NUMBER && score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    }
    // When Lost
    else {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "😭 You Lost!";
    }
  }
};

document.addEventListener("keypress", enterGuess);
document.querySelector(".check").addEventListener("click", enterGuess);

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".number").style.width = "";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score = 20;

  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
});
