import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { angularStringEditorTemplateHtml } from "../angular-variables";
var StringEditorComponent = /** @class */ (function () {
    function StringEditorComponent() {
        var _this = this;
        this.updateValue = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.buttonGroupStyle = common.buttonGroupStyleString;
        this.collapsed = false;
        this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.schema, _this.initialValue);
            _this.validate();
            _this.updateValue.emit({ value: _this.value, isValid: !_this.errorMessage });
        };
        this.collapseOrExpand = function () {
            _this.collapsed = !_this.collapsed;
        };
    }
    StringEditorComponent.prototype.onChange = function (e) {
        this.value = e.target.value;
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    };
    StringEditorComponent.prototype.ngOnInit = function () {
        this.value = common.getDefaultValue(this.required, this.schema, this.initialValue);
        this.validate();
        this.updateValue.emit({ value: this.value, isValid: !this.errorMessage });
    };
    Object.defineProperty(StringEditorComponent.prototype, "useTextArea", {
        get: function () {
            return this.value !== undefined
                && !this.collapsed
                && (this.schema.enum === undefined || this.isReadOnly)
                && (this.schema.format === "textarea" || this.schema.format === "code" || this.schema.format === "markdown");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "useInput", {
        get: function () {
            return this.value !== undefined
                && !this.collapsed
                && (this.schema.enum === undefined || this.isReadOnly)
                && (this.schema.format !== "textarea" && this.schema.format !== "code" && this.schema.format !== "markdown");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "useSelect", {
        get: function () {
            return this.value !== undefined && this.schema.enum !== undefined && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "canPreviewImage", {
        get: function () {
            return common.isImageUrl(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "canPreviewMarkdown", {
        get: function () {
            return this.md && this.schema.format === "markdown";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "canPreviewCode", {
        get: function () {
            return this.hljs && this.schema.format === "code";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "canPreview", {
        get: function () {
            return (!!this.value) && (this.canPreviewImage || this.canPreviewMarkdown || this.canPreviewCode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "getImageUrl", {
        get: function () {
            return this.forceHttps ? common.replaceProtocal(this.value) : this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "getMarkdown", {
        get: function () {
            return this.md.render(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "getCode", {
        get: function () {
            return this.hljs.highlightAuto(this.value).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "isReadOnly", {
        get: function () {
            return this.readonly || this.schema.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "hasDeleteButtonFunction", {
        get: function () {
            return this.hasDeleteButton && !this.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "willPreviewImage", {
        get: function () {
            return this.value && !this.collapsed && this.canPreviewImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "willPreviewMarkdown", {
        get: function () {
            return this.value && !this.collapsed && this.canPreviewMarkdown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "willPreviewCode", {
        get: function () {
            return this.value && !this.collapsed && this.canPreviewCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "titleToShow", {
        get: function () {
            return common.getTitle(this.title, this.schema.title);
        },
        enumerable: true,
        configurable: true
    });
    StringEditorComponent.prototype.trackByFunction = function (index, value) {
        return index;
    };
    StringEditorComponent.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfString(this.value, this.schema, this.locale);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "schema", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StringEditorComponent.prototype, "initialValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StringEditorComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "updateValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "onDelete", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StringEditorComponent.prototype, "readonly", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StringEditorComponent.prototype, "required", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StringEditorComponent.prototype, "hasDeleteButton", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], StringEditorComponent.prototype, "dragula", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "md", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StringEditorComponent.prototype, "hljs", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StringEditorComponent.prototype, "forceHttps", void 0);
    StringEditorComponent = tslib_1.__decorate([
        Component({
            selector: "string-editor",
            styles: [
                ".schema-based-json-editor-image-preview {" + common.imagePreviewStyleString + "}",
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: angularStringEditorTemplateHtml,
        })
    ], StringEditorComponent);
    return StringEditorComponent;
}());
export { StringEditorComponent };
