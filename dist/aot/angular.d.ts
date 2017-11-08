/// <reference types="highlight.js" />
/// <reference types="markdown-it" />
import { EventEmitter } from "@angular/core";
import * as common from "./common";
export * from "./common";
import { Dragula, MarkdownItType, MarkdownIt } from "./libs";
/**
 * @public
 */
export declare class JSONEditorComponent {
    schema: common.Schema;
    initialValue: common.ValueType;
    updateValue: EventEmitter<common.ValidityValue<string | number | boolean | any[] | {
        [name: string]: any;
    } | null | undefined>>;
    theme?: string;
    icon?: string;
    locale?: common.Locale;
    readonly?: boolean;
    dragula?: Dragula;
    markdownit?: MarkdownItType;
    hljs?: typeof hljs;
    forceHttps?: boolean;
    themeObject: common.Theme;
    localeObject: common.Locale;
    iconObject: common.Icon;
    md?: MarkdownIt;
    ngOnInit(): void;
}
/**
 * @public
 */
export declare class JSONEditorModule {
}
import { BooleanEditorComponent } from "./angular/boolean-editor.component";
export { BooleanEditorComponent };
import { ArrayEditorComponent } from "./angular/array-editor.component";
export { ArrayEditorComponent };
import { EditorComponent } from "./angular/editor.component";
export { EditorComponent };
import { NullEditorComponent } from "./angular/null-editor.component";
export { NullEditorComponent };
import { NumberEditorComponent } from "./angular/number-editor.component";
export { NumberEditorComponent };
import { ObjectEditorComponent } from "./angular/object-editor.component";
export { ObjectEditorComponent };
import { StringEditorComponent } from "./angular/string-editor.component";
export { StringEditorComponent };
import { IconComponent } from "./angular/icon.component";
export { IconComponent };
import { OptionalComponent } from "./angular/optional.component";
export { OptionalComponent };
import { DescriptionComponent } from "./angular/description.component";
export { DescriptionComponent };
