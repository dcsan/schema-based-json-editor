/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import { EventEmitter } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
export declare class ArrayEditorComponent {
    schema: common.ArraySchema;
    initialValue: common.ValueType[];
    title?: string;
    updateValue: EventEmitter<common.ValidityValue<common.ValueType[] | undefined>>;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    onDelete: EventEmitter<{}>;
    readonly?: boolean;
    required?: boolean;
    hasDeleteButton: boolean;
    dragula?: Dragula;
    md?: MarkdownIt;
    hljs?: typeof hljs;
    forceHttps?: boolean;
    collapsed?: boolean;
    value?: common.ValueType[];
    errorMessage: string;
    buttonGroupStyleString: string;
    filter: string;
    private drakContainer;
    private renderSwitch;
    private drak?;
    private invalidIndexes;
    private readonly getValue;
    readonly filteredValues: {
        p: common.ValueType;
        i: number;
    }[];
    readonly showFilter: boolean;
    ngOnInit(): void;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly hasAddButton: boolean;
    readonly titleToShow: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    trackByFunction: (index: number, item: {
        p: common.ValueType;
        i: number;
    }) => number;
    collapseOrExpand: () => void;
    toggleOptional: () => void;
    addItem(): void;
    onDeleteFunction(i: number): void;
    onChange(i: number, {value, isValid}: common.ValidityValue<common.ValueType>): void;
    onFilterChange(e: {
        target: {
            value: string;
        };
    }): void;
    private validate();
}
