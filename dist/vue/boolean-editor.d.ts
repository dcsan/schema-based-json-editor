import Vue from "vue";
import * as common from "../common";
export declare class BooleanEditor extends Vue {
    schema: common.ArraySchema;
    initialValue?: boolean;
    title: string;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    readonly: boolean;
    required: boolean;
    hasDeleteButton: boolean;
    value?: boolean;
    buttonGroupStyle: string;
    beforeMount(): void;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly titleToShow: string;
    onChange(e: {
        target: {
            checked: boolean;
        };
    }): void;
    toggleOptional(): void;
}
