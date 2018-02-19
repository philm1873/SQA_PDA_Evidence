var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add two numbers correctly', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should add two decimals correctly', function(){
    calculator.previousTotal = 2.5;
    calculator.add(3.6);
    assert.equal(calculator.runningTotal, 6.1)
  })

  it('it should add two negative numbers correctly', function(){
    calculator.previousTotal = -3;
    calculator.add(-3);
    assert.equal(calculator.runningTotal, -6)
  })

  it('it should subtract two numbers correctly', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should subtract two decimals correctly', function(){
    calculator.previousTotal = 2.5;
    calculator.subtract(1.2);
    assert.equal(calculator.runningTotal, 1.3)
  })

  it('it should subtract two negative numbers correctly', function(){
    calculator.previousTotal = -2.5;
    calculator.subtract(-1);
    assert.equal(calculator.runningTotal, -1.5)
  })

  it('it should multiply two numbers correctly', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should multiply two decimals correctly', function(){
    calculator.previousTotal = 4.2;
    calculator.multiply(0.5);
    assert.equal(calculator.runningTotal, 2.1)
  })

  it('it should multiply two negative numbers correctly', function(){
    calculator.previousTotal = -2;
    calculator.multiply(-1);
    assert.equal(calculator.runningTotal, 2)
  })

  it('it should divide two numbers correctly', function(){
    calculator.previousTotal = 8;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 4)
  })

  it('it should divide two decimals correctly', function(){
    calculator.previousTotal = 1.5;
    calculator.divide(0.5);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should divide two negative numbers correctly', function(){
    calculator.previousTotal = -8;
    calculator.divide(-4);
    assert.equal(calculator.runningTotal, 2)
  })

  it('it should divide two large numbers correctly', function(){
    calculator.previousTotal = 400000;
    calculator.divide(20000);
    assert.equal(calculator.runningTotal, 20)
  })

  // it('it should return infinity when dividing by zero', function(){
  //   calculator.previousTotal = 40;
  //   calculator.divide(0);
  //   assert.equal(calculator.runningTotal, Infinity)
  // })

  it('it should return undefined when dividing by zero', function(){
    calculator.previousTotal = 40;
    calculator.divide(0);
    assert.equal(calculator.runningTotal, 'undefined')
  })

  it('it should add number to running total using number click', function(){
    calculator.numberClick(4)
    assert.equal(calculator.runningTotal, 4)
  })

  it('it should concatenate number to running total using number click', function(){
    calculator.numberClick(4)
    calculator.numberClick(3)
    assert.equal(calculator.runningTotal, 43)
  })

  it('it should update previous operator when operatorClick called', function(){
    calculator.operatorClick('+')
    assert.equal(calculator.previousOperator, '+')
  })

  it('it should update running total and set previous operator to null when = pressed', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(9)
    calculator.operatorClick('=')
    assert.equal(calculator.previousOperator, null)
    assert.equal(calculator.runningTotal, 13)
  })

  it('it should chain operations', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(9)
    calculator.operatorClick('*')
    calculator.numberClick(9)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 117)
  })

  it('it should clear running total on clearClick', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })

  it('it should clear running total with affecting calculation', function(){
    calculator.numberClick(6)
    calculator.operatorClick('+')
    calculator.numberClick(6)
    calculator.clearClick()
    calculator.numberClick(8)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 14)
  })




});
