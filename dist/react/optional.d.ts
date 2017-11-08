/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare class Optional extends React.Component<{
    required: boolean | undefined;
    value: common.ValueType | undefined;
    isReadOnly: boolean | undefined;
    theme: common.Theme;
    locale: common.Locale;
    toggleOptional: () => void;
}, {}> {
    render(): JSX.Element | null;
}
