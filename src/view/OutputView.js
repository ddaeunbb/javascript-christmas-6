import { Console } from '@woowacourse/mission-utils';
import { UNIT } from '../constants/string';
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
        Console.print(`${cost}${UNIT.won}\n`);
        Console.print(OUPUT_MESSAGE.printGift);
        if(cost >= 120000) Console.print(OUPUT_MESSAGE.printChampagne)
        else Console.print(OUPUT_MESSAGE.printNone);
    },
});

export default OutputView;