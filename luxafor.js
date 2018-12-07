const HID = require('node-hid').HID

// Ids for the Luxafor device
const vid = 0x04d8
const pid = 0xf372

// Nil byte
const NIL = 0x00

// Modes
const LUXAFOR_MODE_COLOR = 0x01
const LUXAFOR_MODE_FADE = 0x02
const LUXAFOR_MODE_STROBE = 0x03
const LUXAFOR_MODE_WAVE = 0x04
const LUXAFOR_MODE_PATTERN = 0x06

// LEDs
const LUXAFOR_LED_1 = 0x01
const LUXAFOR_LED_2 = 0x02
const LUXAFOR_LED_3 = 0x03
const LUXAFOR_LED_4 = 0x04
const LUXAFOR_LED_5 = 0x05
const LUXAFOR_LED_6 = 0x06
const LUXAFOR_LED_A = 0x41
const LUXAFOR_LED_B = 0x42
const LUXAFOR_LED_ALL = 0xff

// Waves
const LUXAFOR_WAVE_1 = 0x01
const LUXAFOR_WAVE_2 = 0x02
const LUXAFOR_WAVE_3 = 0x03
const LUXAFOR_WAVE_4 = 0x04
const LUXAFOR_WAVE_5 = 0x05

// Patterns
const LUXAFOR_PATTERN_1 = 0x01
const LUXAFOR_PATTERN_2 = 0x02
const LUXAFOR_PATTERN_3 = 0x03
const LUXAFOR_PATTERN_4 = 0x04
const LUXAFOR_PATTERN_5 = 0x05
const LUXAFOR_PATTERN_6 = 0x06
const LUXAFOR_PATTERN_7 = 0x07
const LUXAFOR_PATTERN_8 = 0x08

const device = new HID(vid, pid)
const write = bytes => device.write(bytes)

/**
 * Sets the color for the chosen LEDs with the specified color values. Setting
 * the speed will fade to the new color instead of an instant change.
 *
 * @param {Object} options Strobe options
 * @param {Number} options.led LEDs to use this effect
 * @param {Number} options.red Red color value
 * @param {Number} options.green Green color value
 * @param {Number} options.blue Blue color value
 * @param {Number} options.speed Fade speed
 */
const color = ({
  led = LUXAFOR_LED_ALL,
  red = 0,
  green = 0,
  blue = 0,
  speed = 0
}) => {
  const mode = speed ? LUXAFOR_MODE_FADE : LUXAFOR_MODE_COLOR
  return write([mode, led, red, green, blue, speed, NIL, NIL])
}

/**
 * Activates the strobe effect for the chosen LEDs with the specified color
 * values, speed, and repetitions.
 *
 * @param {Object} options Strobe options
 * @param {Number} options.led LEDs to use this effect
 * @param {Number} options.red Red color value
 * @param {Number} options.green Green color value
 * @param {Number} options.blue Blue color value
 * @param {Number} options.speed Speed of the strobe effect
 * @param {Number} options.repeat Number of times to repeat the strobe effect
 */
const strobe = ({
  led = LUXAFOR_LED_ALL,
  red = 0,
  green = 0,
  blue = 0,
  speed = 10,
  repeat = 5
}) => write([LUXAFOR_MODE_STROBE, led, red, green, blue, speed, NIL, repeat])

/**
 * Activates one of 5 wave patterns with the specified color values, speed, and
 * repetitions. Affects all LEDs.
 *
 * @param {Object} options Wave options
 * @param {Number} options.wave Wave type to show
 * @param {Number} options.red Red color value
 * @param {Number} options.green Green color value
 * @param {Number} options.blue Blue color value
 * @param {Number} options.speed Speed of the wave effect
 * @param {Number} options.repeat Number of times to repeat the wave effect
 */
const wave = ({
  wave = LUXAFOR_WAVE_1,
  red = 0,
  green = 0,
  blue = 0,
  speed = 10,
  repeat = 5
}) => write([LUXAFOR_MODE_WAVE, wave, red, green, blue, NIL, repeat, speed])

/**
 * Activates one of the 8 pre-programmed Luxafor patterns. Affects all LEDs.
 *
 * @param {Object} options Pattern options
 * @param {Number} options.pattern Luxafor pattern to show
 * @param {Number} options.repeat Number of times to repeat the pattern
 */
const pattern = ({ pattern = LUXAFOR_PATTERN_1, repeat = 5 }) =>
  write([LUXAFOR_MODE_PATTERN, pattern, repeat, NIL, NIL, NIL, NIL, NIL])

// Export everything
module.exports = {
  color,
  strobe,
  wave,
  pattern,

  // LEDs
  LUXAFOR_LED_1,
  LUXAFOR_LED_2,
  LUXAFOR_LED_3,
  LUXAFOR_LED_4,
  LUXAFOR_LED_5,
  LUXAFOR_LED_6,
  LUXAFOR_LED_A,
  LUXAFOR_LED_B,
  LUXAFOR_LED_ALL,

  // Waves
  LUXAFOR_WAVE_1,
  LUXAFOR_WAVE_2,
  LUXAFOR_WAVE_3,
  LUXAFOR_WAVE_4,
  LUXAFOR_WAVE_5,

  // Patterns
  LUXAFOR_PATTERN_1,
  LUXAFOR_PATTERN_2,
  LUXAFOR_PATTERN_3,
  LUXAFOR_PATTERN_4,
  LUXAFOR_PATTERN_5,
  LUXAFOR_PATTERN_6,
  LUXAFOR_PATTERN_7,
  LUXAFOR_PATTERN_8
}
