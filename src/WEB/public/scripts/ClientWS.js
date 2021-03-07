/// <reference path="../../../util/@types/wss.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// @ts-ignore
var ClientWS = /** @class */ (function () {
    function ClientWS() {
    }
    ClientWS.init = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.init = Date.now();
                this.socket = new WebSocket("ws://localhost:1337");
                this.props.connect = Date.now();
                this.token = t;
                this.socket.addEventListener("message", this.msgHandler.bind(this));
                this.socket.addEventListener("open", this.handle.bind(this));
                this.socket.addEventListener("close", this.closeHandler.bind(this));
                this.socket.addEventListener("error", this.errorHandler.bind(this));
                return [2 /*return*/];
            });
        });
    };
    ClientWS.handle = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ClientWS.msgHandler = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var dt;
            return __generator(this, function (_a) {
                dt = JSON.parse(ev.data);
                if (dt.s)
                    this.sq = dt.s;
                switch (dt.op) {
                    // HELLO > Respond With Auth
                    case 0: {
                        this.props.hello = Date.now();
                        this.sendMsg({
                            op: 3,
                            d: {
                                t: this.token
                            }
                        });
                        this.hb_int = dt.d.heartbeatInterval;
                        break;
                    }
                    // READY > Start Heartbeat
                    case 4: {
                        this.startHeartbeat(this.hb_int);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ClientWS.errorHandler = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ClientWS.closeHandler = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ClientWS.quit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ClientWS.startHeartbeat = function (int) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.timeout = setInterval(function () {
                    _this.props.hb = Date.now();
                    _this.sendMsg({
                        op: 2,
                        d: _this.sq
                    });
                }, int);
                return [2 /*return*/];
            });
        });
    };
    ClientWS.stopHeartbeat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.timeout)
                    clearInterval(this.timeout);
                return [2 /*return*/];
            });
        });
    };
    ClientWS.sendMsg = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.socket.send(JSON.stringify(d));
                return [2 /*return*/];
            });
        });
    };
    ClientWS.props = {
        init: null,
        connect: null,
        open: null,
        hello: null,
        ready: null,
        hb: null,
        hb_ack: null
    };
    return ClientWS;
}());
(function () { return __awaiter(_this, void 0, void 0, function () {
    var tkn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tkn = localStorage.getItem("token");
                if (tkn === null)
                    return [2 /*return*/, window.location.href = "/login"];
                // Start Socket Connection
                return [4 /*yield*/, ClientWS.init(tkn)];
            case 1:
                // Start Socket Connection
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
