class SmartCalculator {
  constructor(initialValue) {
    this.str = initialValue;
  }

  toString() {
    var math = require('mathjs');
    return math.eval(this.str);
  }

  add(number) {
    this.str += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.str += '-' + number;
    return this;
  }

  multiply(number) {
    this.str += '*' + number;
    return this;
  }

  devide(number) {
    this.str += '/' + number;
    return this;
  }

  pow(number) {
    this.str += '^' + number;
    return this;
  }
}



module.exports = SmartCalculator;