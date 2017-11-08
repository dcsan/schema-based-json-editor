/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare class Description extends React.Component<{
    theme: common.Theme;
    message: string | undefined;
    notEmpty?: boolean;
}, {}> {
    render(): JSX.Element | null;
}
