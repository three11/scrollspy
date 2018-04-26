[![npm](https://img.shields.io/npm/dt/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)

# ScrollSpy

A vanilla ES2017 module for scroll spy functionality.

## Install

```
npm i @three11/scrollspy
```

or

```
yarn add @three11/scrollspy
```

or

Just download this repository and link the files located in dist folder:

```
<script src="dist/index.min.js"></script>
```

## Usage

First, `import` the module:

```
import ScrollSpy from '@three11/scrollspy';
```

Then initialize a new instance of the module:

```
const scrollSpy = new ScrollSpy();
```

## Settings

The default settings are:

```
linkCurrentClass      : 'current', // The class that will be applied to the current element
linksContainerSelector: '.js-scroll-spy-nav', // The container of the scroll spy navigation
sectionSelector       : '.js-scroll-spy-section', // The selector for the sections that will be monitored
headerOffset          : true, // Should calculate the header height
headerClass           : '.c-header', // The class of the header element
```

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
