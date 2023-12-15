import Calendar from '../domain/Calendar';
import InputView from '../view/InputView';

class PromotionController {
  #calendar;

  async reserveDate() {
    const reservedDate = await InputView.readDate();
    this.#calendar = new Calendar(reservedDate);  
  }
}

export default PromotionController;