import { HID } from 'node-hid'

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
export const LUXAFOR_LED_1 = 0x01
export const LUXAFOR_LED_2 = 0x02
export const LUXAFOR_LED_3 = 0x03
export const LUXAFOR_LED_4 = 0x04
export const LUXAFOR_LED_5 = 0x05
export const LUXAFOR_LED_6 = 0x06
export const LUXAFOR_LED_A = 0x41
export const LUXAFOR_LED_B = 0x42
export const LUXAFOR_LED_ALL = 0xff

// Waves
export const LUXAFOR_WAVE_1 = 0x01
export const LUXAFOR_WAVE_2 = 0x02
export const LUXAFOR_WAVE_3 = 0x03
export const LUXAFOR_WAVE_4 = 0x04
export const LUXAFOR_WAVE_5 = 0x05

// Patterns
export const LUXAFOR_PATTERN_1 = 0x01
export const LUXAFOR_PATTERN_2 = 0x02
export const LUXAFOR_PATTERN_3 = 0x03
export const LUXAFOR_PATTERN_4 = 0x04
export const LUXAFOR_PATTERN_5 = 0x05
export const LUXAFOR_PATTERN_6 = 0x06
export const LUXAFOR_PATTERN_7 = 0x07
export const LUXAFOR_PATTERN_8 = 0x08

const device = new HID(vid, pid)
const write = bytes => device.write(bytes)

/**
 * Sets the colour for the chosen LEDs with the specified colour values. Setting
 * the speed will fade to the new colour instead of an instant change.
 *
 * @param {Object} options Strobe options
 * @param {Number} options.led LEDs to use this effect
 * @param {Number} options.red Red color value
 * @param {Number} options.green Green color value
 * @param {Number} options.blue Blue color value
 * @param {Number} options.speed Fade speed
 */
export const color = ({
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
export const strobe = ({
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
export const wave = ({
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
export const pattern = ({ pattern = LUXAFOR_PATTERN_1, repeat = 5 }) =>
  write([LUXAFOR_MODE_PATTERN, pattern, repeat, NIL, NIL, NIL, NIL, NIL])
