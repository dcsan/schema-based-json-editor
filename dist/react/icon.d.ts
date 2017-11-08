/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare class Icon extends React.Component<{
    icon: common.Icon;
    text: string;
    valid: boolean | undefined;
    onClick: () => void;
    theme: common.Theme;
}, {}> {
    render(): JSX.Element | null;
}
