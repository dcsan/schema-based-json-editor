/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import { EventEmitter } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
export declare class StringEditorComponent {
    schema: common.StringSchema;
    initialValue: string;
    title?: string;
    updateValue: EventEmitter<common.ValidityValue<string | undefined>>;
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
    value?: string;
    errorMessage: string;
    buttonGroupStyle: string;
    collapsed: boolean;
    onChange(e: {
        target: {
            value: string;
        };
    }): void;
    ngOnInit(): void;
    readonly useTextArea: boolean | undefined;
    readonly useInput: boolean | undefined;
    readonly useSelect: boolean;
    private readonly canPreviewImage;
    private readonly canPreviewMarkdown;
    private readonly canPreviewCode;
    readonly canPreview: boolean | undefined;
    readonly getImageUrl: string | undefined;
    readonly getMarkdown: string;
    readonly getCode: string;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly willPreviewImage: boolean | "" | undefined;
    readonly willPreviewMarkdown: boolean | "" | undefined;
    readonly willPreviewCode: boolean | "" | undefined;
    readonly titleToShow: string;
    toggleOptional: () => void;
    trackByFunction(index: number, value: {
        [name: string]: common.ValueType;
    }): number;
    collapseOrExpand: () => void;
    private validate();
}
