import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "../common";
import { angularIconTemplateHtml } from "../angular-variables";
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.onClick = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], IconComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], IconComponent.prototype, "text", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], IconComponent.prototype, "onClick", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], IconComponent.prototype, "theme", void 0);
    IconComponent = tslib_1.__decorate([
        Component({
            selector: "icon",
            template: angularIconTemplateHtml,
        })
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
