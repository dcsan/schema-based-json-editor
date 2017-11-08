import { Component, Input, Output, EventEmitter, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as common from "./common";
export * from "./common";
import { Dragula, MarkdownItType, MarkdownIt } from "./libs";
import { angularTemplateHtml } from "./angular-variables";
import { MarkdownTipModule } from "markdown-tip/angular";
/**
 * @public
 */
var /**
 * @public
 */
JSONEditorComponent = /** @class */ (function () {
    function JSONEditorComponent() {
    }
    JSONEditorComponent.prototype.ngOnInit = function () {
        this.themeObject = common.getTheme(this.theme);
        this.localeObject = common.getLocale(this.locale);
        this.iconObject = common.getIcon(this.icon, this.localeObject);
        this.md = common.initializeMarkdown(this.markdownit, this.hljs, this.forceHttps);
    };
    return JSONEditorComponent;
}());
/**
 * @public
 */
export { JSONEditorComponent };
/**
 * @public
 */
var /**
 * @public
 */
JSONEditorModule = /** @class */ (function () {
    function JSONEditorModule() {
    }
    return JSONEditorModule;
}());
/**
 * @public
 */
export { JSONEditorModule };
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
