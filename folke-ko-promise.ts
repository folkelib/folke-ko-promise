/// <reference path="./folke-ko.d.ts" />
import * as ko from "knockout";
import * as Promise from "es6-promise"

ko.subscribable.fn.whenNotNull = function() {
    if (this()) {
        return Promise.Promise.resolve(this());
    } else {
        return new Promise.Promise<any>((resolve, reject) => {
            var sub = (<KnockoutSubscribable<any>>this).subscribe(newValue => {
                resolve(newValue);
                sub.dispose();
            });
        });
    }
}
