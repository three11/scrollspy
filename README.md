[![GitHub stars](https://img.shields.io/github/stars/three11/scrollspy.svg?style=social&label=Stars)](https://github.com/three11/scrollspy)
[![GitHub forks](https://img.shields.io/github/forks/three11/scrollspy.svg?style=social&label=Fork)](https://github.com/three11/scrollspy/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/three11/scrollspy.svg)](https://github.com/three11/scrollspy/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/scrollspy.svg)](https://github.com/three11/scrollspy/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/scrollspy.svg)](https://github.com/three11/scrollspy/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/scrollspy/dist/index.min.js.svg)](https://github.com/three11/scrollspy/)
[![npm](https://img.shields.io/npm/dt/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)
[![npm](https://img.shields.io/npm/v/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)
[![license](https://img.shields.io/github/license/three11/scrollspy.svg)](https://github.com/three11/scrollspy)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/scrollspy/README.md)](https://github.com/three11/scrollspy/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/three11/scrollspy/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/three11/scrollspy/graphs/commit-activity)

[![ForTheBadge built-with-love](https://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/three11/)

# ScrollSpy

A vanilla ES2017 module for scroll spy functionality.

## Install

```console
npm i @three11/scrollspy
```

or

```console
yarn add @three11/scrollspy
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="dist/index.min.js"></script>
```

## Usage

First, `import` the module:

```javascript
import ScrollSpy from '@three11/scrollspy';
```

Then initialize a new instance of the module:

```javascript
const scrollSpy = new ScrollSpy();
```

## Settings

The default settings are:

```javascript
linkCurrentClass      : 'current', // The class that will be applied to the current element
linksContainerSelector: '.js-scroll-spy-nav', // The container of the scroll spy navigation
sectionSelector       : '.js-scroll-spy-section', // The selector for the sections that will be monitored
headerOffset          : true, // Should calculate the header height
headerClass           : '.c-header', // The class of the header element
```

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
