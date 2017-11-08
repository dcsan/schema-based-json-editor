import * as tslib_1 from "tslib";
import * as React from "react";
import * as common from "../common";
import { Icon } from "./icon";
import { Optional } from "./optional";
import { Description } from "./description";
/**
 * @public
 */
var NullEditor = /** @class */ (function (_super) {
    tslib_1.__extends(NullEditor, _super);
    function NullEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.props.schema, _this.props.initialValue);
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, true);
        };
        _this.value = common.getDefaultValue(_this.props.required, _this.props.schema, _this.props.initialValue);
        return _this;
    }
    NullEditor.prototype.componentDidMount = function () {
        this.props.updateValue(this.value, true);
    };
    NullEditor.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.props.initialValue !== nextProps.initialValue;
    };
    NullEditor.prototype.render = function () {
        return (React.createElement("div", { className: this.props.theme.row },
            React.createElement("label", { className: this.props.theme.label },
                this.titleToShow,
                React.createElement("div", { className: this.props.theme.buttonGroup, style: common.buttonGroupStyle },
                    React.createElement(Optional, { required: this.props.required, value: this.value, isReadOnly: this.isReadOnly, theme: this.props.theme, locale: this.props.locale, toggleOptional: this.toggleOptional }),
                    React.createElement(Icon, { valid: this.hasDeleteButtonFunction, onClick: this.props.onDelete, text: this.props.icon.delete, theme: this.props.theme, icon: this.props.icon }))),
            React.createElement(Description, { theme: this.props.theme, message: this.props.schema.description })));
    };
    Object.defineProperty(NullEditor.prototype, "isReadOnly", {
        get: function () {
            return this.props.readonly || this.props.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NullEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.props.onDelete && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NullEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.props.title, this.props.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    return NullEditor;
}(React.Component));
export { NullEditor };
