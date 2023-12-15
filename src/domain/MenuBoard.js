import { MENU_KIND , MENU_BOARD } from '../constants/menu';
import { NUM_MENU } from '../constants/number';
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

  calculateReceiveGift() {
    const cost = this.calculateTotalCost();
    if(cost >= NUM_MENU.receiveGift) return true;
    return false;
  }

  calculateMainAndDessert() {
    let dessert = 0;
    let main = 0;
    this.#menuList.forEach(([menu,]) => {
      if(MENU_KIND['메인'].includes(menu)) main += 1;
      if(MENU_KIND['디저트'].includes(menu)) dessert += 1;
    })
    return { dessert, main };
  }
}

export default MenuBoard;