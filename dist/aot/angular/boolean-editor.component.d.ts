import { EventEmitter } from "@angular/core";
import * as common from "../common";
export declare class BooleanEditorComponent {
    schema: common.BooleanSchema;
    initialValue: boolean;
    title?: string;
    updateValue: EventEmitter<common.ValidityValue<boolean | undefined>>;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    onDelete: EventEmitter<{}>;
    readonly?: boolean;
    required?: boolean;
    hasDeleteButton: boolean;
    value?: boolean;
    buttonGroupStyle: string;
    ngOnInit(): void;
    onChange(e: {
        target: {
            checked: boolean;
        };
    }): void;
    toggleOptional(): void;
    readonly isReadOnly: boolean | undefined;
    readonly hasDeleteButtonFunction: boolean;
    readonly titleToShow: string;
}
