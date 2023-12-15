import { SYMBOL } from '../constants/string'

export const strMenuTostrArrMenu = (strMenu) => strMenu.split(SYMBOL.comma);

export const menuSplitWithCount = (menuArr) => menuArr.map(menuWithCount => menuWithCount.split(SYMBOL.dash));