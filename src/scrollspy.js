/**
 * The external dependencies.
 */
import animateTopOffset from '@three11/animate-top-offset';

/**
 * ScrollSpy
 */
export default class ScrollSpy {
	/**
	 * Create an instance
	 *
	 * @param  {Object} settings
	 *
	 * @return {Object} ScrollSpy instance
	 */
	constructor(settings = {}) {
		const options = {
			linkCurrentClass: 'current',
			linksContainerSelector: '.js-scroll-spy-nav',
			sectionSelector: '.js-scroll-spy-section',
			headerOffset: true,
			headerClass: '.c-header',
			...settings
		};

		this.init(options);

		window.addEventListener('load', this.refreshPositions.bind(this));
		window.addEventListener('resize', this.refreshPositions.bind(this));

		return this;
	}

	/**
	 * Initialize the plugin
	 *
	 * @param  {Object} options
	 *
	 * @return {Void}
	 */
	init(options) {
		// Prepare properties
		this.setProperties(options);

		// Fire up plugin
		this.getSectionData();
		this.getCurrentSectionIndex();
		this.setCurrentState();
		this.bindEvents();
	}

	/**
	 * Set plugin's properties
	 *
	 * @return {Void}
	 */
	setProperties(options) {
		const doc = document;

		this.linksContainerSelector = options.linksContainerSelector;
		this.sectionSelector = options.sectionSelector;
		this.linksContainer = doc.querySelector(this.linksContainerSelector);
		this.links = [...this.linksContainer.querySelectorAll('a')];
		this.sections = [...doc.querySelectorAll(this.sectionSelector)];
		this.headerOffset = options.headerOffset;
		this.headerClass = options.headerClass;
		this.linkCurrentClass = options.linkCurrentClass;

		this.currentIdx = 0;
		this.data = {
			offsets: [],
			ids: []
		};
	}

	/**
	 * Prepare the data for the sections
	 *
	 * @return {Void}
	 */
	getSectionData() {
		this.sections.forEach(section => {
			this.data.ids.push(section.getAttribute('id'));
			this.data.offsets.push(this.getSectionOffset(section));
		});
	}

	/**
	 * Update the data for the sections
	 *
	 * @return {Void}
	 */
	refreshPositions() {
		this.data.offsets = this.data.offsets.map((offset, index) => {
			return this.getSectionOffset(this.sections[index]);
		});
	}

	/**
	 * Get the top offset of a section
	 *
	 * @param  {<DOM Element>Object} section
	 *
	 * @return {Number}
	 */
	getSectionOffset(section) {
		if (!this.headerOffset) {
			return section.offsetTop;
		}

		return section.offsetTop - document.querySelector(this.headerClass).offsetHeight;
	}

	/**
	 * Find the index of the current section
	 *
	 * @return {Void}
	 */
	getCurrentSectionIndex() {
		const scrollTop = window.pageYOffset;

		this.data.offsets.forEach((offset, index) => {
			const nextOffset = this.data.offsets[index + 1];

			if (
				(scrollTop >= offset && scrollTop < nextOffset) ||
				(scrollTop >= offset && typeof nextOffset === 'undefined')
			) {
				this.currentIdx = index;
			}
		});

		this.setCurrentState();
	}
	/**
	 * Set classes to the appropriate nav item
	 *
	 * @return {Void}
	 */
	setCurrentState() {
		document
			.querySelector(this.linksContainerSelector)
			.querySelectorAll(`.${this.linkCurrentClass}`)
			.forEach(item => item.classList.remove(this.linkCurrentClass));

		this.links[this.currentIdx].parentNode.classList.add(this.linkCurrentClass);
	}

	/**
	 * Scroll to the current section
	 *
	 * @return {Void}
	 */
	scrollToCurrentSection() {
		animateTopOffset(this.data.offsets[this.currentIdx]);
	}

	/**
	 * Bind the events
	 *
	 * @return {Void}
	 */
	bindEvents() {
		const win = window;

		this.links.forEach((link, index) => {
			link.addEventListener('click', event => {
				event.preventDefault();

				this.currentIdx = index;
				this.scrollToCurrentSection();
			});
		});

		win.addEventListener('scroll', event => {
			this.getCurrentSectionIndex();
		});
	}
}
