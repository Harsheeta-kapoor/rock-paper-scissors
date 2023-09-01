const options = ["Rock", "Paper", "Scissors"];

const generateRandomResponse = () => (Math.random() * 10).toFixed(0) % 3;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScoreContainer = document.querySelector("#playerscore");
const computerScoreContainer = document.querySelector("#computerscore");
const messageBox = document.querySelector("#text");
let playerScore = 0,
  computerScore = 0;
messageBox.innerhtml=""
  const game = (option) => {
    const computerResponse = generateRandomResponse();
    switch (option) {
      case 0:
        switch (computerResponse) {
          case 0:
            console.log("Draw");
            messageBox.innerHTML = "It is a tie";
            break;
          case 1:
            console.log("Computer Wins");
            messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`;
            computerScore++;
            computerScoreContainer.innerHTML = computerScore;
            break;
          case 2:
            console.log("You Win");
            rock.classList.add("win");
            setTimeout(()=>{
              rock.classList.remove("win");
            },3000)
            messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You win !!`;
            playerScore++;
            playerScoreContainer.innerHTML = playerScore;
            break;
          default:
            break;
        }
        break;
      case 1:
        switch (computerResponse) {
          case 0:
            console.log("You win");
            messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You win !!`;
            playerScore++;
            playerScoreContainer.innerHTML = playerScore;
            break;
          case 1:
            console.log("Draw");
            messageBox.innerHTML = "It is a tie";
            break;
          case 2:
            console.log("Computer Wins");
            messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`;
            computerScore++;
            computerScoreContainer.innerHTML = computerScore;
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (computerResponse) {
          case 0:
            console.log("Computer Wins");
            messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`;
            computerScore++;
            computerScoreContainer.innerHTML = computerScore;
            break;
          case 1:
            console.log("You Win");
            messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You win !!`;
            playerScore++;
            playerScoreContainer.innerHTML = playerScore;
            break;
          case 2:
            messageBox.innerHTML = "It is a tie";
            console.log("Draw");
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

rock.addEventListener("click", () => game(0));
paper.addEventListener("click", () => game(1));
scissor.addEventListener("click", () => game(2));


