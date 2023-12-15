import OutputView from '../view/OutputView';
import MenuBoard from '../domain/MenuBoard';
import Calendar from '../domain/Calendar';
import InputView from '../view/InputView';
import { strMenuTostrArrMenu, menuSplitWithCount } from '../convertor/Convertor';

class PromotionController {
  #calendar;
  #menuBoard;

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


}

export default PromotionController;