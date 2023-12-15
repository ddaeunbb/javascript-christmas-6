import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

const InputView = Object.freeze({
    async readDate() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.readDate);
        return input
    },

    async readMenu() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.readMenu);
        return input
    }
});

export default InputView;