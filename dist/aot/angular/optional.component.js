import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { angularOptionalTemplateHtml } from "../angular-variables";
var OptionalComponent = /** @class */ (function () {
    function OptionalComponent() {
    }
    Object.defineProperty(OptionalComponent.prototype, "hasOptionalCheckbox", {
        get: function () {
            return !this.required && (this.value === undefined || !this.isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    return OptionalComponent;
}());
export { OptionalComponent };
