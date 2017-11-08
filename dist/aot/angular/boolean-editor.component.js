import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "../common";
import { angularBooleanEditorTemplateHtml } from "../angular-variables";
var BooleanEditorComponent = /** @class */ (function () {
    function BooleanEditorComponent() {
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
    return BooleanEditorComponent;
}());
export { BooleanEditorComponent };
