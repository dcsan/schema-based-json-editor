import * as tslib_1 from "tslib";
import * as React from "react";
import { ObjectEditor } from "./object-editor";
import { ArrayEditor } from "./array-editor";
import { NumberEditor } from "./number-editor";
import { BooleanEditor } from "./boolean-editor";
import { NullEditor } from "./null-editor";
import { StringEditor } from "./string-editor";
/**
 * @public
 */
var Editor = /** @class */ (function (_super) {
    tslib_1.__extends(Editor, _super);
    function Editor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Editor.prototype.render = function () {
        switch (this.props.schema.type) {
            case "object":
                return React.createElement(ObjectEditor, tslib_1.__assign({}, this.props));
            case "array":
                return React.createElement(ArrayEditor, tslib_1.__assign({}, this.props));
            case "number":
            case "integer":
                return React.createElement(NumberEditor, tslib_1.__assign({}, this.props));
            case "boolean":
                return React.createElement(BooleanEditor, tslib_1.__assign({}, this.props));
            case "null":
                return React.createElement(NullEditor, tslib_1.__assign({}, this.props));
            case "string":
                return React.createElement(StringEditor, tslib_1.__assign({}, this.props));
            default:
                return null;
        }
    };
    return Editor;
}(React.Component));
export { Editor };
