class Calculator {
  #discountSum;

  calculateDiscountSum(totalDiscount) {
    let sum = 0;
    totalDiscount.forEach((val) => { sum += val });
    this.#discountSum = sum;
    return sum;
  }

  
}

export default Calculator;