import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "../common";
import { angularEditorTemplateHtml } from "../angular-variables";
var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
        this.updateValue = new EventEmitter();
        this.onDelete = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "schema", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], EditorComponent.prototype, "initialValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], EditorComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "updateValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "onDelete", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], EditorComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], EditorComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], EditorComponent.prototype, "hasDeleteButton", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], EditorComponent.prototype, "dragula", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "md", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditorComponent.prototype, "hljs", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], EditorComponent.prototype, "forceHttps", void 0);
    EditorComponent = tslib_1.__decorate([
        Component({
            selector: "editor",
            template: angularEditorTemplateHtml,
        })
    ], EditorComponent);
    return EditorComponent;
}());
export { EditorComponent };
