class GuessingGame {
  constructor() {
    this.max = 0;
    this.min = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.sum = Math.round((this.max + this.min) / 2);
    return this.sum;
  }

  lower() {
    this.max = this.sum;
  }

  greater() {
    this.min = this.sum;
  }
}

module.exports = GuessingGame;
