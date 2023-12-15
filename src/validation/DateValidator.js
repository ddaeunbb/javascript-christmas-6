import { NUM_DATE } from '../constants/number';
import { ERROR_MESSAGE } from '../constants/error';
import { REGEX_NUM } from '../constants/regex';
import CustomError from '../exception/CustomError';

/**
 * @classdesc DateValidator
 * 날짜 입력에 대해서 검증을 진행합니다.
*/
class DateValidator {
  /**
   * @param {string} date
   * 날짜 입력에 대해서 검증을 진행합니다.
  */
  static isNumber(date) {
    if(!REGEX_NUM.test(date)) throw new CustomError(ERROR_MESSAGE.shouldBeValidDate);
  }

  /**
   * @param {string} date
   * 날짜가 1이상 31이하인지 확인합니다.
  */
  static isBetweenInDecember(date) {
    const dateNum = Number(date);
    const { start, end } = NUM_DATE;
    if(!(dateNum >= start && dateNum <= end)) throw new CustomError(ERROR_MESSAGE.shouldBeValidDate);
  }

  static validateDate(date) {
    this.isNumber(date);
    this.isBetweenInDecember(date);
  }
}

export default DateValidator;