import DateValidator from '../validation/DateValidator';

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
}

export default Calendar;