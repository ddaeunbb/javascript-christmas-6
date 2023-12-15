import { REGEX_THOUSAND } from '../constants/regex';
import { SYMBOL } from '../constants/string'

export const strMenuTostrArrMenu = (strMenu) => strMenu.split(SYMBOL.comma);

export const menuSplitWithCount = (menuArr) => menuArr.map(menuWithCount => menuWithCount.split(SYMBOL.dash));

export const numWithThousandComma = (num) => num.toString().replace(REGEX_THOUSAND, SYMBOL.comma);