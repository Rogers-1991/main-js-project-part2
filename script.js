// create a Calculator class to store all information and functions
class Calculator {
  // create a constructor which will take previous operand and current operand
  // to know where to place display text in calculator
  constructor(prevOpElement, currentOpElement) {
    this.prevOpElement = prevOpElement;
    this.currentOpElement = currentOpElement;
    // clear function called in constructor to reset display back to default values
    this.clear();
  }
  // create all functions below
  clear() {
    this.currentOp = '';
    this.prevOp = '';
    this.operation = undefined;
  }

  // removes a single number
  delete() {
    this.currentOp = this.currentOp.toString().slice(0, -1);
  }

  // adds a number to screen when clicked
  // adds decimal only once
  apndNumAndRemoveDec(num) {
    if (num === '.' && this.currentOp.includes('.')) return;
    // converts numbers to String so that numbers are appended and not added
    this.currentOp = this.currentOp.toString() + num.toString();
  }

  // manages operations when clicked
  chooseOp(operation) {
    if (this.currentOp === '') return;
    if (this.prevOp !== '') {
      this.operate();
    }
    this.operation = operation;
    this.prevOp = this.currentOp;
    this.currentOp = '';
  }

  // takes values inside calculator and computes a single value to display
  operate() {
    let compute;
    const prev = parseFloat(this.prevOp);
    const current = parseFloat(this.currentOp);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        compute = prev + current;
        break;
      case '-':
        compute = prev - current;
        break;
      case '*':
        compute = prev * current;
        break;
      case '/':
        compute = prev / current;
        break;
      default:
        return;
    }
    // displays current operand and fixes float numbers to 4 digits
    this.currentOp = Number((compute).toFixed(4));
    // clears operation and previous operand on display
    this.operation = undefined;
    this.prevOp = '';
  }

  
  displayNum(number) {
    const stringNumber = number.toString();
    // splits number into integer
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    // splits number into float
    const decimalDigits = stringNumber.split('.')[1];
    let intDisplay;
    if (isNaN(integerDigits)) {
      intDisplay = '';
    } else {
      // removes any decimal places after this value is converted to a string
      intDisplay = integerDigits.toLocaleString('en', { maxFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${intDisplay}.${decimalDigits}`;
    } else {
      return intDisplay;
    }
  }

  // updates the values inside the output (display)
  updateDisplay() {
    this.currentOpElement.innerText =
      this.displayNum(this.currentOp);
    if (this.operation != null) {
      this.prevOpElement.innerText =
        `${this.displayNum(this.prevOp)} ${this.operation}`;
    } else {
      this.prevOpElement.innerText = '';
    }
  }
}

// use query selector to select elements with data names from index.html
const prevOpElement = document.querySelector('[data-prevOp]');
const currentOpElement = document.querySelector('[data-currentOp]');
const acBtn = document.querySelector('[data-ac]');
const delBtn = document.querySelector('[data-del]');
const eqlsBtn = document.querySelector('[data-equals]');
const numBtns = document.querySelectorAll('[data-num]');
const opBtns = document.querySelectorAll('[data-op]');

// create new calculator object
const calc = new Calculator(prevOpElement, currentOpElement);

// add click events for all buttons below
acBtn.addEventListener('click', button => {
  calc.clear();
  calc.updateDisplay();
});

delBtn.addEventListener('click', button => {
  calc.delete();
  calc.updateDisplay();
});

eqlsBtn.addEventListener('click', button => {
  calc.operate();
  calc.updateDisplay();
});

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    calc.apndNumAndRemoveDec(button.innerText);
    calc.updateDisplay();
  });
});

opBtns.forEach(button => {
  button.addEventListener('click', () => {
    calc.chooseOp(button.innerText);
    calc.updateDisplay();
  });
});