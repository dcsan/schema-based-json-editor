import Vue from "vue";
import * as common from "../common";
export declare class Optional extends Vue {
    required: boolean | undefined;
    value: common.ValueType | undefined;
    isReadOnly: boolean | undefined;
    theme: common.Theme;
    locale: common.Locale;
    readonly hasOptionalCheckbox: boolean;
}
