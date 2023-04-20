//To divide two fractions

const prompt = require('prompt-sync')();

class Fraction {
  constructor(numerator,denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  divide(f2) {
    let num = this.numerator * f2.denominator;
    let den = f2.numerator * this.denominator;
    let result = new Fraction(num,den);
    let final = result.reduce_fraction();
    return final;
  }
  
  find_gcd(a,b) {
    let i;
    let gcd = 0;
    for(i=0;i<=a && i<=b; i++) {
      if(a%i==0 && b%i==0) {
        gcd = i;
      }
    }
    return gcd;
  }

  reduce_fraction() {
    numerator = this.numerator/this.find_gcd(this.numerator,this.denominator);
    denominator = this.denominator/this.find_gcd(this.numerator,this.denominator);
    return new Fraction(numerator,denominator);
  }
}

function input() {
  numerator = parseFloat(prompt("Enter the numerator: "));
  denominator = parseFloat(prompt("Enter the denominator: "));
  return new Fraction(numerator,denominator);
}   

function output(result) {
  console.log(result);
}

function main() {
  f1 = input();
  f2 = input();
  result = f1.divide(f2);
  output(result);
}

main();
