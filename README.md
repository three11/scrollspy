[![GitHub release](https://img.shields.io/github/release/three11/scrollspy.svg)](https://github.com/three11/scrollspy/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/scrollspy.svg)](https://github.com/three11/scrollspy/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/scrollspy.svg)](https://github.com/three11/scrollspy/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/scrollspy/dist/scrollspy.min.js.svg)](https://github.com/three11/scrollspy/)
[![Build Status](https://travis-ci.org/three11/scrollspy.svg?branch=master)](https://travis-ci.org/three11/scrollspy)
[![npm](https://img.shields.io/npm/dt/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)
[![npm](https://img.shields.io/npm/v/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/scrollspy/README.md)](https://github.com/three11/scrollspy/)

# ScrollSpy

> Automatically update your navigation components based on scroll position to indicate which link is currently active in the viewport.

## Install

```sh
npm i @three11/scrollspy

# or

yarn add @three11/scrollspy
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-scrollspy/dist/index.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/scrollspy"></script>
```

## Usage

First, `import` the module:

```javascript
import ScrollSpy from '@three11/scrollspy';
```

Then initialize a new instance of the module:

```javascript
const scrollSpy = new ScrollSpy(scrollSpySettings, scrollSpyEasings);
```

## Settings

The default settings are:

| Name                     | Type       | Description                                                          | Default                  |
| ------------------------ | ---------- | -------------------------------------------------------------------- | ------------------------ |
| `headerClass`            | `string`   | The class name of your Header element                                | `.c-header`              |
| `headerOffset`           | `boolean`  | Flag which indicates if the Header height should be calculated       | `true`                   |
| `animationSpeed`         | `number`   | Speed of the scroll animation (in milliseconds)                      | `2000`                   |
| `animationEasing`        | `string`   | Name of the easing function. For more details see below              | `easeInOutQuint`         |
| `sectionSelector`        | `string`   | CSS selector for your Section elements                               | `.js-scroll-spy-section` |
| `linkCurrentClass`       | `string`   | Class name to be applied to the currently active link                | `current`                |
| `linksContainerSelector` | `string`   | CSS selector for your scroll spy navigation                          | `.js-scroll-spy-nav`     |
| `onAfterScroll`          | `function` | A function to run after the scroll after click on a link is complete | `() => {}`               |

## Easings

The `ScrollSpy` instance accepts a second optional argument which specifies a list of easing functions.

The current list contains several predefined easing functions:

```javascript
{
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInCubic: t => t * t * t,
    easeOutCubic: t => --t * t * t + 1,
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - --t * t * t * t,
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => 1 + --t * t * t * t * t,
    easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    easeInOutCubic: t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
    easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    easeInOutQuint: t => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
}
```

If you wish to add your own easing function, you can do so by adding it to the second argument of the `ScrollSpy` constructor.

Just remember that your custom easing function should accept a single `time` argument which is a `number` and should return a `number`.

In order to use your custom easing function, you need to specify its name in the `animationEasing` setting.

## Example

```javascript
new ScrollSpy(
	{
		linkCurrentClass: 'current',
		linksContainerSelector: '.nav',
		sectionSelector: '.section',
		headerOffset: true,
		headerClass: '.header',
		animationSpeed: 3000,
		animationEasing: 'customEasingFunction',
		onAfterScroll: () => {
			console.log('scroll ended');
		}
	},
	{
		customEasingFunction: t => t ** t
	}
);
```

## Demo

A minimal demo is available [here](https://three11-scrollspy.netlify.app)

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
