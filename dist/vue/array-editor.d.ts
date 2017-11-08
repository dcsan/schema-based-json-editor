/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import Vue from "vue";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
export declare class ArrayEditor extends Vue {
    schema: common.ArraySchema;
    initialValue?: common.ValueType[];
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
    renderSwitch: number;
    collapsed?: boolean;
    value?: common.ValueType[];
    errorMessage?: string;
    buttonGroupStyleString: string;
    filter: string;
    private invalidIndexes;
    private drak?;
    beforeMount(): void;
    readonly filteredValues: {
        p: common.ValueType;
        i: number;
    }[];
    private readonly getValue;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly hasAddButton: boolean;
    readonly titleToShow: string;
    readonly showFilter: boolean;
    beforeDestroy(): void;
    mounted(): void;
    collapseOrExpand(): void;
    toggleOptional(): void;
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
