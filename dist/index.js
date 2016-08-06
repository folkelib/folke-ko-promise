"use strict";
var knockout = require("knockout");
function register() {
    knockout.subscribable.fn['whenNotNull'] = function () {
        var _this = this;
        if (this()) {
            return Promise.resolve(this());
        }
        else {
            return new Promise(function (resolve, reject) {
                var sub = _this.subscribe(function (newValue) {
                    resolve(newValue);
                    sub.dispose();
                });
            });
        }
    };
}
exports.register = register;
