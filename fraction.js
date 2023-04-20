 main
code
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


const calc = new Calculator();
calc.add(5);
calc.add(10);
console.log(calc.getResult()); 

//multipication(adishree)
main

//subraction code(viji)
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  subtract(otherFraction) {
    // Find a common denominator
    const commonDenominator = this.denominator * otherFraction.denominator;
    
    // Convert both fractions to the common denominator
    const thisNumerator = this.numerator * otherFraction.denominator;
    const otherNumerator = otherFraction.numerator * this.denominator;
    
    // Subtract the numerators
    const resultNumerator = thisNumerator - otherNumerator;
    
    // Create and return the resulting fraction
    return new Fraction(resultNumerator, commonDenominator);
  }
  
  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

// Example usage
const fraction1 = new Fraction(3, 4);
const fraction2 = new Fraction(1, 2);
const result = fraction1.subtract(fraction2);
console.log(result.toString()); 
