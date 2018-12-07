# @nerdenough/luxafor

A simple JS library to control your [Luxafor](https://luxafor.com) device.

## Getting Started

### Installation

Install @nerdenough/luxafor using either npm or yarn.

```sh
npm install -S @nerdenough/luxafor
# or
yarn add @nerdenough/luxafor
```

### Usage

Here's a simple example of how you can change the front LEDs to be red.

```js
const luxafor = require('@nerdenough/luxafor')
luxafor.color({ led: luxafor.LUXAFOR_LED_B, red: 255 })
```

## In Depth

### `color`

Sets the color for the chosen LEDs with the specified color values. Setting the
speed will fade to the new color instead of an instant change.

### `strobe`

Activates the strobe effect for the chosen LEDs with the specified color values,
speed, and repetitions.

### `wave`

Activates one of 5 wave patterns with the specified color values, speed, and
repetitions. Affects all LEDs.

### `pattern`

Activates one of the 8 pre-programmed Luxafor patterns. Affects all LEDs.

### Constants

#### LEDs

| Constant          | Description      |
| ----------------- | ---------------- |
| `LUXAFOR_LED_1`   | Front lower LED  |
| `LUXAFOR_LED_2`   | Front middle LED |
| `LUXAFOR_LED_3`   | Front upper LED  |
| `LUXAFOR_LED_4`   | Rear lower LED   |
| `LUXAFOR_LED_5`   | Rear middle LED  |
| `LUXAFOR_LED_6`   | Rear upper LED   |
| `LUXAFOR_LED_A`   | All rear LEDs    |
| `LUXAFOR_LED_B`   | All front LEDs   |
| `LUXAFOR_LED_ALL` | All LEDs         |

#### Waves

| Constant         | Description                                      |
| ---------------- | ------------------------------------------------ |
| `LUXAFOR_WAVE_1` | I have no idea wtf this does                     |
| `LUXAFOR_WAVE_2` | Single color (other LEDs turned off), small wave |
| `LUXAFOR_WAVE_3` | Single color (other LEDs turned off), large wave |
| `LUXAFOR_WAVE_4` | Dual color (other LEDs turned on), small wave    |
| `LUXAFOR_WAVE_5` | Dual color (other LEDs turned on), large wave    |

#### Patterns

| Constant            | Description     |
| ------------------- | --------------- |
| `LUXAFOR_PATTERN_1` | Luxafor pattern |
| `LUXAFOR_PATTERN_2` | TODO            |
| `LUXAFOR_PATTERN_3` | TODO            |
| `LUXAFOR_PATTERN_4` | TODO            |
| `LUXAFOR_PATTERN_5` | Police pattern  |
| `LUXAFOR_PATTERN_6` | TODO            |
| `LUXAFOR_PATTERN_7` | TODO            |
| `LUXAFOR_PATTERN_8` | Rainbow pattern |

## License

[MIT](https://opensource.org/licenses/MIT)
