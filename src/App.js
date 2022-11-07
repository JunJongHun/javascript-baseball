const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerNumber = [];
  }

  play() {
    this.computerNumber = this.getComputerNumber();

    return;
  }

  getComputerNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); // [1,2,3]
  }
}

const app = new App();
app.play();

module.exports = App;
