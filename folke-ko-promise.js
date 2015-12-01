define(["require", "exports", "knockout", "es6-promise"], function (require, exports, ko, Promise) {
    ko.subscribable.fn.whenNotNull = function () {
        var _this = this;
        if (this()) {
            return Promise.Promise.resolve(this());
        }
        else {
            return new Promise.Promise(function (resolve, reject) {
                var sub = _this.subscribe(function (newValue) {
                    resolve(newValue);
                    sub.dispose();
                });
            });
        }
    };
});
