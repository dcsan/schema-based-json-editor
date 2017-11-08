import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import { vueIconTemplateHtml } from "../vue-variables";
var Icon = /** @class */ (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon = tslib_1.__decorate([
        Component({
            template: vueIconTemplateHtml,
            props: ["icon", "text", "theme"],
        })
    ], Icon);
    return Icon;
}(Vue));
export { Icon };
