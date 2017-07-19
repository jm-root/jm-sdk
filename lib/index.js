'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jmEvent = require('jm-event');

var _jmEvent2 = _interopRequireDefault(_jmEvent);

var _jmLogger = require('jm-logger');

var _jmLogger2 = _interopRequireDefault(_jmLogger);

var _jmUtils = require('jm-utils');

var _jmUtils2 = _interopRequireDefault(_jmUtils);

var _jmErr = require('jm-err');

var _jmErr2 = _interopRequireDefault(_jmErr);

var _jmModule = require('jm-module');

var _jmModule2 = _interopRequireDefault(_jmModule);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 */
var Sdk = function () {

    /**
     * @constructor
     */
    function Sdk() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Sdk);

        this.storage = global.localStorage || _storage2.default;
        _jmErr2.default.enableErr(this);
        _jmModule2.default.enableModule(this);
        this.use(_jmEvent2.default.moduleEvent).use(_jmLogger2.default.moduleLogger).use(_jmUtils2.default.moduleUtils);
        this.init(opts);
    }

    _createClass(Sdk, [{
        key: 'init',
        value: function init() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.emit('init', opts);
        }
    }]);

    return Sdk;
}();

if (typeof global !== 'undefined' && global) {
    global.jm || (global.jm = {});
    var jm = global.jm;
    if (!jm.sdk) {
        jm.sdk = new Sdk();
    }
}

exports.default = Sdk;
module.exports = exports['default'];