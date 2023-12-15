import { MENU_BOARD } from '../constants/menu';
import MenuListValidator from '../validation/MenuListValidator';
import { menuSplitWithCount } from '../convertor/Convertor';
/**
 * @classdesc MenuBoard
 * 주문한 음식 리스트를 저장합니다. 총 메뉴의 개수와 금액을 관리합니다.
 */
class MenuBoard {
  #menuList;

  constructor(menuList) {
    MenuListValidator.validateMenuList(menuList);
    this.#menuList = menuSplitWithCount(menuList);
  }

  calculateTotalCost() {
    let cost = 0;
    this.#menuList.forEach(([menu, count]) => {
      cost += MENU_BOARD[menu] * Number(count);
    })
    return cost;
  }
}

export default MenuBoard;