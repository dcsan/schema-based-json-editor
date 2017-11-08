import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { angularNumberEditorTemplateHtml } from "../angular-variables";
var NumberEditorComponent = /** @class */ (function () {
    function NumberEditorComponent() {
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
    return NumberEditorComponent;
}());
export { NumberEditorComponent };
