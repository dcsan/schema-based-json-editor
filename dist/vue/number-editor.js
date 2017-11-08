import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "../common";
import { vueNumberEditorTemplateHtml } from "../vue-variables";
var NumberEditor = /** @class */ (function (_super) {
    tslib_1.__extends(NumberEditor, _super);
    function NumberEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 0;
        _this.errorMessage = "";
        _this.buttonGroupStyle = common.buttonGroupStyleString;
        return _this;
    }
    NumberEditor.prototype.onChange = function (e) {
        this.value = this.schema.type === "integer" ? common.toInteger(e.target.value) : common.toNumber(e.target.value);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    NumberEditor.prototype.beforeMount = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    Object.defineProperty(NumberEditor.prototype, "useInput", {
        get: function () {
            return this.value !== undefined && (this.schema.enum === undefined || this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "useSelect", {
        get: function () {
            return this.value !== undefined && (this.schema.enum !== undefined && !this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "options", {
        get: function () {
            return this.schema.enum.map(function (e) { return ({
                value: e,
                label: e,
            }); });
        },
        enumerable: true,
        configurable: true
    });
    NumberEditor.prototype.updateSelection = function (value) {
        this.value = value;
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    NumberEditor.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    NumberEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfNumber(this.value, this.schema, this.locale);
    };
    NumberEditor = tslib_1.__decorate([
        Component({
            template: vueNumberEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton"],
        })
    ], NumberEditor);
    return NumberEditor;
}(Vue));
export { NumberEditor };
