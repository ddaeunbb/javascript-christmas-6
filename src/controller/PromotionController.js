import OutputView from '../view/OutputView';
import MenuBoard from '../domain/MenuBoard';
import Calendar from '../domain/Calendar';
import InputView from '../view/InputView';
import { strMenuTostrArrMenu, menuSplitWithCount } from '../convertor/Convertor';
import Calculator from '../domain/Calculator';

class PromotionController {
  #calendar;
  #menuBoard;
  #calculator = new Calculator();

  async reserveDate() {
    const reservedDate = await InputView.readDate();
    this.#calendar = new Calendar(reservedDate);  
  }

  async orderMenu() {
    const orderedMenu = await InputView.readMenu();
    const menuList = strMenuTostrArrMenu(orderedMenu);
    this.#menuBoard = new MenuBoard(menuList);
    OutputView.printMenu(menuSplitWithCount(menuList));
    const totalCost = this.#menuBoard.calculateTotalCost();
    OutputView.printTotalCost(totalCost);
  }

  issueReceipt() {
    const { dessert, main } = this.#menuBoard.calculateMainAndDessert();
    const gift = this.#menuBoard.calculateReceiveGift();
    const totalDiscount = this.#calendar.calculateTotalDiscount(dessert, main, gift);
    const discountSum = this.#calculator.calculateDiscountSum(totalDiscount);
    if(discountSum === 0) OutputView.printNone();
    else OutputView.printTotalDiscount(totalDiscount);
    OutputView.printTotalDiscountSum(discountSum);
  }

  calculateTotalCost() {
    
  }
}

export default PromotionController;