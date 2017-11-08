import * as tslib_1 from "tslib";
import * as React from "react";
/**
 * @public
 */
var Description = /** @class */ (function (_super) {
    tslib_1.__extends(Description, _super);
    function Description() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Description.prototype.render = function () {
        if (this.props.notEmpty || this.props.message) {
            return React.createElement("p", { className: this.props.theme.help }, this.props.message);
        }
        return null;
    };
    return Description;
}(React.Component));
export { Description };
