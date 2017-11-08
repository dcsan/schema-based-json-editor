/// <reference types="highlight.js" />
/// <reference types="react" />
import * as React from "react";
import * as common from "./common";
export * from "./common";
import { Dragula, MarkdownItType } from "./libs";
/**
 * @public
 */
export declare type Props = {
    schema: common.Schema;
    initialValue: common.ValueType;
    updateValue: (value: common.ValueType | undefined, isValid: boolean) => void;
    theme?: string;
    icon?: string;
    locale?: common.Locale | null;
    readonly?: boolean;
    dragula?: Dragula;
    markdownit?: MarkdownItType;
    hljs?: typeof hljs;
    forceHttps?: boolean;
};
/**
 * @public
 */
export declare class JSONEditor extends React.Component<Props, {}> {
    private theme;
    private locale;
    private icon;
    private md?;
    constructor(props: Props);
    render(): JSX.Element;
    private updateValue;
}
