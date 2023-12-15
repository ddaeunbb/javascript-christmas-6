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
        Console.print(`${cost}${UNIT.won}`);
    }
});

export default OutputView;