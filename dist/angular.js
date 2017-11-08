import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as common from "./common";
export * from "./common";
import { angularTemplateHtml } from "./angular-variables";
import { MarkdownTipModule } from "markdown-tip/angular";
/**
 * @public
 */
var JSONEditorComponent = /** @class */ (function () {
    function JSONEditorComponent() {
        this.updateValue = new EventEmitter();
    }
    JSONEditorComponent.prototype.ngOnInit = function () {
        this.themeObject = common.getTheme(this.theme);
        this.localeObject = common.getLocale(this.locale);
        this.iconObject = common.getIcon(this.icon, this.localeObject);
        this.md = common.initializeMarkdown(this.markdownit, this.hljs, this.forceHttps);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JSONEditorComponent.prototype, "schema", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JSONEditorComponent.prototype, "initialValue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], JSONEditorComponent.prototype, "updateValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], JSONEditorComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], JSONEditorComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JSONEditorComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], JSONEditorComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], JSONEditorComponent.prototype, "dragula", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], JSONEditorComponent.prototype, "markdownit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JSONEditorComponent.prototype, "hljs", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], JSONEditorComponent.prototype, "forceHttps", void 0);
    JSONEditorComponent = tslib_1.__decorate([
        Component({
            selector: "json-editor",
            template: angularTemplateHtml,
        })
    ], JSONEditorComponent);
    return JSONEditorComponent;
}());
export { JSONEditorComponent };
/**
 * @public
 */
var JSONEditorModule = /** @class */ (function () {
    function JSONEditorModule() {
    }
    JSONEditorModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                JSONEditorComponent,
                BooleanEditorComponent,
                ArrayEditorComponent,
                EditorComponent,
                NullEditorComponent,
                NumberEditorComponent,
                ObjectEditorComponent,
                StringEditorComponent,
                IconComponent,
                OptionalComponent,
                DescriptionComponent,
            ],
            imports: [
                CommonModule,
                MarkdownTipModule,
            ],
            exports: [
                JSONEditorComponent,
                BooleanEditorComponent,
                ArrayEditorComponent,
                EditorComponent,
                NullEditorComponent,
                NumberEditorComponent,
                ObjectEditorComponent,
                StringEditorComponent,
                IconComponent,
                OptionalComponent,
                DescriptionComponent,
            ],
        })
    ], JSONEditorModule);
    return JSONEditorModule;
}());
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
