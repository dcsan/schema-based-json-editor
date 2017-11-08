/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import Vue from "vue";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
export declare class ObjectEditor extends Vue {
    schema: common.ObjectSchema;
    initialValue?: {
        [name: string]: common.ValueType;
    };
    title: string;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    readonly: boolean;
    required: boolean;
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
    errorMessage?: string;
    filter: string;
    private invalidProperties;
    private properties;
    beforeMount(): void;
    readonly filteredProperties: {
        property: string;
        schema: common.Schema;
    }[];
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly titleToShow: string;
    readonly showFilter: boolean;
    isRequired(property: string): boolean | undefined;
    collapseOrExpand(): void;
    toggleOptional(): void;
    onChange(property: string, {value, isValid}: common.ValidityValue<common.ValueType>): void;
    onFilterChange(e: {
        target: {
            value: string;
        };
    }): void;
    private validate();
}
