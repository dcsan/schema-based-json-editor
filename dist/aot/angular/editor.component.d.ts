/// <reference types="markdown-it" />
/// <reference types="highlight.js" />
import { EventEmitter } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
export declare class EditorComponent {
    schema: common.Schema;
    initialValue: common.ValueType[];
    title?: string;
    updateValue: EventEmitter<common.ValidityValue<common.ValueType>>;
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
}
