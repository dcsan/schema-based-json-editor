import * as tslib_1 from "tslib";
import * as React from "react";
import * as common from "../common";
import { Editor } from "./editor";
import { Icon } from "./icon";
import { Optional } from "./optional";
import { Description } from "./description";
/**
 * @public
 */
var ObjectEditor = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectEditor, _super);
    function ObjectEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.collapsed = _this.props.schema.collapsed;
        _this.invalidProperties = [];
        _this.properties = [];
        _this.filter = "";
        _this.collapseOrExpand = function () {
            _this.collapsed = !_this.collapsed;
            _this.setState({ collapsed: _this.collapsed });
        };
        _this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.props.schema, _this.props.initialValue);
            _this.validate();
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value, _this.invalidProperties.length === 0);
        };
        _this.onFilterChange = function (e) {
            _this.filter = e.currentTarget.value;
            _this.setState({ filter: _this.filter });
        };
        _this.onChange = function (property, value, isValid) {
            if (value !== undefined) {
                _this.value[property] = value;
                _this.validate();
                _this.setState({ value: _this.value });
                common.recordInvalidPropertiesOfObject(_this.invalidProperties, isValid, property);
                _this.props.updateValue(_this.value, !_this.errorMessage && _this.invalidProperties.length === 0);
            }
        };
        _this.value = common.getDefaultValue(_this.props.required, _this.props.schema, _this.props.initialValue);
        _this.validate();
        if (_this.value !== undefined) {
            var _loop_1 = function (property) {
                if (this_1.props.schema.properties.hasOwnProperty(property)) {
                    var schema = this_1.props.schema.properties[property];
                    var required = this_1.props.schema.required && this_1.props.schema.required.some(function (r) { return r === property; });
                    this_1.value[property] = common.getDefaultValue(required, schema, this_1.value[property]);
                    this_1.properties.push({
                        property: property,
                        schema: schema,
                    });
                }
            };
            var this_1 = this;
            for (var property in _this.props.schema.properties) {
                _loop_1(property);
            }
            _this.properties = _this.properties.sort(common.compare);
        }
        return _this;
    }
    ObjectEditor.prototype.componentDidMount = function () {
        this.props.updateValue(this.value, this.invalidProperties.length === 0);
    };
    ObjectEditor.prototype.render = function () {
        var _this = this;
        var childrenElement = (!this.collapsed && this.value !== undefined)
            ? this.properties.filter(function (p) { return common.filterObject(p, _this.filter); })
                .map(function (_a) {
                var property = _a.property, schema = _a.schema;
                return React.createElement(Editor, { key: property, schema: schema, title: schema.title || property, initialValue: _this.value[property], updateValue: function (value, isValid) { return _this.onChange(property, value, isValid); }, theme: _this.props.theme, icon: _this.props.icon, locale: _this.props.locale, required: _this.isRequired(property), readonly: _this.isReadOnly, dragula: _this.props.dragula, md: _this.props.md, hljs: _this.props.hljs, forceHttps: _this.props.forceHttps });
            })
            : [];
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
                    React.createElement(Icon, { valid: this.hasDeleteButtonFunction, onClick: this.props.onDelete, text: this.props.icon.delete, theme: this.props.theme, icon: this.props.icon }))),
            React.createElement(Description, { theme: this.props.theme, message: this.props.schema.description }),
            React.createElement("div", { className: this.props.theme.rowContainer },
                filterElement,
                childrenElement),
            React.createElement(Description, { theme: this.props.theme, message: this.errorMessage })));
    };
    ObjectEditor.prototype.isRequired = function (property) {
        return this.props.schema.required && this.props.schema.required.some(function (r) { return r === property; });
    };
    ObjectEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfObject(this.value, this.props.schema, this.props.locale);
    };
    Object.defineProperty(ObjectEditor.prototype, "isReadOnly", {
        get: function () {
            return this.props.readonly || this.props.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.props.onDelete && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "titleToShow", {
        get: function () {
            if (this.props.onDelete) {
                return common.getTitle(common.findTitle(this.value, this.properties), this.props.title, this.props.schema.title);
            }
            return common.getTitle(this.props.title, this.props.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectEditor.prototype, "showFilter", {
        get: function () {
            return this.properties.length >= common.minItemCountIfNeedFilter;
        },
        enumerable: true,
        configurable: true
    });
    return ObjectEditor;
}(React.Component));
export { ObjectEditor };
