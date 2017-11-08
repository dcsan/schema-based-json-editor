import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { angularOptionalTemplateHtml } from "../angular-variables";
var OptionalComponent = /** @class */ (function () {
    function OptionalComponent() {
        this.toggleOptional = new EventEmitter();
    }
    Object.defineProperty(OptionalComponent.prototype, "hasOptionalCheckbox", {
        get: function () {
            return !this.required && (this.value === undefined || !this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OptionalComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OptionalComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OptionalComponent.prototype, "isReadOnly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OptionalComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OptionalComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], OptionalComponent.prototype, "toggleOptional", void 0);
    OptionalComponent = tslib_1.__decorate([
        Component({
            selector: "optional",
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: angularOptionalTemplateHtml,
        })
    ], OptionalComponent);
    return OptionalComponent;
}());
export { OptionalComponent };
