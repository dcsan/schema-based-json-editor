import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
export * from "./common";
import { ArrayEditor } from "./vue/array-editor";
import { BooleanEditor } from "./vue/boolean-editor";
import { Editor } from "./vue/editor";
import { Icon } from "./vue/icon";
import { NullEditor } from "./vue/null-editor";
import { NumberEditor } from "./vue/number-editor";
import { ObjectEditor } from "./vue/object-editor";
import { StringEditor } from "./vue/string-editor";
import { Optional } from "./vue/optional";
import { Description } from "./vue/description";
Vue.component("array-editor", ArrayEditor);
Vue.component("boolean-editor", BooleanEditor);
Vue.component("editor", Editor);
Vue.component("icon", Icon);
Vue.component("null-editor", NullEditor);
Vue.component("numberEditor", NumberEditor);
Vue.component("objectEditor", ObjectEditor);
Vue.component("stringEditor", StringEditor);
Vue.component("optional", Optional);
Vue.component("description", Description);
import { vueTemplateHtml } from "./vue-variables";
var JSONEditor = /** @class */ (function (_super) {
    tslib_1.__extends(JSONEditor, _super);
    function JSONEditor() {
        var _this = _super.call(this) || this;
        _this.themeObject = common.getTheme(_this.theme);
        _this.md = common.initializeMarkdown(_this.markdownit, _this.hljs, _this.forceHttps);
        _this.localeObject = common.getLocale(_this.locale);
        _this.iconObject = common.getIcon(_this.icon, _this.localeObject);
        return _this;
    }
    JSONEditor.prototype.updateValue = function (value) {
        this.$emit("update-value", value);
    };
    JSONEditor = tslib_1.__decorate([
        Component({
            template: vueTemplateHtml,
            props: ["schema", "initialValue", "theme", "icon", "locale", "readonly", "dragula", "markdownit", "hljs", "forceHttps", "disableFilters"],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], JSONEditor);
    return JSONEditor;
}(Vue));
Vue.component("json-editor", JSONEditor);
