/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import Vue from "vue";
import * as common from "../common";
import { MarkdownIt } from "../libs";
import "markdown-tip/vue";
import "select2-component/vue";
export declare class StringEditor extends Vue {
    schema: common.StringSchema;
    initialValue: string | undefined;
    title: string;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    readonly: boolean;
    required: boolean;
    hasDeleteButton: boolean;
    md?: MarkdownIt;
    hljs?: typeof hljs;
    forceHttps?: boolean;
    value?: string;
    errorMessage?: string;
    buttonGroupStyle: string;
    collapsed: boolean;
    imagePreviewStyle: string;
    onChange(e: {
        target: {
            value: string;
        };
    }): void;
    beforeMount(): void;
    private readonly canPreviewImage;
    private readonly canPreviewMarkdown;
    private readonly canPreviewCode;
    readonly canPreview: boolean | undefined;
    readonly useTextArea: boolean | undefined;
    readonly useInput: boolean | undefined;
    readonly useSelect: boolean;
    readonly getImageUrl: string | undefined;
    readonly getMarkdown: string;
    readonly getCode: string;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly willPreviewImage: boolean | "" | undefined;
    readonly willPreviewMarkdown: boolean | "" | undefined;
    readonly willPreviewCode: boolean | "" | undefined;
    readonly titleToShow: string;
    readonly options: {
        value: string;
        label: string;
    }[];
    updateSelection(value: string): void;
    toggleOptional(): void;
    collapseOrExpand(): void;
    private validate();
}
