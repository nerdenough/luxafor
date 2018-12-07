/**
 * Sets the color for the chosen LEDs with the specified color values. Setting
 * the speed will fade to the new color instead of an instant change.
 * @param options Strobe options
 * @param options.led LEDs to use this effect
 * @param options.red Red color value
 * @param options.green Green color value
 * @param options.blue Blue color value
 * @param options.speed Fade speed
 */
declare function color(options: color_options): void

declare interface color_options {
  /**
   * LEDs to use this effect
   */
  led: Number
  /**
   * Red color value
   */
  red: Number
  /**
   * Green color value
   */
  green: Number
  /**
   * Blue color value
   */
  blue: Number
  /**
   * Fade speed
   */
  speed: Number
}

/**
 * Activates the strobe effect for the chosen LEDs with the specified color
 * values, speed, and repetitions.
 * @param options Strobe options
 * @param options.led LEDs to use this effect
 * @param options.red Red color value
 * @param options.green Green color value
 * @param options.blue Blue color value
 * @param options.speed Speed of the strobe effect
 * @param options.repeat Number of times to repeat the strobe effect
 */
declare function strobe(options: strobe_options): void

declare interface strobe_options {
  /**
   * LEDs to use this effect
   */
  led: Number
  /**
   * Red color value
   */
  red: Number
  /**
   * Green color value
   */
  green: Number
  /**
   * Blue color value
   */
  blue: Number
  /**
   * Speed of the strobe effect
   */
  speed: Number
  /**
   * Number of times to repeat the strobe effect
   */
  repeat: Number
}

/**
 * Activates one of 5 wave patterns with the specified color values, speed, and
 * repetitions. Affects all LEDs.
 * @param options Wave options
 * @param options.wave Wave type to show
 * @param options.red Red color value
 * @param options.green Green color value
 * @param options.blue Blue color value
 * @param options.speed Speed of the wave effect
 * @param options.repeat Number of times to repeat the wave effect
 */
declare function wave(options: wave_options): void

declare interface wave_options {
  /**
   * Wave type to show
   */
  wave: Number
  /**
   * Red color value
   */
  red: Number
  /**
   * Green color value
   */
  green: Number
  /**
   * Blue color value
   */
  blue: Number
  /**
   * Speed of the wave effect
   */
  speed: Number
  /**
   * Number of times to repeat the wave effect
   */
  repeat: Number
}

/**
 * Activates one of the 8 pre-programmed Luxafor patterns. Affects all LEDs.
 * @param options Pattern options
 * @param options.pattern Luxafor pattern to show
 * @param options.repeat Number of times to repeat the pattern
 */
declare function pattern(options: pattern_options): void

declare interface pattern_options {
  /**
   * Luxafor pattern to show
   */
  pattern: Number
  /**
   * Number of times to repeat the pattern
   */
  repeat: Number
}
