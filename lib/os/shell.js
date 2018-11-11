"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cross_spawn_1 = tslib_1.__importDefault(require("cross-spawn"));
var appendToObject_1 = tslib_1.__importDefault(require("immunity/lib/appendToObject"));
var emptyArray = [];
function shell(command, args, options) {
    if (args === void 0) { args = emptyArray; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var options_, proc;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options_ = tslib_1.__assign({ stdio: 'inherit', shell: false }, options, { env: (options !== undefined && options.env !== undefined) ?
                            appendToObject_1.default(process.env, options.env) :
                            process.env });
                    return [4, cross_spawn_1.default(command, args, options_)];
                case 1:
                    proc = _a.sent();
                    process.on('SIGTERM', function () { return proc.kill('SIGTERM'); });
                    return [2, proc];
            }
        });
    });
}
exports.default = shell;
//# sourceMappingURL=shell.js.map