"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Luxafor = exports.LUXAFOR_PATTERN_POLICE = exports.LUXAFOR_MODE_PATTERN = exports.LUXAFOR_MODE_WAVE = exports.LUXAFOR_MODE_STROBE = exports.LUXAFOR_MODE_FADE = exports.LUXAFOR_MODE_COLOR = exports.LUXAFOR_LIGHT_ALL = exports.LUXAFOR_LIGHT_BACK = exports.LUXAFOR_LIGHT_FRONT = exports.LUXAFOR_LIGHT_6 = exports.LUXAFOR_LIGHT_5 = exports.LUXAFOR_LIGHT_4 = exports.LUXAFOR_LIGHT_3 = exports.LUXAFOR_LIGHT_2 = exports.LUXAFOR_LIGHT_1 = void 0;

var _nodeHid = require("node-hid");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Lights
var LUXAFOR_LIGHT_1 = 1;
exports.LUXAFOR_LIGHT_1 = LUXAFOR_LIGHT_1;
var LUXAFOR_LIGHT_2 = 2;
exports.LUXAFOR_LIGHT_2 = LUXAFOR_LIGHT_2;
var LUXAFOR_LIGHT_3 = 3;
exports.LUXAFOR_LIGHT_3 = LUXAFOR_LIGHT_3;
var LUXAFOR_LIGHT_4 = 4;
exports.LUXAFOR_LIGHT_4 = LUXAFOR_LIGHT_4;
var LUXAFOR_LIGHT_5 = 5;
exports.LUXAFOR_LIGHT_5 = LUXAFOR_LIGHT_5;
var LUXAFOR_LIGHT_6 = 6;
exports.LUXAFOR_LIGHT_6 = LUXAFOR_LIGHT_6;
var LUXAFOR_LIGHT_FRONT = 0x41;
exports.LUXAFOR_LIGHT_FRONT = LUXAFOR_LIGHT_FRONT;
var LUXAFOR_LIGHT_BACK = 0x42;
exports.LUXAFOR_LIGHT_BACK = LUXAFOR_LIGHT_BACK;
var LUXAFOR_LIGHT_ALL = 0xff; // Modes

exports.LUXAFOR_LIGHT_ALL = LUXAFOR_LIGHT_ALL;
var LUXAFOR_MODE_COLOR = 1;
exports.LUXAFOR_MODE_COLOR = LUXAFOR_MODE_COLOR;
var LUXAFOR_MODE_FADE = 2;
exports.LUXAFOR_MODE_FADE = LUXAFOR_MODE_FADE;
var LUXAFOR_MODE_STROBE = 3;
exports.LUXAFOR_MODE_STROBE = LUXAFOR_MODE_STROBE;
var LUXAFOR_MODE_WAVE = 4;
exports.LUXAFOR_MODE_WAVE = LUXAFOR_MODE_WAVE;
var LUXAFOR_MODE_PATTERN = 6; // Paterns

exports.LUXAFOR_MODE_PATTERN = LUXAFOR_MODE_PATTERN;
var LUXAFOR_PATTERN_POLICE = 5;
/**
 * Determines the transition bytes based on the mode being executed.
 *
 * @param {Number} mode Lighting mode
 * @param {Number} speed Transition speed
 * @param {Number} repeat Number of repetitions
 * @returns {Array} Transition bytes
 */

exports.LUXAFOR_PATTERN_POLICE = LUXAFOR_PATTERN_POLICE;

var getTransitionBytes = function getTransitionBytes(mode, speed, repeat) {
  var bytes = {};
  bytes[LUXAFOR_MODE_COLOR] = [0, 0, 0];
  bytes[LUXAFOR_MODE_FADE] = [speed, 0, 0];
  bytes[LUXAFOR_MODE_STROBE] = [speed, 0, repeat];
  bytes[LUXAFOR_MODE_WAVE] = [0, repeat, speed];
  bytes[LUXAFOR_MODE_PATTERN] = [0, 0, 0];
  return bytes[mode];
};
/**
 * @class Luxafor
 */


