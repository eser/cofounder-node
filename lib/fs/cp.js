"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("graceful-fs"));
function cp(pathstr, dest) {
    return new Promise(function (resolve, reject) {
        try {
            fs.createReadStream(pathstr)
                .pipe(fs.createWriteStream(dest));
            resolve();
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.default = cp;
//# sourceMappingURL=cp.js.map