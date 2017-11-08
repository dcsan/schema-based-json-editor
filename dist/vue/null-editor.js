import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "../common";
import { vueNullEditorTemplateHtml } from "../vue-variables";
var NullEditor = /** @class */ (function (_super) {
    tslib_1.__extends(NullEditor, _super);
    function NullEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.buttonGroupStyle = common.buttonGroupStyleString;
        return _this;
    }
    NullEditor.prototype.beforeMount = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.$emit("update-value", { value: this.value, isValid: true });
    };
    Object.defineProperty(NullEditor.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NullEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NullEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    NullEditor.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.$emit("update-value", { value: this.value, isValid: true });
    };
    NullEditor = tslib_1.__decorate([
        Component({
            template: vueNullEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton"],
        })
    ], NullEditor);
    return NullEditor;
}(Vue));
export { NullEditor };
