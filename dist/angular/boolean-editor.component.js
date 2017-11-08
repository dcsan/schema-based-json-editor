import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "../common";
import { angularBooleanEditorTemplateHtml } from "../angular-variables";
var BooleanEditorComponent = /** @class */ (function () {
    function BooleanEditorComponent() {
        this.updateValue = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.buttonGroupStyle = common.buttonGroupStyleString;
    }
    BooleanEditorComponent.prototype.ngOnInit = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.updateValue.emit({ value: this.value, isValid: true });
    };
    BooleanEditorComponent.prototype.onChange = function (e) {
        this.value = !this.value;
        this.updateValue.emit({ value: this.value, isValid: true });
    };
    BooleanEditorComponent.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.updateValue.emit({ value: this.value, isValid: true });
    };
    Object.defineProperty(BooleanEditorComponent.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanEditorComponent.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanEditorComponent.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BooleanEditorComponent.prototype, "schema", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BooleanEditorComponent.prototype, "initialValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BooleanEditorComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BooleanEditorComponent.prototype, "updateValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BooleanEditorComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BooleanEditorComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BooleanEditorComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BooleanEditorComponent.prototype, "onDelete", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BooleanEditorComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BooleanEditorComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BooleanEditorComponent.prototype, "hasDeleteButton", void 0);
    BooleanEditorComponent = tslib_1.__decorate([
        Component({
            selector: "boolean-editor",
            template: angularBooleanEditorTemplateHtml,
        })
    ], BooleanEditorComponent);
    return BooleanEditorComponent;
}());
export { BooleanEditorComponent };
