import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "../common";
import { vueBooleanEditorTemplateHtml } from "../vue-variables";
var BooleanEditor = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanEditor, _super);
    function BooleanEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = false;
        _this.buttonGroupStyle = common.buttonGroupStyleString;
        return _this;
    }
    BooleanEditor.prototype.beforeMount = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.$emit("update-value", { value: this.value, isValid: true });
    };
    Object.defineProperty(BooleanEditor.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    BooleanEditor.prototype.onChange = function (e) {
        this.value = !this.value;
        this.$emit("update-value", { value: this.value, isValid: true });
    };
    BooleanEditor.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.$emit("update-value", { value: this.value, isValid: true });
    };
    BooleanEditor = tslib_1.__decorate([
        Component({
            template: vueBooleanEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton"],
        })
    ], BooleanEditor);
    return BooleanEditor;
}(Vue));
export { BooleanEditor };
