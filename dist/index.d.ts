export declare type EasingFunction = (t: number) => number;
export declare type EasingFunctions = Record<string, EasingFunction>;
export declare type UnknownFunction = (...args: unknown[]) => unknown;
export declare type ScrollToOptions = {
    readonly position: number;
    readonly duration: number;
    readonly callback: UnknownFunction;
    readonly easingFunction: EasingFunction;
};
export declare type ScrollSpyOptions = {
    readonly headerClass: string;
    readonly headerOffset: boolean;
    readonly animationSpeed: number;
    readonly animationEasing: string;
    readonly sectionSelector: string;
    readonly linkCurrentClass: string;
    readonly linksContainerSelector: string;
    readonly onAfterScroll: UnknownFunction;
};
export default class ScrollSpy {
    private options;
    private easings;
    private links;
    private sections;
    private currentIdx;
    private headerClass;
    private headerOffset;
    private linksContainer;
    private sectionSelector;
    private linkCurrentClass;
    private linksContainerSelector;
    private data;
    constructor(settings?: Partial<ScrollSpyOptions>, easings?: EasingFunctions);
    init(): void;
    private setProperties;
    private setSectionData;
    private refreshPositions;
    private getSectionOffset;
    private setCurrentIndex;
    private setCurrentState;
    private bindEvents;
}
