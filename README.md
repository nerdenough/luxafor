# @nerdenough/luxafor

A simple JavaScript library to control your Luxafor device.

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
import { Luxafor, LUXAFOR_LIGHT_FRONT } from '@nerdenough/luxafor'

const luxafor = new Luxafor()
luxafor
  .setColor(255, 0, 0)
  .setLight(LUXAFOR_LIGHT_FRONT)
  .execute()
```

## In Depth

### Constants

#### Lights

- `LUXAFOR_LIGHT_1` - Lower light on the back
- `LUXAFOR_LIGHT_2` - Middle light on the back
- `LUXAFOR_LIGHT_3` - Upper light on the back
- `LUXAFOR_LIGHT_4` - Lower light on the front
- `LUXAFOR_LIGHT_5` - Middle light on the front
- `LUXAFOR_LIGHT_6` - Upper light on the front
- `LUXAFOR_LIGHT_FRONT` - All lights on the front
- `LUXAFOR_LIGHT_BACK` - All lights on the back
- `LUXAFOR_LIGHT_ALL` - All lights

#### Mode

- `LUXAFOR_MODE_COLOR` - Solid color
- `LUXAFOR_MODE_FADE` - Fade in and out
- `LUXAFOR_MODE_STROBE` - Strobe lights
- `LUXAFOR_MODE_WAVE` - Wave
- `LUXAFOR_MODE_PATTERN` - Built in pattern

#### Pattern

- `LUXAFOR_PATTERN_POLICE` - Red and blue flashing pattern

### `Luxafor` Class

#### Constructor

The Luxafor class can be instantiated without any arguments.

```js
const luxafor = new Luxafor()
```

If you have a custom Vendor and Product ID you can specify those too.

```js
const luxafor = new Luxafor(vendorId, productId)
```

#### `execute`

Executes the effect you've chosen by writing the bytes to the Luxafor device.

```js
luxafor.execute()
```

#### `setColor`

Sets the color of the light to a specific RGB value.

```js
luxafor.setColor(255, 0, 0) // bright red
```

#### `setLight`

Specifies which light you want to change.

```js
luxafor.setLight(LUXAFOR_LIGHT_3)
```

#### `setLights`

Specifies which lights you want to change.

```js
luxafor.setLights([LUXAFOR_LIGHT_1, LUXAFOR_LIGHT_4])
```

#### `setMode`

Sets the lighting mode.

```js
luxafor.setMode(LUXAFOR_MODE_FADE)
```

#### `setPattern`

Sets the Luxafor pattern, this will also change the mode to `LUXAFOR_MODE_PATTERN`.

```js
luxafor.setPattern(LUXAFOR_PATTERN_POLICE)
```

#### `setRepeat`

Specifies how many times an effect should repeat.

```js
luxafor.setRepeat(5) // repeat 5 times
```

#### `setSpeed`

Sets the speed of the effect.

```js
luxafor.setSpeed(10) // 0-255
```

## License

[MIT](https://opensource.org/licenses/MIT)

## Acknowledgements

Based on [node-luxafor](https://github.com/mattgoucher/node-luxafor) by Matt Goucher
