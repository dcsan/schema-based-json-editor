import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "../common";
import { vueArrayEditorTemplateHtml } from "../vue-variables";
var ArrayEditor = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayEditor, _super);
    function ArrayEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderSwitch = 1;
        _this.collapsed = false;
        _this.value = [];
        _this.errorMessage = "";
        _this.buttonGroupStyleString = common.buttonGroupStyleString;
        _this.filter = "";
        _this.invalidIndexes = [];
        _this.drak = null;
        return _this;
    }
    ArrayEditor.prototype.beforeMount = function () {
        this.collapsed = this.schema.collapsed;
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    Object.defineProperty(ArrayEditor.prototype, "filteredValues", {
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
    Object.defineProperty(ArrayEditor.prototype, "getValue", {
        get: function () {
            if (this.value !== undefined && !this.collapsed) {
                return this.value;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "hasAddButton", {
        get: function () {
            return !this.isReadOnly && this.value !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "showFilter", {
        get: function () {
            return !this.disableFilters && this.getValue.length >= common.minItemCountIfNeedFilter;
        },
        enumerable: true,
        configurable: true
    });
    ArrayEditor.prototype.beforeDestroy = function () {
        if (this.drak) {
            this.drak.destroy();
        }
    };
    ArrayEditor.prototype.mounted = function () {
        var _this = this;
        if (this.dragula) {
            var container = this.$el.childNodes[2];
            if (container) {
                this.drak = this.dragula([container]);
                this.drak.on("drop", function (el, target, source, sibling) {
                    if (_this.value) {
                        common.switchItem(_this.value, el, sibling);
                        _this.renderSwitch = -_this.renderSwitch;
                        _this.$emit("update-value", { value: _this.value, isValid: !_this.errorMessage && _this.invalidIndexes.length === 0 });
                    }
                });
            }
        }
    };
    ArrayEditor.prototype.collapseOrExpand = function () {
        this.collapsed = !this.collapsed;
    };
    ArrayEditor.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditor.prototype.addItem = function () {
        this.value.push(common.getDefaultValue(true, this.schema.items, undefined));
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditor.prototype.onDeleteFunction = function (i) {
        this.value.splice(i, 1);
        this.renderSwitch = -this.renderSwitch;
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditor.prototype.onChange = function (i, _a) {
        var value = _a.value, isValid = _a.isValid;
        this.value[i] = value;
        this.validate();
        common.recordInvalidIndexesOfArray(this.invalidIndexes, isValid, i);
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage && this.invalidIndexes.length === 0 });
    };
    ArrayEditor.prototype.onFilterChange = function (e) {
        this.filter = e.target.value;
    };
    ArrayEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfArray(this.value, this.schema, this.locale);
    };
    ArrayEditor = tslib_1.__decorate([
        Component({
            template: vueArrayEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton", "disableFilters", "dragula", "md", "hljs", "forceHttps"],
        })
    ], ArrayEditor);
    return ArrayEditor;
}(Vue));
export { ArrayEditor };
