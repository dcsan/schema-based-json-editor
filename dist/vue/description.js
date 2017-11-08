import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
var Description = /** @class */ (function (_super) {
    tslib_1.__extends(Description, _super);
    function Description() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Description = tslib_1.__decorate([
        Component({
            template: "<p v-if=\"notEmpty || message\" :class=\"theme.help\">{{message}}</p>",
            props: ["theme", "message", "notEmpty"],
        })
    ], Description);
    return Description;
}(Vue));
export { Description };
