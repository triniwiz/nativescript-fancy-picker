import { isIOS } from 'tns-core-modules/platform';
import { fromObject } from 'tns-core-modules/data/observable';

let vm;

export function loaded() {
    vm = fromObject({
        isIOS: isIOS
    });
}

export function goToHome(args) {

}