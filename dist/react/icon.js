import * as tslib_1 from "tslib";
import * as React from "react";
/**
 * @public
 */
var Icon = /** @class */ (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        if (this.props.valid) {
            if (this.props.icon.isText) {
                return (React.createElement("button", { className: this.props.theme.button, onClick: this.props.onClick }, this.props.text));
            }
            else {
                return (React.createElement("button", { className: this.props.theme.button, onClick: this.props.onClick },
                    React.createElement("i", { className: this.props.text })));
            }
        }
        return null;
    };
    return Icon;
}(React.Component));
export { Icon };
