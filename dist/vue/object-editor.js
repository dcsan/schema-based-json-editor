import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "../common";
import { vueObjectEditorTemplateHtml } from "../vue-variables";
var ObjectEditor = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectEditor, _super);
    function ObjectEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collapsed = false;
        _this.value = {};
        _this.buttonGroupStyle = common.buttonGroupStyleString;
        _this.errorMessage = "";
        _this.filter = "";
        _this.invalidProperties = [];
        _this.properties = [];
        return _this;
    }
    ObjectEditor.prototype.beforeMount = function () {
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
        this.$emit("update-value", { value: this.value, isValid: true });
    };
    Object.defineProperty(ObjectEditor.prototype, "filteredProperties", {
        get: function () {
            var _this = this;
            return this.properties.filter(function (p) { return common.filterObject(p, _this.filter); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "titleToShow", {
        get: function () {
            if (this.hasDeleteButton) {
                return common.getTitle(common.findTitle(this.value, this.properties), this.title, this.schema.title);
            }
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "showFilter", {
        get: function () {
            return !this.disableFilters && this.properties.length >= common.minItemCountIfNeedFilter;
        },
        enumerable: true,
        configurable: true
    });
    ObjectEditor.prototype.isRequired = function (property) {
        return this.schema.required && this.schema.required.some(function (r) { return r === property; });
    };
    ObjectEditor.prototype.collapseOrExpand = function () {
        this.collapsed = !this.collapsed;
    };
    ObjectEditor.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: this.invalidProperties.length === 0 });
    };
    ObjectEditor.prototype.onChange = function (property, _a) {
        var value = _a.value, isValid = _a.isValid;
        this.value[property] = value;
        this.validate();
        common.recordInvalidPropertiesOfObject(this.invalidProperties, isValid, property);
        this.$emit("update-value", { value: this.value, isValid: this.invalidProperties.length === 0 });
    };
    ObjectEditor.prototype.onFilterChange = function (e) {
        this.filter = e.target.value;
    };
    ObjectEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfObject(this.value, this.schema, this.locale);
    };
    ObjectEditor = tslib_1.__decorate([
        Component({
            template: vueObjectEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton", "disableFilters", "dragula", "md", "hljs", "forceHttps"],
        })
    ], ObjectEditor);
    return ObjectEditor;
}(Vue));
export { ObjectEditor };
