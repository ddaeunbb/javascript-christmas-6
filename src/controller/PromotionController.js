import MenuBoard from '../domain/MenuBoard';
import Calendar from '../domain/Calendar';
import InputView from '../view/InputView';
import { strMenuTostrArrMenu } from '../convertor/Convertor';

class PromotionController {
  #calendar;
  #menuBoard;

  async reserveDate() {
    const reservedDate = await InputView.readDate();
    this.#calendar = new Calendar(reservedDate);  
  }

  async orderMenu() {
    const orderedMenu = await InputView.readMenu();
    this.#menuBoard = new MenuBoard(strMenuTostrArrMenu(orderedMenu));
  }
}

export default PromotionController;