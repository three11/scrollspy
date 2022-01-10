!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ScrollSpy=e()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var t=function(){return t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},t.apply(this,arguments)},e=window;return function(){function n(n,i){return void 0===n&&(n={}),void 0===i&&(i={}),this.links=[],this.sections=[],this.currentIdx=-1,this.headerClass="",this.headerOffset=!0,this.linksContainer=null,this.sectionSelector="",this.linkCurrentClass="",this.linksContainerSelector="",this.data={ids:[],offsets:[]},this.options=t({headerClass:".c-header",headerOffset:!0,animationSpeed:2e3,animationEasing:"easeInOutQuint",sectionSelector:".js-scroll-spy-section",linkCurrentClass:"current",linksContainerSelector:".js-scroll-spy-nav",onAfterScroll:function(){}},n),this.easings=t({linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},i),this.init(),e.addEventListener("load",this.refreshPositions.bind(this)),e.addEventListener("resize",this.refreshPositions.bind(this)),this}return n.prototype.init=function(){this.setProperties(),this.setSectionData(),this.setCurrentIndex(),this.setCurrentState(),this.bindEvents()},n.prototype.setProperties=function(){var t=document,e=this.options;this.linksContainerSelector=e.linksContainerSelector,this.sectionSelector=e.sectionSelector,this.linksContainer=t.querySelector(this.linksContainerSelector),this.links=this.linksContainer?Array.from(this.linksContainer.querySelectorAll("a")):[],this.sections=Array.from(t.querySelectorAll(this.sectionSelector)),this.headerOffset=e.headerOffset,this.headerClass=e.headerClass,this.linkCurrentClass=e.linkCurrentClass,this.currentIdx=0,this.data={ids:[],offsets:[]}},n.prototype.setSectionData=function(){var t=this;this.sections.forEach((function(e){e&&e.getAttribute("id")&&t.data.ids.push(e.getAttribute("id")),t.data.offsets.push(t.getSectionOffset(e))}))},n.prototype.refreshPositions=function(){var t=this;this.data.offsets=this.data.offsets.map((function(e,n){return t.getSectionOffset(t.sections[n])}))},n.prototype.getSectionOffset=function(t){if(!t)return 0;if(!this.headerOffset)return t.offsetTop;var e=document.querySelector(this.headerClass);return t.offsetTop-e.offsetHeight},n.prototype.setCurrentIndex=function(){var t=this,n=e.pageYOffset;this.data.offsets.forEach((function(e,i){var s=t.data.offsets[i+1];(n>=e&&n<s||n>=e&&void 0===s)&&(t.currentIdx=i)})),this.setCurrentState()},n.prototype.setCurrentState=function(){var t=this,e=document.querySelector(this.linksContainerSelector);(e?Array.from(e.querySelectorAll(".".concat(this.linkCurrentClass))):[]).forEach((function(e){return e.classList.remove(t.linkCurrentClass)}));var n=this.links[this.currentIdx];n&&n.parentNode.classList.add(this.linkCurrentClass)},n.prototype.bindEvents=function(){var t=this;this.links.forEach((function(n,i){null==n||n.addEventListener("click",(function(n){n.preventDefault(),t.currentIdx=i,function(t){var n=Date.now(),i=e.scrollY;if(i!==t.position){var s=function(){var r,o,a=(r=1)<(o=(Date.now()-n)/t.duration)?r:o,u=t.easingFunction(a);e.scrollTo({top:u*(t.position-i)+i}),a<1?requestAnimationFrame(s):t.callback&&"function"==typeof t.callback&&t.callback()};requestAnimationFrame(s)}else t.callback&&"function"==typeof t.callback&&t.callback()}({position:t.data.offsets[t.currentIdx],duration:t.options.animationSpeed,callback:t.options.onAfterScroll,easingFunction:t.easings[t.options.animationEasing]})}))})),e.addEventListener("scroll",(function(){t.setCurrentIndex()}))},n}()}));