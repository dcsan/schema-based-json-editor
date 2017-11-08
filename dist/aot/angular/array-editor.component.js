import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
import { angularArrayEditorTemplateHtml } from "../angular-variables";
var ArrayEditorComponent = /** @class */ (function () {
    function ArrayEditorComponent() {
    }
    Object.defineProperty(ArrayEditorComponent.prototype, "getValue", {
        get: function () {
            if (this.value !== undefined && !this.collapsed) {
                return this.value;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditorComponent.prototype, "filteredValues", {
        get: function () {
            var _this = this;
            return this.getValue.map(function (p, i) { return ({ p: p, i: i }); })
                .filter(function (_a) {
                var p = _a.p, i = _a.i;
                return common.filterArray(p, i, _this.schema.items, _this.filter);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditorComponent.prototype, "showFilter", {
        get: function () {
            return this.getValue.length >= common.minItemCountIfNeedFilter;
        },
        enumerable: true,
        configurable: true
    });
    ArrayEditorComponent.prototype.ngOnInit = function () {
        this.collapsed = this.schema.collapsed;
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    Object.defineProperty(ArrayEditorComponent.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditorComponent.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditorComponent.prototype, "hasAddButton", {
        get: function () {
            return !this.isReadOnly && this.value !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditorComponent.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    ArrayEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.drakContainer && this.dragula) {
            var container = this.drakContainer.nativeElement;
            this.drak = this.dragula([container]);
            this.drak.on("drop", function (el, target, source, sibling) {
                if (_this.value) {
                    common.switchItem(_this.value, el, sibling);
                    _this.renderSwitch = -_this.renderSwitch;
                    _this.updateValue.emit({ value: _this.value, isValid: !_this.errorMessage && _this.invalidIndexes.length === 0 });
                }
            });
        }
    };
    ArrayEditorComponent.prototype.ngOnDestroy = function () {
        if (this.drak) {
            this.drak.destroy();
        }
    };
    ArrayEditorComponent.prototype.addItem = function () {
        this.value.push((common.getDefaultValue(true, this.schema.items, undefined)));
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditorComponent.prototype.onDeleteFunction = function (i) {
        this.value.splice(i, 1);
        this.renderSwitch = -this.renderSwitch;
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditorComponent.prototype.onChange = function (i, _a) {
        var value = _a.value, isValid = _a.isValid;
        this.value[i] = value;
        this.validate();
        common.recordInvalidIndexesOfArray(this.invalidIndexes, isValid, i);
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditorComponent.prototype.onFilterChange = function (e) {
        this.filter = e.target.value;
    };
    ArrayEditorComponent.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfArray(this.value, this.schema, this.locale);
    };
    return ArrayEditorComponent;
}());
export { ArrayEditorComponent };
