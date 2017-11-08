import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import { vueOptionalTemplateHtml } from "../vue-variables";
var Optional = /** @class */ (function (_super) {
    tslib_1.__extends(Optional, _super);
    function Optional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Optional.prototype, "hasOptionalCheckbox", {
        get: function () {
            return !this.required && (this.value === undefined || !this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Optional = tslib_1.__decorate([
        Component({
            template: vueOptionalTemplateHtml,
            props: ["required", "value", "isReadOnly", "theme", "locale"],
        })
    ], Optional);
    return Optional;
}(Vue));
export { Optional };
