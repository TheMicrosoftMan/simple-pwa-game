class Game {
  operationsConstants = {
    PLUS: "PLUS"
  };

  constructor() {
    this.firstOperand;
    this.secondOperand;
    this.operation = this.operationsConstants.PLUS;
  }

  randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  getRandoMathExpression = () => {
    this.firstOperand = this.randomInteger(0, 5);
    this.secondOperand = this.randomInteger(0, 5);
    this.operation = this.operation;
    this.result = this.firstOperand + this.secondOperand;

    switch (this.operation) {
      case this.operationsConstants.PLUS:
        return {
          stringExpression: `${this.firstOperand} + ${this.secondOperand} = `,
          result: this.result
        };

      default:
        break;
    }
  };

  checkResult = answer => {
    if (answer === this.result) {
      return true;
    } else {
      return false;
    }
  };

  newGame = () => {
    return this.getRandoMathExpression();
  };
}

export default Game;
