import { STR_DAY } from '../constants/string';
import { NUM, NUM_DATE, NUM_SPECIAL_DATE } from '../constants/number';
import DateValidator from '../validation/DateValidator';
import { MENU_BOARD } from '../constants/menu';

/**
 * @classdesc Calendar
 * 예약한 날짜를 저장하고, 날짜가 해당되는 할인 관련 내용을 관리합니다.
 */
class Calendar {
  #date; // number

  constructor(reservedDate) {
    DateValidator.validateDate(reservedDate);
    this.#date = Number(reservedDate);
  }

  isInSpecialDate() {
    if(NUM_SPECIAL_DATE.includes(this.#date)) return true;
    return false;
  }

  isWeekOrWeekend() {
    const { year, month } = NUM_DATE;
    const date = new Date(year, month, this.#date);
    if(date >= NUM_DATE.weekend) return STR_DAY.weekend;
    return STR_DAY.week;
  }

  calculateDayDiscount(dessertCount, mainCount, totalDiscount) {
    const dayofWeek = this.isWeekOrWeekend();
    if(dayofWeek === STR_DAY.weekend) totalDiscount.set('weekend', mainCount * NUM_DATE.year)
    else totalDiscount.set('week', dessertCount * NUM_DATE.year);
  }

  calculateElseDiscount(totalDiscount) {
    if(this.#date <= NUM_DATE.christmas ){
      totalDiscount.set('christmas', NUM_DATE.basicDiscount + (this.#date - NUM.one) * NUM_DATE.christmasDayDiscount);
    } else totalDiscount.set('christmas', NUM.zero);
    if(this.isInSpecialDate()) totalDiscount.set('special', NUM_DATE.basicDiscount)
    else totalDiscount.set('special', NUM.zero);
  }

  calculateTotalDiscount(dessertCount, mainCount, gift) {
    const totalDiscount = new Map();
    this.calculateElseDiscount(totalDiscount);
    this.calculateDayDiscount(dessertCount, mainCount, totalDiscount);
    if(gift) totalDiscount.set('gift', MENU_BOARD.샴페인);
    else totalDiscount.set('gift', NUM.zero);
    return totalDiscount;
  }
}

export default Calendar;