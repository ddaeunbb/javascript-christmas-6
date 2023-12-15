import PromotionController from './controller/PromotionController';

class App {
  #controller = new PromotionController();

  async run() {
    await this.#controller.reserveDate();
  }
}

export default App;
