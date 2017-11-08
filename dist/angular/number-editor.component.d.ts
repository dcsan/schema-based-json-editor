import { EventEmitter } from "@angular/core";
import * as common from "../common";
export declare class NumberEditorComponent {
    schema: common.NumberSchema;
    initialValue: number;
    title?: string;
    updateValue: EventEmitter<common.ValidityValue<number | undefined>>;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    onDelete: EventEmitter<{}>;
    readonly?: boolean;
    required?: boolean;
    hasDeleteButton: boolean;
    value?: number;
    errorMessage: string;
    buttonGroupStyle: string;
    onChange(e: {
        target: {
            value: string;
        };
    }): void;
    ngOnInit(): void;
    readonly useInput: boolean | undefined;
    readonly useSelect: boolean;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly titleToShow: string;
    trackByFunction(index: number, value: number): number;
    toggleOptional(): void;
    private validate();
}
