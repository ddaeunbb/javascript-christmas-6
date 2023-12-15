import { Console } from '@woowacourse/mission-utils';
import PromotionController from './controller/PromotionController';

class App {
  #controller = new PromotionController();

  async run() {
    try{
      await this.#controller.reserveDate();
      await this.#controller.orderMenu();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
