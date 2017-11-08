import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "../common";
import { vueStringEditorTemplateHtml } from "../vue-variables";
import "markdown-tip/vue";
import "select2-component/vue";
var StringEditor = /** @class */ (function (_super) {
    tslib_1.__extends(StringEditor, _super);
    function StringEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = "";
        _this.errorMessage = "";
        _this.buttonGroupStyle = common.buttonGroupStyleString;
        _this.collapsed = false;
        _this.imagePreviewStyle = common.imagePreviewStyleString;
        return _this;
    }
    StringEditor.prototype.onChange = function (e) {
        this.value = e.target.value;
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    StringEditor.prototype.beforeMount = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    Object.defineProperty(StringEditor.prototype, "canPreviewImage", {
        get: function () {
            return common.isImageUrl(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "canPreviewMarkdown", {
        get: function () {
            return this.md && this.schema.format === "markdown";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "canPreviewCode", {
        get: function () {
            return this.hljs && this.schema.format === "code";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "canPreview", {
        get: function () {
            return (!!this.value) && (this.canPreviewImage || this.canPreviewMarkdown || this.canPreviewCode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "useTextArea", {
        get: function () {
            return this.value !== undefined
                && !this.collapsed
                && (this.schema.enum === undefined || this.isReadOnly)
                && (this.schema.format === "textarea" || this.schema.format === "code" || this.schema.format === "markdown");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "useInput", {
        get: function () {
            return this.value !== undefined
                && !this.collapsed
                && (this.schema.enum === undefined || this.isReadOnly)
                && (this.schema.format !== "textarea" && this.schema.format !== "code" && this.schema.format !== "markdown");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "useSelect", {
        get: function () {
            return this.value !== undefined && this.schema.enum !== undefined && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "getImageUrl", {
        get: function () {
            return this.forceHttps ? common.replaceProtocal(this.value) : this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "getMarkdown", {
        get: function () {
            return this.md.render(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "getCode", {
        get: function () {
            return this.hljs.highlightAuto(this.value).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "willPreviewImage", {
        get: function () {
            return this.value && !this.collapsed && this.canPreviewImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "willPreviewMarkdown", {
        get: function () {
            return this.value && !this.collapsed && this.canPreviewMarkdown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "willPreviewCode", {
        get: function () {
            return this.value && !this.collapsed && this.canPreviewCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "options", {
        get: function () {
            return this.schema.enum.map(function (e) { return ({
                value: e,
                label: e,
            }); });
        },
        enumerable: true,
        configurable: true
    });
    StringEditor.prototype.updateSelection = function (value) {
        this.value = value;
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    StringEditor.prototype.toggleOptional = function () {
        this.value = common.toggleOptional(this.value, this.schema, this.initialValue);
        this.validate();
        this.$emit("update-value", { value: this.value, isValid: !this.errorMessage });
    };
    StringEditor.prototype.collapseOrExpand = function () {
        this.collapsed = !this.collapsed;
    };
    StringEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfString(this.value, this.schema, this.locale);
    };
    StringEditor = tslib_1.__decorate([
        Component({
            template: vueStringEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton", "dragula", "md", "hljs", "forceHttps"],
        })
    ], StringEditor);
    return StringEditor;
}(Vue));
export { StringEditor };
