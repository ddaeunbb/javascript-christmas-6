import { Console } from '@woowacourse/mission-utils';
import { UNIT } from '../constants/string';
import { OUPUT_MESSAGE } from '../constants/message';

const OutputView = {
    printMenu(menuList) {
        Console.print(OUPUT_MESSAGE.printMenu);
        menuList.forEach(([menu, count]) => {
            Console.print(`${menu} ${count}${UNIT.count}\n`);
        })
    }
}

export default OutputView;