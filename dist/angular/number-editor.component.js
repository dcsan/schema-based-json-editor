import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { angularNumberEditorTemplateHtml } from "../angular-variables";
var NumberEditorComponent = /** @class */ (function () {
    function NumberEditorComponent() {
        this.updateValue = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.buttonGroupStyle = common.buttonGroupStyleString;
    }
    NumberEditorComponent.prototype.onChange = function (e) {
        this.value = this.schema.type === "integer" ? common.toInteger(e.target.value) : common.toNumber(e.target.value);
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    };
    NumberEditorComponent.prototype.ngOnInit = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    };
    Object.defineProperty(NumberEditorComponent.prototype, "useInput", {
        get: function () {
            return this.value !== undefined && (this.schema.enum === undefined || this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditorComponent.prototype, "useSelect", {
        get: function () {
            return this.value !== undefined && (this.schema.enum !== undefined && !this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditorComponent.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditorComponent.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditorComponent.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    NumberEditorComponent.prototype.trackByFunction = function (index, value) {
        return index;
    };
    NumberEditorComponent.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    };
    NumberEditorComponent.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfNumber(this.value, this.schema, this.locale);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NumberEditorComponent.prototype, "schema", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NumberEditorComponent.prototype, "initialValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NumberEditorComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NumberEditorComponent.prototype, "updateValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NumberEditorComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NumberEditorComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NumberEditorComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NumberEditorComponent.prototype, "onDelete", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NumberEditorComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NumberEditorComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NumberEditorComponent.prototype, "hasDeleteButton", void 0);
    NumberEditorComponent = tslib_1.__decorate([
        Component({
            selector: "number-editor",
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: angularNumberEditorTemplateHtml,
        })
    ], NumberEditorComponent);
    return NumberEditorComponent;
}());
export { NumberEditorComponent };
