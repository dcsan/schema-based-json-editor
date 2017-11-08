import { EventEmitter } from "@angular/core";
import * as common from "../common";
export declare class OptionalComponent {
    required: boolean | undefined;
    value: common.ValueType | undefined;
    isReadOnly: boolean | undefined;
    theme: common.Theme;
    locale: common.Locale;
    toggleOptional: EventEmitter<{}>;
    readonly hasOptionalCheckbox: boolean;
}
