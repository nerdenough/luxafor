/**
 * Determines the transition bytes based on the mode being executed.
 * @param mode Lighting mode
 * @param speed Transition speed
 * @param repeat Number of repetitions
 * @returns Transition bytes
 */
declare function getTransitionBytes(mode: Number, speed: Number, repeat: Number): any[];

declare class Luxafor {
    constructor();


    /**
     * Writes bytes for each of the specified lights and resets the data to its
     * default.
     */
    execute(): void;

    /**
     * Resets all data to its default values.
     */
    reset(): void;

    /**
     * Sets the color as an RGB value.
     * @param red Red color value (0-255)
     * @param green Green color value (0-255)
     * @param blue Blue color value (0-255)
     */
    setColor(red: Number, green: Number, blue: Number): void;

    /**
     * Sets the light to change.
     * @param light Light to change
     */
    setLight(light: Number): void;

    /**
     * Sets the lights to change.
     * @param lights Lights to change
     */
    setLights(lights: any[]): void;

    /**
     * Sets the lighting mode.
     * @param mode Lighting mode
     */
    setMode(mode: Number): void;

    /**
     * Sets the Luxafor pattern.
     * @param pattern Luxafor pattern
     */
    setPattern(pattern: Number): void;

    /**
     * Sets the number of repetitions for a transition.
     * @param repeat Number of repetitions
     */
    setRepeat(repeat: Number): void;

    /**
     * Sets the speed of the transition.
     * @param speed Transition speed
     */
    setSpeed(speed: Number): void;

    /**
     * Writes bytes to Luxafor. If a default pattern is specified it will override
     * the selection of lights.
     * @param data Data to write to Luxafor
     * @param data.color RGB color values
     * @param data.color.red Red color value (0-255)
     * @param data.color.green Green color value (0-255)
     * @param data.color.blue Blue color value (0-255)
     * @param data.light Light to change
     * @param data.mode Luxafor mode
     * @param data.pattern Luxafor pattern
     * @param data.repeat Times to repeat the transition (0-255)
     * @param data.speed Speed of the transition (0-255)
     */
    write(data: write_data): void;

}

declare interface write_data {
    /**
     * RGB color values
     */
    color: Object;
    /**
     * Red color value (0-255)
     */
    "color.red": Number;
    /**
     * Green color value (0-255)
     */
    "color.green": Number;
    /**
     * Blue color value (0-255)
     */
    "color.blue": Number;
    /**
     * Light to change
     */
    light: Number;
    /**
     * Luxafor mode
     */
    mode: Number;
    /**
     * Luxafor pattern
     */
    pattern: Number;
    /**
     * Times to repeat the transition (0-255)
     */
    repeat: Number;
    /**
     * Speed of the transition (0-255)
     */
    speed: Number;
}

