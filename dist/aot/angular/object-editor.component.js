import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
import { angularObjectEditorTemplateHtml } from "../angular-variables";
var ObjectEditorComponent = /** @class */ (function () {
    function ObjectEditorComponent() {
    }
    ObjectEditorComponent.prototype.ngOnInit = function () {
        this.collapsed = this.schema.collapsed;
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.validate();
        if (this.value !== undefined) {
            var _loop_1 = function (property) {
                if (this_1.schema.properties.hasOwnProperty(property)) {
                    var schema = this_1.schema.properties[property];
                    var required = this_1.schema.required && this_1.schema.required.some(function (r) { return r === property; });
                    this_1.value[property] = common.getDefaultValue(required, schema, this_1.value[property]);
                    this_1.properties.push({
                        property: property,
                        schema: schema,
                    });
                }
            };
            var this_1 = this;
            for (var property in this.schema.properties) {
                _loop_1(property);
            }
            this.properties = this.properties.sort(common.compare);
        }
        this.updateValue.emit({ value: this.value, isValid: this.invalidProperties.length === 0 });
    };
    ObjectEditorComponent.prototype.isRequired = function (property) {
        return this.schema.required && this.schema.required.some(function (r) { return r === property; });
    };
    ObjectEditorComponent.prototype.trackByFunction = function (index, p) {
        return p.property;
    };
    ObjectEditorComponent.prototype.onChange = function (property, _a) {
        var value = _a.value, isValid = _a.isValid;
        this.value[property] = value;
        this.validate();
        common.recordInvalidPropertiesOfObject(this.invalidProperties, isValid, property);
        this.updateValue.emit({ value: this.value, isValid: this.invalidProperties.length === 0 });
    };
    ObjectEditorComponent.prototype.onFilterChange = function (e) {
        this.filter = e.target.value;
    };
    ObjectEditorComponent.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfObject(this.value, this.schema, this.locale);
    };
    Object.defineProperty(ObjectEditorComponent.prototype, "filteredProperties", {
        get: function () {
            var _this = this;
            return this.properties.filter(function (p) { return common.filterObject(p, _this.filter); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditorComponent.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditorComponent.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditorComponent.prototype, "titleToShow", {
        get: function () {
            if (this.hasDeleteButton) {
                return common.getTitle(common.findTitle(this.value, this.properties), this.title, this.schema.title);
            }
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditorComponent.prototype, "showFilter", {
        get: function () {
            return this.properties.length >= common.minItemCountIfNeedFilter;
        },
        enumerable: true,
        configurable: true
    });
    return ObjectEditorComponent;
}());
export { ObjectEditorComponent };
