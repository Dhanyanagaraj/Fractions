class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(value) {
    this.result += value;
  }
  
  getResult() {
    return this.result;
  }
}

// Usage
const calc = new Calculator();
calc.add(5);
calc.add(10);
console.log(calc.getResult()); // Output: 15
