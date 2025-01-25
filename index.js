let number = Math.round(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
        const guess = Number(document.querySelector(".guess").value);
        if (document.querySelector(".message").textContent !== "Correct number" && document.querySelector(".message").textContent !== "You defeat") {
            if (!guess) {
                document.querySelector(".message").textContent = "Not a number";
                score--;
            } else if (guess < number) {
                document.querySelector(".message").textContent = "Too low";
                score--;
            } else if (guess > number) {
                document.querySelector(".message").textContent = "Too high";
                score--;
            } else if (guess === number) {
                document.querySelector(".message").textContent = "Correct number";
                document.querySelector(".number").textContent = number;
                document.querySelector("body").style.backgroundColor = "#60b247";
                if (highScore < score) {
                    highScore = score;
                }
            }

            if (score <= 0) {
                document.querySelector(".message").textContent = "You defeat";
                document.querySelector("body").style.backgroundColor = "#b25747";
                document.querySelector(".number").textContent = number;
            }

            document.querySelector(".score").textContent = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
);

document.querySelector(".again").addEventListener("click", () => {
    document.querySelector(".message").textContent = "Start guessing";
    score = 20
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    number = Math.round(Math.random() * 20) + 1;

})

