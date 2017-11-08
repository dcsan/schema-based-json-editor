import * as tslib_1 from "tslib";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as common from "../common";
import { Editor } from "./editor";
import { Icon } from "./icon";
import { Optional } from "./optional";
import { Description } from "./description";
/**
 * @public
 */
var ArrayEditor = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayEditor, _super);
    function ArrayEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.renderSwitch = 1;
        _this.collapsed = _this.props.schema.collapsed;
        _this.invalidIndexes = [];
        _this.filter = "";
        _this.collapseOrExpand = function () {
            _this.collapsed = !_this.collapsed;
            _this.setState({ collapsed: _this.collapsed });
        };
        _this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.props.schema, _this.props.initialValue);
            _this.validate();
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, !_this.errorMessage && _this.invalidIndexes.length === 0);
        };
        _this.addItem = function () {
            _this.value.push(common.getDefaultValue(true, _this.props.schema.items, undefined));
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, !_this.errorMessage && _this.invalidIndexes.length === 0);
        };
        _this.onChange = function (i, value, isValid) {
            if (value !== undefined) {
                _this.value[i] = value;
                _this.setState({ value: _this.value });
                _this.validate();
                common.recordInvalidIndexesOfArray(_this.invalidIndexes, isValid, i);
                _this.props.updateValue(_this.value, !_this.errorMessage && _this.invalidIndexes.length === 0);
            }
        };
        _this.onFilterChange = function (e) {
            _this.filter = e.currentTarget.value;
            _this.setState({ filter: _this.filter });
        };
        _this.onDeleteFunction = function (i) {
            _this.value.splice(i, 1);
            _this.renderSwitch = -_this.renderSwitch;
            _this.setState({ value: _this.value, renderSwitch: _this.renderSwitch });
            _this.validate();
            _this.props.updateValue(_this.value, !_this.errorMessage && _this.invalidIndexes.length === 0);
        };
        _this.value = common.getDefaultValue(_this.props.required, _this.props.schema, _this.props.initialValue);
        _this.validate();
        return _this;
    }
    ArrayEditor.prototype.componentDidMount = function () {
        var _this = this;
        this.props.updateValue(this.value, !this.errorMessage && this.invalidIndexes.length === 0);
        if (this.props.dragula) {
            var container = ReactDOM.findDOMNode(this).childNodes[2];
            this.drak = this.props.dragula([container]);
            this.drak.on("drop", function (el, target, source, sibling) {
                if (_this.value) {
                    common.switchItem(_this.value, el, sibling);
                    _this.renderSwitch = -_this.renderSwitch;
                    _this.setState({ value: _this.value, renderSwitch: _this.renderSwitch });
                    _this.props.updateValue(_this.value, !_this.errorMessage && _this.invalidIndexes.length === 0);
                }
            });
        }
    };
    ArrayEditor.prototype.componentWillUnmount = function () {
        if (this.drak) {
            this.drak.destroy();
        }
    };
    ArrayEditor.prototype.render = function () {
        var _this = this;
        var childrenElement = this.getValue.map(function (p, i) { return ({ p: p, i: i }); })
            .filter(function (_a) {
            var p = _a.p, i = _a.i;
            return common.filterArray(p, i, _this.props.schema.items, _this.filter);
        })
            .map(function (_a) {
            var p = _a.p, i = _a.i;
            return (React.createElement("div", { key: (1 + i) * _this.renderSwitch, "data-index": i, className: _this.props.theme.rowContainer },
                React.createElement(Editor, { schema: _this.props.schema.items, title: String(i), initialValue: _this.getValue[i], updateValue: function (value, isValid) { return _this.onChange(i, value, isValid); }, theme: _this.props.theme, icon: _this.props.icon, locale: _this.props.locale, required: true, readonly: _this.isReadOnly, onDelete: function () { return _this.onDeleteFunction(i); }, dragula: _this.props.dragula, md: _this.props.md, hljs: _this.props.hljs, forceHttps: _this.props.forceHttps })));
        });
        var filterElement = (!this.collapsed && this.value !== undefined && this.showFilter)
            ? React.createElement("div", { className: this.props.theme.row },
                React.createElement("input", { className: this.props.theme.formControl, onChange: this.onFilterChange, defaultValue: this.filter }))
            : null;
        return (React.createElement("div", { className: this.errorMessage ? this.props.theme.errorRow : this.props.theme.row },
            React.createElement("h3", null,
                this.titleToShow,
                React.createElement("div", { className: this.props.theme.buttonGroup, style: common.buttonGroupStyle },
                    React.createElement(Optional, { required: this.props.required, value: this.value, isReadOnly: this.isReadOnly, theme: this.props.theme, locale: this.props.locale, toggleOptional: this.toggleOptional }),
                    React.createElement(Icon, { valid: true, onClick: this.collapseOrExpand, text: this.collapsed ? this.props.icon.expand : this.props.icon.collapse, theme: this.props.theme, icon: this.props.icon }),
                    React.createElement(Icon, { valid: this.hasAddButton, onClick: this.addItem, text: this.props.icon.add, theme: this.props.theme, icon: this.props.icon }),
                    React.createElement(Icon, { valid: this.hasDeleteButtonFunction, onClick: this.props.onDelete, text: this.props.icon.delete, theme: this.props.theme, icon: this.props.icon }))),
            React.createElement(Description, { theme: this.props.theme, message: this.props.schema.description, notEmpty: true }),
            React.createElement("div", { className: this.props.theme.rowContainer },
                filterElement,
                childrenElement),
            React.createElement(Description, { theme: this.props.theme, message: this.errorMessage })));
    };
    ArrayEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfArray(this.value, this.props.schema, this.props.locale);
    };
    Object.defineProperty(ArrayEditor.prototype, "isReadOnly", {
        get: function () {
            return this.props.readonly || this.props.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.props.onDelete && !this.isReadOnly;
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
    Object.defineProperty(ArrayEditor.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.props.title, this.props.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "showFilter", {
        get: function () {
            return this.getValue.length >= common.minItemCountIfNeedFilter;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayEditor;
}(React.Component));
export { ArrayEditor };
