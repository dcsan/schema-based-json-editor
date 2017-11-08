import Vue from "vue";
import * as common from "../common";
export declare class NullEditor extends Vue {
    schema: common.ArraySchema;
    initialValue?: null;
    title: string;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    readonly: boolean;
    required: boolean;
    hasDeleteButton: boolean;
    value?: null;
    buttonGroupStyle: string;
    beforeMount(): void;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly titleToShow: string;
    toggleOptional(): void;
}
