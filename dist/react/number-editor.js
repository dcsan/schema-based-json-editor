import * as tslib_1 from "tslib";
import * as React from "react";
import * as common from "../common";
import { Icon } from "./icon";
import { Optional } from "./optional";
import { Description } from "./description";
import { Select2 } from "select2-component/react";
/**
 * @public
 */
var NumberEditor = /** @class */ (function (_super) {
    tslib_1.__extends(NumberEditor, _super);
    function NumberEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.willRender = false;
        _this.onChange = function (e) {
            _this.value = _this.props.schema.type === "integer" ? common.toInteger(e.currentTarget.value) : common.toNumber(e.currentTarget.value);
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
        _this.value = common.getDefaultValue(_this.props.required, _this.props.schema, _this.props.initialValue);
        _this.validate();
        return _this;
    }
    NumberEditor.prototype.componentDidMount = function () {
        this.props.updateValue(this.value, !this.errorMessage);
    };
    NumberEditor.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.willRender) {
            this.willRender = false;
            return true;
        }
        return this.props.initialValue !== nextProps.initialValue;
    };
    NumberEditor.prototype.render = function () {
        var _this = this;
        var input = this.useInput ? (React.createElement("input", { className: this.props.theme.formControl, type: "number", onChange: this.onChange, defaultValue: String(this.value), readOnly: this.isReadOnly, disabled: this.isReadOnly })) : null;
        var select = this.useSelect ? (React.createElement(Select2, { data: this.options, value: this.value, update: function (e) { return _this.updateSelection(e); } })) : null;
        return (React.createElement("div", { className: this.errorMessage ? this.props.theme.errorRow : this.props.theme.row },
            React.createElement("label", { className: this.props.theme.label },
                this.titleToShow,
                React.createElement("div", { className: this.props.theme.buttonGroup, style: common.buttonGroupStyle },
                    React.createElement(Optional, { required: this.props.required, value: this.value, isReadOnly: this.isReadOnly, theme: this.props.theme, locale: this.props.locale, toggleOptional: this.toggleOptional }),
                    React.createElement(Icon, { valid: this.hasDeleteButtonFunction, onClick: this.props.onDelete, text: this.props.icon.delete, theme: this.props.theme, icon: this.props.icon }))),
            input,
            select,
            React.createElement(Description, { theme: this.props.theme, message: this.props.schema.description }),
            React.createElement(Description, { theme: this.props.theme, message: this.errorMessage })));
    };
    NumberEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfNumber(this.value, this.props.schema, this.props.locale);
    };
    Object.defineProperty(NumberEditor.prototype, "useInput", {
        get: function () {
            return this.value !== undefined && (this.props.schema.enum === undefined || this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "useSelect", {
        get: function () {
            return this.value !== undefined && (this.props.schema.enum !== undefined && !this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "isReadOnly", {
        get: function () {
            return this.props.readonly || this.props.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.props.onDelete && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.props.title, this.props.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberEditor.prototype, "options", {
        get: function () {
            return this.props.schema.enum.map(function (e) { return ({
                value: e,
                label: e.toString(),
            }); });
        },
        enumerable: true,
        configurable: true
    });
    NumberEditor.prototype.updateSelection = function (value) {
        this.value = +value;
        this.validate();
        this.setState({ value: this.value });
        this.props.updateValue(this.value, !this.errorMessage);
    };
    return NumberEditor;
}(React.Component));
export { NumberEditor };
