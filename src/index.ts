// codebeat:disable[ABC,LOC]
export type EasingFunction = (t: number) => number;
export type EasingFunctions = Record<string, EasingFunction>;
export type UnknownFunction = (...args: unknown[]) => unknown;

export type ScrollToOptions = {
	readonly position: number;
	readonly duration: number;
	readonly callback: UnknownFunction;
	readonly easingFunction: EasingFunction;
};

export type ScrollSpyOptions = {
	readonly headerClass: string;
	readonly headerOffset: boolean;
	readonly animationSpeed: number;
	readonly animationEasing: string;
	readonly sectionSelector: string;
	readonly linkCurrentClass: string;
	readonly linksContainerSelector: string;
	readonly onAfterScroll: UnknownFunction;
};

const win = window;

const min = (a: number, b: number): number => (a < b ? a : b);

const scrollTo = (options: ScrollToOptions) => {
	const start = Date.now();
	const from = win.scrollY;

	if (from === options.position) {
		if (options.callback && typeof options.callback === 'function') {
			options.callback();
		}

		return;
	}

	const scroll = () => {
		const currentTime = Date.now();
		const time = min(1, (currentTime - start) / options.duration);
		const easedT = options.easingFunction(time);

		win.scrollTo({
			top: easedT * (options.position - from) + from
		});

		if (time < 1) {
			requestAnimationFrame(scroll);
		} else if (options.callback && typeof options.callback === 'function') {
			options.callback();
		}
	};

	requestAnimationFrame(scroll);
};

export default class ScrollSpy {
	private options: ScrollSpyOptions;
	private easings: EasingFunctions;

	private links: Array<HTMLElement | null> = [];
	private sections: Array<HTMLElement | null> = [];
	private currentIdx: number = -1;
	private headerClass: string = '';
	private headerOffset: boolean = true;
	private linksContainer: HTMLElement | null = null;
	private sectionSelector: string = '';
	private linkCurrentClass: string = '';
	private linksContainerSelector: string = '';

	private data: {
		ids: string[];
		offsets: number[];
	} = {
		ids: [],
		offsets: []
	};

	constructor(settings: Partial<ScrollSpyOptions> = {}, easings: EasingFunctions = {}) {
		this.options = {
			headerClass: '.c-header',
			headerOffset: true,
			animationSpeed: 2000,
			animationEasing: 'easeInOutQuint',
			sectionSelector: '.js-scroll-spy-section',
			linkCurrentClass: 'current',
			linksContainerSelector: '.js-scroll-spy-nav',
			onAfterScroll: () => {},
			...settings
		};

		this.easings = {
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
			...easings
		};

		this.init();

		win.addEventListener('load', this.refreshPositions.bind(this));
		win.addEventListener('resize', this.refreshPositions.bind(this));

		return this;
	}

	public init() {
		this.setProperties();
		this.setSectionData();
		this.setCurrentIndex();
		this.setCurrentState();
		this.bindEvents();
	}

	private setProperties(): void {
		const doc = document;
		const options = this.options;

		this.linksContainerSelector = options.linksContainerSelector;
		this.sectionSelector = options.sectionSelector;
		this.linksContainer = doc.querySelector(this.linksContainerSelector);
		this.links = this.linksContainer ? Array.from(this.linksContainer.querySelectorAll('a')) : [];
		this.sections = Array.from(doc.querySelectorAll(this.sectionSelector)) as HTMLElement[];
		this.headerOffset = options.headerOffset;
		this.headerClass = options.headerClass;
		this.linkCurrentClass = options.linkCurrentClass;

		this.currentIdx = 0;
		this.data = {
			ids: [],
			offsets: []
		};
	}

	private setSectionData(): void {
		this.sections.forEach((section: HTMLElement | null) => {
			if (section && section.getAttribute('id')) {
				this.data.ids.push(section.getAttribute('id') as string);
			}

			this.data.offsets.push(this.getSectionOffset(section));
		});
	}

	private refreshPositions(): void {
		this.data.offsets = this.data.offsets.map((_: number, index: number) =>
			this.getSectionOffset(this.sections[index])
		);
	}

	private getSectionOffset(section: HTMLElement | null): number {
		if (!section) {
			return 0;
		}

		if (!this.headerOffset) {
			return section.offsetTop;
		}

		const header = document.querySelector(this.headerClass) as HTMLElement;

		return section.offsetTop - header.offsetHeight;
	}

	private setCurrentIndex(): void {
		const scrollTop = win.pageYOffset;

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

	private setCurrentState(): void {
		const linstContainer = document.querySelector(this.linksContainerSelector);
		const links = linstContainer ? Array.from(linstContainer.querySelectorAll(`.${this.linkCurrentClass}`)) : [];

		links.forEach((item: Element) => item.classList.remove(this.linkCurrentClass));

		const currentLink = this.links[this.currentIdx];

		if (currentLink) {
			(currentLink.parentNode as HTMLElement).classList.add(this.linkCurrentClass);
		}
	}

	private bindEvents() {
		this.links.forEach((link: HTMLElement | null, index: number) => {
			link?.addEventListener('click', (event: Event) => {
				event.preventDefault();

				this.currentIdx = index;

				scrollTo({
					position: this.data.offsets[this.currentIdx],
					duration: this.options.animationSpeed,
					callback: this.options.onAfterScroll,
					easingFunction: this.easings[this.options.animationEasing]
				});
			});
		});

		win.addEventListener('scroll', () => {
			this.setCurrentIndex();
		});
	}
}
// codebeat:enable[ABC,LOC]
