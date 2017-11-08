import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { angularObjectEditorTemplateHtml } from "../angular-variables";
var ObjectEditorComponent = /** @class */ (function () {
    function ObjectEditorComponent() {
        var _this = this;
        this.updateValue = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.collapsed = false;
        this.buttonGroupStyle = common.buttonGroupStyleString;
        this.filter = "";
        this.properties = [];
        this.invalidProperties = [];
        this.collapseOrExpand = function () {
            _this.collapsed = !_this.collapsed;
        };
        this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.schema, _this.initialValue);
            _this.validate();
            _this.updateValue.emit({ value: _this.value, isValid: _this.invalidProperties.length === 0 });
        };
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "schema", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "initialValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ObjectEditorComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "updateValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "onDelete", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ObjectEditorComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ObjectEditorComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ObjectEditorComponent.prototype, "hasDeleteButton", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], ObjectEditorComponent.prototype, "dragula", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "md", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ObjectEditorComponent.prototype, "hljs", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ObjectEditorComponent.prototype, "forceHttps", void 0);
    ObjectEditorComponent = tslib_1.__decorate([
        Component({
            selector: "object-editor",
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: angularObjectEditorTemplateHtml,
        })
    ], ObjectEditorComponent);
    return ObjectEditorComponent;
}());
export { ObjectEditorComponent };
