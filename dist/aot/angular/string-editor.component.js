import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import * as common from "../common";
import { Dragula, MarkdownIt } from "../libs";
import { angularStringEditorTemplateHtml } from "../angular-variables";
var StringEditorComponent = /** @class */ (function () {
    function StringEditorComponent() {
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
            return this.forceHttps ? common.replaceProtocal((this.value)) : this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "getMarkdown", {
        get: function () {
            return this.md.render((this.value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringEditorComponent.prototype, "getCode", {
        get: function () {
            return this.hljs.highlightAuto((this.value)).value;
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
    return StringEditorComponent;
}());
export { StringEditorComponent };
