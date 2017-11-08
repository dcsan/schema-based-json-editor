import * as tslib_1 from "tslib";
import * as React from "react";
/**
 * @public
 */
var Optional = /** @class */ (function (_super) {
    tslib_1.__extends(Optional, _super);
    function Optional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Optional.prototype.render = function () {
        if (!this.props.required && (this.props.value === undefined || !this.props.isReadOnly)) {
            return (React.createElement("div", { className: this.props.theme.optionalCheckbox },
                React.createElement("label", null,
                    React.createElement("input", { type: "checkbox", onChange: this.props.toggleOptional, checked: this.props.value === undefined, disabled: this.props.isReadOnly }),
                    this.props.locale.info.notExists)));
        }
        return null;
    };
    return Optional;
}(React.Component));
export { Optional };
