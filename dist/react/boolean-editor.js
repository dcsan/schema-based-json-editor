import * as tslib_1 from "tslib";
import * as React from "react";
import * as common from "../common";
import { Icon } from "./icon";
import { Optional } from "./optional";
import { Description } from "./description";
/**
 * @public
 */
var BooleanEditor = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanEditor, _super);
    function BooleanEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.willRender = false;
        _this.onChange = function (e) {
            _this.value = !_this.value;
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, true);
        };
        _this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.props.schema, _this.props.initialValue);
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, true);
        };
        _this.value = common.getDefaultValue(_this.props.required, _this.props.schema, _this.props.initialValue);
        return _this;
    }
    BooleanEditor.prototype.componentDidMount = function () {
        this.props.updateValue(this.value, true);
    };
    BooleanEditor.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.willRender) {
            this.willRender = false;
            return true;
        }
        return this.props.initialValue !== nextProps.initialValue;
    };
    BooleanEditor.prototype.render = function () {
        var control = this.value !== undefined ? (React.createElement("div", null,
            React.createElement("div", { className: this.props.theme.radiobox },
                React.createElement("label", null,
                    React.createElement("input", { type: "radio", onChange: this.onChange, checked: this.value, disabled: this.isReadOnly }),
                    this.props.locale.info.true)),
            React.createElement("div", { className: this.props.theme.radiobox },
                React.createElement("label", null,
                    React.createElement("input", { type: "radio", onChange: this.onChange, checked: !this.value, disabled: this.isReadOnly }),
                    this.props.locale.info.false)))) : null;
        return (React.createElement("div", { className: this.props.theme.row },
            React.createElement("label", { className: this.props.theme.label },
                this.titleToShow,
                React.createElement("div", { className: this.props.theme.buttonGroup, style: common.buttonGroupStyle },
                    React.createElement(Optional, { required: this.props.required, value: this.value, isReadOnly: this.isReadOnly, theme: this.props.theme, locale: this.props.locale, toggleOptional: this.toggleOptional }),
                    React.createElement(Icon, { valid: this.hasDeleteButtonFunction, onClick: this.props.onDelete, text: this.props.icon.delete, theme: this.props.theme, icon: this.props.icon }))),
            control,
            React.createElement(Description, { theme: this.props.theme, message: this.props.schema.description })));
    };
    Object.defineProperty(BooleanEditor.prototype, "isReadOnly", {
        get: function () {
            return this.props.readonly || this.props.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.props.onDelete && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.props.title, this.props.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    return BooleanEditor;
}(React.Component));
export { BooleanEditor };
