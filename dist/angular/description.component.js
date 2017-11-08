import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import * as common from "../common";
var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DescriptionComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DescriptionComponent.prototype, "message", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], DescriptionComponent.prototype, "notEmpty", void 0);
    DescriptionComponent = tslib_1.__decorate([
        Component({
            selector: "description",
            template: "<p *ngIf=\"notEmpty || message\" [class]=\"theme.help\">{{message}}</p>",
        })
    ], DescriptionComponent);
    return DescriptionComponent;
}());
export { DescriptionComponent };
