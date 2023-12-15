import { NUM_MENU } from '../constants/number';
import { REGEX_NUM } from '../constants/regex';
import { MENU_TOTAL } from '../constants/menu';
import { menuSplitWithCount } from '../convertor/Convertor';
import CustomError from '../exception/CustomError';
import { ERROR_MESSAGE } from '../constants/error';

/**
 * @classdesc MenuListValidator
 * 메뉴 입력에 대해서 검증을 진행합니다.
*/

class MenuListValidator {
  /**
   * @param {string[]} menuList
   * 날짜 입력에 대해서 검증을 진행합니다.
  */
  static isUniqueMenu(menuList) {
    const uniqueMenu = new Set(menuList); 
    if(menuList.length !== uniqueMenu.size) throw new CustomError(ERROR_MESSAGE.shouldBeValidMenuList);
  }

  /**
   * @param {string} menu
   * 메뉴가 메뉴판에 포함되어있는지 확인합니다.
  */
  static isIncludedInMenuBoard(menu) {
    if(!MENU_TOTAL.includes(menu)) throw new CustomError(ERROR_MESSAGE.shouldBeValidMenuList);
  }

  /**
   * @param {string} count
   * 메뉴의 숫자가 숫자인지 확인하고, 1개 이상 20개 이하의 숫자인지 확인합니다.
  */
  static isValidMenuCount(count) {
    const { minCount, maxCount } = NUM_MENU;
    const countNum = Number(count);
    if(!REGEX_NUM.test(count)) throw new CustomError(ERROR_MESSAGE.shouldBeValidMenuList);
    if(!(countNum >= minCount && countNum <= maxCount)) throw new CustomError(ERROR_MESSAGE.shouldBeValidMenuList);
  }

  /**
   * @param {number} count
   * 주문한 총 메뉴의 개수가 20 이하인지 확인합니다.
  */
  static isValidTotalCount(totalCount) {
    if(!(totalCount <= NUM_MENU.maxCount)) throw new CustomError(ERROR_MESSAGE.shouldBeValidMenuList);
  }

  static validateMenuList(menuList) {
    let totalCount = 0;
    this.isUniqueMenu(menuList);
    const menuWithCount = menuSplitWithCount(menuList);
    menuWithCount.forEach(([menu, count]) => {
      this.isIncludedInMenuBoard(menu);
      this.isValidMenuCount(count);
      totalCount += Number(count);
    })
    this.isValidTotalCount(totalCount);
  }
}

export default MenuListValidator;