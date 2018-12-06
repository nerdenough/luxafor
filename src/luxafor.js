import { HID } from 'node-hid'

// Lights
export const LUXAFOR_LIGHT_1 = 1
export const LUXAFOR_LIGHT_2 = 2
export const LUXAFOR_LIGHT_3 = 3
export const LUXAFOR_LIGHT_4 = 4
export const LUXAFOR_LIGHT_5 = 5
export const LUXAFOR_LIGHT_6 = 6
export const LUXAFOR_LIGHT_FRONT = 0x41
export const LUXAFOR_LIGHT_BACK = 0x42
export const LUXAFOR_LIGHT_ALL = 0xff

// Modes
export const LUXAFOR_MODE_COLOR = 1
export const LUXAFOR_MODE_FADE = 2
export const LUXAFOR_MODE_STROBE = 3
export const LUXAFOR_MODE_WAVE = 4
export const LUXAFOR_MODE_PATTERN = 6

// Paterns
export const LUXAFOR_PATTERN_POLICE = 5

/**
 * Determines the transition bytes based on the mode being executed.
 *
 * @param {Number} mode Lighting mode
 * @param {Number} speed Transition speed
 * @param {Number} repeat Number of repetitions
 * @returns {Array} Transition bytes
 */
const getTransitionBytes = (mode, speed, repeat) => {
  const bytes = {}
  bytes[LUXAFOR_MODE_COLOR] = [0, 0, 0]
  bytes[LUXAFOR_MODE_FADE] = [speed, 0, 0]
  bytes[LUXAFOR_MODE_STROBE] = [speed, 0, repeat]
  bytes[LUXAFOR_MODE_WAVE] = [0, repeat, speed]
  bytes[LUXAFOR_MODE_PATTERN] = [0, 0, 0]

  return bytes[mode]
}

export class Luxafor {
  /**
   * Constructor for the Luxafor class. Connects to the Luxafor device.
   *
   * @param {Number} vid Vendor ID
   * @param {Number} pid Product ID
   */
  constructor(vid = 1240, pid = 62322) {
    this.reset()
    this.device = new HID(vid, pid)
  }

  /**
   * Writes bytes for each of the specified lights and resets the data to its
   * default.
   */
  execute() {
    if (!this.data.lights.length) {
      this.write(this.data)
    }

    this.data.lights.forEach(light => {
      this.data.light = light
      this.write(this.data)
    })

    this.reset()
    return this
  }

  /**
   * Resets all data to its default values.
   */
  reset() {
    this.data = {
      color: { red: 0, green: 0, blue: 0 },
      light: LUXAFOR_LIGHT_ALL,
      lights: [],
      mode: LUXAFOR_MODE_COLOR,
      speed: 0,
      repeat: 0
    }
  }

  /**
   * Sets the color as an RGB value.
   *
   * @param {Number} red Red color value (0-255)
   * @param {Number} green Green color value (0-255)
   * @param {Number} blue Blue color value (0-255)
   */
  setColor(red, green, blue) {
    this.data.color = { red, green, blue }
    return this
  }

  /**
   * Sets the light to change.
   *
   * @param {Number} light Light to change
   */
  setLight(light) {
    this.data.light = light
    return this
  }

  /**
   * Sets the lights to change.
   *
   * @param {Array} lights Lights to change
   */
  setLights(lights) {
    this.data.lights = lights
    return this
  }

  /**
   * Sets the lighting mode.
   *
   * @param {Number} mode Lighting mode
   */
  setMode(mode) {
    this.data.mode = mode
    return this
  }

  /**
   * Sets the Luxafor pattern.
   *
   * @param {Number} pattern Luxafor pattern
   */
  setPattern(pattern) {
    this.data.mode = LUXAFOR_MODE_PATTERN
    this.data.pattern = pattern
    return this
  }

  /**
   * Sets the number of repetitions for a transition.
   *
   * @param {Number} repeat Number of repetitions
   */
  setRepeat(repeat) {
    this.data.repeat = repeat
    return this
  }

  /**
   * Sets the speed of the transition.
   *
   * @param {Number} speed Transition speed
   */
  setSpeed(speed) {
    this.data.speed = speed
    return this
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
  write({ color, light, mode, pattern, speed, repeat }) {
    const bytes = [mode, pattern || light, color.red, color.green, color.blue]
    this.device.write([...bytes, ...getTransitionBytes(mode, speed, repeat)])
    return this
  }
}
