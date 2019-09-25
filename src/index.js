import "./styles/style.scss";
import Game from "./js/game";

const classConstants = {
  dNone: "d-none",
  alertSuccess: "alert-succes",
  alertWrong: "alert-wrong"
};

window.onload = () => {
  const alert = document.getElementById("alert");
  const alert__message = document.getElementById("alert__message");
  const alert__button = document.getElementById("alert__button");

  const expressionSpan = document.getElementById("expression");
  const answerInput = document.getElementById("answer");
  const checkButton = document.getElementById("check");

  answerInput.focus();

  const newGame = () => {
    let game = new Game();

    alert.classList.add(classConstants.dNone);

    const check = game => {
      const answer = Number(answerInput.value);
      if (game.checkResult(answer)) {
        alert.classList.remove(classConstants.alertWrong);

        alert.classList.remove(classConstants.dNone);
        alert__button.classList.remove(classConstants.dNone);
        alert.classList.add(classConstants.alertSuccess);
        alert__message.textContent = "Right!";
      } else {
        alert.classList.remove(classConstants.alertSuccess);

        alert.classList.remove(classConstants.dNone);
        alert__button.classList.add(classConstants.dNone);
        alert.classList.add(classConstants.alertWrong);
        alert__message.textContent = "Wrong!";
      }
    };
    checkButton.onclick = () => check(game);

    const newGameExpression = game.newGame();
    expressionSpan.innerHTML = newGameExpression.stringExpression;
  };

  alert__button.onclick = () => {
    newGame();
  };

  newGame();
};
