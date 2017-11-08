import * as tslib_1 from "tslib";
import Vue from "vue";
import Component from "vue-class-component";
import { vueEditorTemplateHtml } from "../vue-variables";
var Editor = /** @class */ (function (_super) {
    tslib_1.__extends(Editor, _super);
    function Editor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Editor = tslib_1.__decorate([
        Component({
            template: vueEditorTemplateHtml,
            props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton", "dragula", "md", "hljs", "forceHttps"],
        })
    ], Editor);
    return Editor;
}(Vue));
export { Editor };
