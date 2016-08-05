"use strict";
var ko = require("knockout");
var Promise = require("es6-promise");
function register() {
    ko.subscribable.fn['whenNotNull'] = function () {
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
}
exports.register = register;
