import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
export * from "./common";

import { MarkdownItType } from "./libs";

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

@Component({
    template: vueTemplateHtml,
    props: ["schema", "initialValue", "theme", "icon", "locale", "readonly", "dragula", "markdownit", "hljs", "forceHttps", "disableFilters"],
})
class JSONEditor extends Vue {
    theme: string;
    locale: common.Locale;
    icon: string;
    markdownit: MarkdownItType;
    hljs: typeof hljs;
    forceHttps: boolean;
    disableFilters: boolean;

    themeObject = common.getTheme(this.theme);
    localeObject: common.Locale;
    iconObject: common.Icon;
    md = common.initializeMarkdown(this.markdownit, this.hljs, this.forceHttps);

    constructor() {
        super();
        this.localeObject = common.getLocale(this.locale);
        this.iconObject = common.getIcon(this.icon, this.localeObject);
    }

    updateValue(value: common.ValueType) {
        this.$emit("update-value", value);
    }
}

Vue.component("json-editor", JSONEditor);
