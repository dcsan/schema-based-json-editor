/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import { EventEmitter } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
export declare class ObjectEditorComponent {
    schema: common.ObjectSchema;
    initialValue: {
        [name: string]: common.ValueType;
    };
    title?: string;
    updateValue: EventEmitter<common.ValidityValue<{
        [name: string]: common.ValueType;
    } | undefined>>;
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
    value?: {
        [name: string]: common.ValueType;
    };
    buttonGroupStyle: string;
    errorMessage: string;
    filter: string;
    private properties;
    private invalidProperties;
    ngOnInit(): void;
    isRequired(property: string): boolean | undefined;
    trackByFunction(index: number, p: {
        property: string;
        schema: common.Schema;
    }): string;
    collapseOrExpand: () => void;
    toggleOptional: () => void;
    onChange(property: string, {value, isValid}: common.ValidityValue<{
        [name: string]: common.ValueType;
    }>): void;
    onFilterChange(e: {
        target: {
            value: string;
        };
    }): void;
    private validate();
    readonly filteredProperties: {
        property: string;
        schema: common.Schema;
    }[];
    readonly hasDeleteButtonFunction: boolean;
    readonly isReadOnly: boolean | undefined;
    readonly titleToShow: string;
    readonly showFilter: boolean;
}