var Luxafor =
/*#__PURE__*/
function () {
  /**
   * Constructor for the Luxafor class. Connects to the Luxafor device.
   *
   * @param {Number} vid Vendor ID
   * @param {Number} pid Product ID
   */
  function Luxafor() {
    var vid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1240;
    var pid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 62322;

    _classCallCheck(this, Luxafor);

    this.reset();
    this.device = new _nodeHid.HID(vid, pid);
  }
  /**
   * Writes bytes for each of the specified lights and resets the data to its
   * default.
   */


  _createClass(Luxafor, [{
    key: "execute",
    value: function execute() {
      var _this = this;

      if (!this.data.lights.length) {
        this.write(this.data);
      }

      this.data.lights.forEach(function (light) {
        _this.data.light = light;

        _this.write(_this.data);
      });
      this.reset();
      return this;
    }
    /**
     * Resets all data to its default values.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.data = {
        color: {
          red: 0,
          green: 0,
          blue: 0
        },
        light: LUXAFOR_LIGHT_ALL,
        lights: [],
        mode: LUXAFOR_MODE_COLOR,
        speed: 0,
        repeat: 0
      };
    }
    /**
     * Sets the color as an RGB value.
     *
     * @param {Number} red Red color value (0-255)
     * @param {Number} green Green color value (0-255)
     * @param {Number} blue Blue color value (0-255)
     */

  }, {
    key: "setColor",
    value: function setColor(red, green, blue) {
      this.data.color = {
        red: red,
        green: green,
        blue: blue
      };
      return this;
    }
    /**
     * Sets the light to change.
     *
     * @param {Number} light Light to change
     */

  }, {
    key: "setLight",
    value: function setLight(light) {
      this.data.light = light;
      return this;
    }
    /**
     * Sets the lights to change.
     *
     * @param {Array} lights Lights to change
     */

  }, {
    key: "setLights",
    value: function setLights(lights) {
      this.data.lights = lights;
      return this;
    }
    /**
     * Sets the lighting mode.
     *
     * @param {Number} mode Lighting mode
     */

  }, {
    key: "setMode",
    value: function setMode(mode) {
      this.data.mode = mode;
      return this;
    }
    /**
     * Sets the Luxafor pattern.
     *
     * @param {Number} pattern Luxafor pattern
     */

  }, {
    key: "setPattern",
    value: function setPattern(pattern) {
      this.data.mode = LUXAFOR_MODE_PATTERN;
      this.data.pattern = pattern;
      return this;
    }
    /**
     * Sets the number of repetitions for a transition.
     *
     * @param {Number} repeat Number of repetitions
     */

  }, {
    key: "setRepeat",
    value: function setRepeat(repeat) {
      this.data.repeat = repeat;
      return this;
    }
    /**
     * Sets the speed of the transition.
     *
     * @param {Number} speed Transition speed
     */

  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this.data.speed = speed;
      return this;
    }
    /**
     * Writes bytes to Luxafor. If a default pattern is specified it will override
     * the selection of lights.
     *
     * @param {Object} data Data to write to Luxafor
     * @param {Object} data.color RGB color values
     * @param {Number} data.color.red Red color value (0-255)
     * @param {Number} data.color.green Green color value (0-255)
     * @param {Number} data.color.blue Blue color value (0-255)
     * @param {Number} data.light Light to change
     * @param {Number} data.mode Luxafor mode
     * @param {Number} data.pattern Luxafor pattern
     * @param {Number} data.repeat Times to repeat the transition (0-255)
     * @param {Number} data.speed Speed of the transition (0-255)
     */

  }, {
    key: "write",
    value: function write(_ref) {
      var color = _ref.color,
          light = _ref.light,
          mode = _ref.mode,
          pattern = _ref.pattern,
          speed = _ref.speed,
          repeat = _ref.repeat;
      var bytes = [mode, pattern || light, color.red, color.green, color.blue];
      this.device.write(bytes.concat(_toConsumableArray(getTransitionBytes(mode, speed, repeat))));
      return this;
    }
  }]);

  return Luxafor;
}();

exports.Luxafor = Luxafor;