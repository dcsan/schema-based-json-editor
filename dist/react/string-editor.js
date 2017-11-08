import * as tslib_1 from "tslib";
import * as React from "react";
import * as common from "../common";
import { Icon } from "./icon";
import { Optional } from "./optional";
import { Description } from "./description";
import { MarkdownTip } from "markdown-tip/react";
import { Select2 } from "select2-component/react";
/**
 * @public
 */
var StringEditor = /** @class */ (function (_super) {
    tslib_1.__extends(StringEditor, _super);
    function StringEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.collapsed = false;
        _this.willRender = false;
        _this.onChange = function (e) {
            _this.value = e.currentTarget.value;
            _this.validate();
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, !_this.errorMessage);
        };
        _this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.props.schema, _this.props.initialValue);
            _this.validate();
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, !_this.errorMessage);
        };
        _this.collapseOrExpand = function () {
            _this.willRender = true;
            _this.collapsed = !_this.collapsed;
            _this.setState({ collapsed: _this.collapsed });
        };
        _this.value = common.getDefaultValue(_this.props.required, _this.props.schema, _this.props.initialValue);
        _this.validate();
        return _this;
    }
    StringEditor.prototype.componentDidMount = function () {
        this.props.updateValue(this.value, !this.errorMessage);
    };
    StringEditor.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.willRender) {
            this.willRender = false;
            return true;
        }
        return this.props.initialValue !== nextProps.initialValue;
    };
    StringEditor.prototype.render = function () {
        var _this = this;
        var textarea = this.useTextArea ? (React.createElement("textarea", { className: this.props.theme.formControl, onChange: this.onChange, defaultValue: this.value, rows: 10, readOnly: this.isReadOnly, disabled: this.isReadOnly })) : null;
        var input = this.useInput ? (React.createElement("input", { className: this.props.theme.formControl, type: this.props.schema.format, onChange: this.onChange, defaultValue: this.value, readOnly: this.isReadOnly, disabled: this.isReadOnly })) : null;
        var select = this.useSelect ? (React.createElement(Select2, { data: this.options, value: this.value, update: function (e) { return _this.updateSelection(e); } })) : null;
        var imagePreview = this.willPreviewImage ? React.createElement("img", { style: common.imagePreviewStyle, src: this.getImageUrl }) : null;
        var markdownTip = this.useTextArea && this.willPreviewMarkdown ? React.createElement(MarkdownTip, { locale: this.props.locale.markdownTipLocale }) : null;
        var markdownPreview = this.willPreviewMarkdown ? React.createElement("div", { dangerouslySetInnerHTML: { __html: this.getMarkdown } }) : null;
        var codePreview = this.willPreviewCode ? React.createElement("pre", null,
            React.createElement("code", { dangerouslySetInnerHTML: { __html: this.getCode } })) : null;
        return (React.createElement("div", { className: this.errorMessage ? this.props.theme.errorRow : this.props.theme.row },
            React.createElement("label", { className: this.props.theme.label },
                this.titleToShow,
                React.createElement("div", { className: this.props.theme.buttonGroup, style: common.buttonGroupStyle },
                    React.createElement(Optional, { required: this.props.required, value: this.value, isReadOnly: this.isReadOnly, theme: this.props.theme, locale: this.props.locale, toggleOptional: this.toggleOptional }),
                    React.createElement(Icon, { valid: this.hasDeleteButtonFunction, onClick: this.props.onDelete, text: this.props.icon.delete, theme: this.props.theme, icon: this.props.icon }),
                    React.createElement(Icon, { valid: this.canPreview, onClick: this.collapseOrExpand, text: this.collapsed ? this.props.icon.expand : this.props.icon.collapse, theme: this.props.theme, icon: this.props.icon }))),
            textarea,
            input,
            select,
            imagePreview,
            markdownTip,
            markdownPreview,
            codePreview,
            React.createElement(Description, { theme: this.props.theme, message: this.props.schema.description }),
            React.createElement(Description, { theme: this.props.theme, message: this.errorMessage })));
    };
    Object.defineProperty(StringEditor.prototype, "isReadOnly", {
        get: function () {
            return this.props.readonly || this.props.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.props.onDelete && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "useTextArea", {
        get: function () {
            return this.value !== undefined
                && !this.collapsed
                && (this.props.schema.enum === undefined || this.isReadOnly)
                && (this.props.schema.format === "textarea" || this.props.schema.format === "code" || this.props.schema.format === "markdown");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "useInput", {
        get: function () {
            return this.value !== undefined
                && !this.collapsed
                && (this.props.schema.enum === undefined || this.isReadOnly)
                && (this.props.schema.format !== "textarea" && this.props.schema.format !== "code" && this.props.schema.format !== "markdown");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "useSelect", {
        get: function () {
            return this.value !== undefined && this.props.schema.enum !== undefined && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "canPreviewImage", {
        get: function () {
            return common.isImageUrl(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "canPreviewMarkdown", {
        get: function () {
            return this.props.md && this.props.schema.format === "markdown";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "canPreviewCode", {
        get: function () {
            return this.props.hljs && this.props.schema.format === "code";
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
    Object.defineProperty(StringEditor.prototype, "getImageUrl", {
        get: function () {
            return this.props.forceHttps ? common.replaceProtocal(this.value) : this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "getMarkdown", {
        get: function () {
            return this.props.md.render(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "getCode", {
        get: function () {
            return this.props.hljs.highlightAuto(this.value).value;
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
            return common.getTitle(this.props.title, this.props.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditor.prototype, "options", {
        get: function () {
            return this.props.schema.enum.map(function (e) { return ({
                value: e,
                label: e,
            }); });
        },
        enumerable: true,
        configurable: true
    });
    StringEditor.prototype.updateSelection = function (value) {
        this.value = value.toString();
        this.validate();
        this.setState({ value: this.value });
        this.props.updateValue(this.value, !this.errorMessage);
    };
    StringEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfString(this.value, this.props.schema, this.props.locale);
    };
    return StringEditor;
}(React.Component));
export { StringEditor };
