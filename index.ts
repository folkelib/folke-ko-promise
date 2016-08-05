import * as ko from "knockout";
import * as Promise from "es6-promise"

export function register(){
    ko.subscribable.fn['whenNotNull'] = function() {
        if (this()) {
            return Promise.Promise.resolve(this());
        } else {
            return new Promise.Promise<any>((resolve, reject) => {
                var sub = (<ko.Subscribable<any>>this).subscribe(newValue => {
                    resolve(newValue);
                    sub.dispose();
                });
            });
        }
    }
}
