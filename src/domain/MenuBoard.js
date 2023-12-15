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
}

export default MenuBoard;