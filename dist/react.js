import * as tslib_1 from "tslib";
import * as React from "react";
import * as common from "./common";
export * from "./common";
import { Editor } from "./react/editor";
/**
 * @public
 */
var JSONEditor = /** @class */ (function (_super) {
    tslib_1.__extends(JSONEditor, _super);
    function JSONEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.updateValue = function (value, isValid) {
            _this.props.updateValue(value, isValid);
        };
        _this.theme = common.getTheme(_this.props.theme);
        _this.locale = common.getLocale(_this.props.locale);
        _this.icon = common.getIcon(_this.props.icon, _this.locale);
        _this.md = common.initializeMarkdown(_this.props.markdownit, _this.props.hljs, _this.props.forceHttps);
        return _this;
    }
    JSONEditor.prototype.render = function () {
        return React.createElement(Editor, { schema: this.props.schema, initialValue: this.props.initialValue, updateValue: this.updateValue, readonly: this.props.readonly, theme: this.theme, locale: this.locale, icon: this.icon, required: true, dragula: this.props.dragula, md: this.md, hljs: this.props.hljs, forceHttps: this.props.forceHttps });
    };
    return JSONEditor;
}(React.Component));
export { JSONEditor };
