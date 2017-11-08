import Vue from "vue";
import * as common from "../common";
export declare class NumberEditor extends Vue {
    schema: common.NumberSchema;
    initialValue?: number;
    title: string;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    readonly: boolean;
    required: boolean;
    hasDeleteButton: boolean;
    value?: number;
    errorMessage?: string;
    buttonGroupStyle: string;
    onChange(e: {
        target: {
            value: string;
        };
    }): void;
    beforeMount(): void;
    readonly useInput: boolean | undefined;
    readonly useSelect: boolean;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly titleToShow: string;
    readonly options: {
        value: number;
        label: number;
    }[];
    updateSelection(value: number): void;
    toggleOptional(): void;
    private validate();
}
