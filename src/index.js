class SmartCalculator {
  constructor(initialValue) {
    this.str = [initialValue];
    this.prev_pow_was_one = false;
  }

  toString() {
    var expr = this.str.join().replace(/,/g , "");
    return eval(expr)
  }

  add(number) {
    if (this.prev_pow_was_one) { this.prev_pow_was_one = false; }
    this.str.push('+');
    this.str.push(number);
    return this;
  }
  
  subtract(number) {
    if (this.prev_pow_was_one) { this.prev_pow_was_one = false; }
    this.str.push('-');
    this.str.push(number);
    return this;
  }

  multiply(number) {
    if (this.prev_pow_was_one) { this.prev_pow_was_one = false; }
    this.str.push('*');
    this.str.push(number);
    return this;
  }

  devide(number) {
    if (this.prev_pow_was_one) { this.prev_pow_was_one = false; }
    this.str.push('/');
    this.str.push(number);
    return this;
  }

  pow(number) {
    if (this.prev_pow_was_one) return this;
    if (number === 1){ this.prev_pow_was_one = true; return this; }
    var n = this.str.length;
    var calc = this.str[n - 1];
    for (var i = 0; i < number - 1; i++){ calc *= this.str[n - 1]; }
    this.str[n - 1] = calc;
    return this;
  }
}

//console.log(value.toString());
module.exports = SmartCalculator;