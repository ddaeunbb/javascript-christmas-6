import { Console } from '@woowacourse/mission-utils';
import { numWithThousandComma } from '../convertor/Convertor';
import { UNIT } from '../constants/string';
import { NUM_MENU } from '../constants/number';
import { OUPUT_MESSAGE } from '../constants/message';

const OutputView = Object.freeze({
    printMenu(menuList) {
        Console.print(OUPUT_MESSAGE.printMenu);
        menuList.forEach(([menu, count]) => {
            Console.print(`${menu} ${count}${UNIT.count}\n`);
        })
    },

    printTotalCost(cost) {
        Console.print(OUPUT_MESSAGE.printTotalCost);
        Console.print(`${numWithThousandComma(cost)}${UNIT.won}\n`);
        Console.print(OUPUT_MESSAGE.printGift);
        if(cost >= NUM_MENU.receiveGift) Console.print(OUPUT_MESSAGE.printChampagne)
        else Console.print(OUPUT_MESSAGE.printNone);
    },

    printTotalDiscount(totalDiscount) {
        Console.print(OUPUT_MESSAGE.printBenefit);
        totalDiscount.forEach((val, key) => {
            const valWithComma = numWithThousandComma(val);
            if(key === 'christmas' && val > 0) Console.print(`${OUPUT_MESSAGE.printChristmas}${valWithComma}${UNIT.won}`);
            if(key === 'week' && val > 0) Console.print(`${OUPUT_MESSAGE.printWeek}${valWithComma}${UNIT.won}`)
            if(key === 'weekend' && val > 0) Console.print(`${OUPUT_MESSAGE.printWeekend}${valWithComma}${UNIT.won}`)
            if(key === 'special' && val > 0) Console.print(`${OUPUT_MESSAGE.printSpecial}${valWithComma}${UNIT.won}`)
            if(key === 'gift' && val > 0) Console.print(`${OUPUT_MESSAGE.printGiftDiscount}${valWithComma}${UNIT.won}`)
        })
    },

    printNone() {
        Console.print(OUPUT_MESSAGE.printBenefit);
        Console.print(OUPUT_MESSAGE.printNone);
    },

    printTotalDiscountSum(discountSum) {
        Console.print(`${OUPUT_MESSAGE.printTotalDiscountSum}${numWithThousandComma(discountSum)}${UNIT.won}`)
    }
});

export default OutputView;