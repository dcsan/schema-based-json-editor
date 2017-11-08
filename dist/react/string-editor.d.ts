/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare type Props = common.Props<common.StringSchema, string>;
/**
 * @public
 */
export declare type State = Partial<{
    value: string;
    errorMessage: string;
    collapsed: boolean;
    willRender: boolean;
}>;
/**
 * @public
 */
export declare class StringEditor extends React.Component<Props, State> {
    private value?;
    private errorMessage;
    private collapsed;
    private willRender;
    constructor(props: Props);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
    private onChange;
    private readonly isReadOnly;
    private readonly hasDeleteButtonFunction;
    private readonly useTextArea;
    private readonly useInput;
    private readonly useSelect;
    private readonly canPreviewImage;
    private readonly canPreviewMarkdown;
    private readonly canPreviewCode;
    private readonly canPreview;
    private readonly getImageUrl;
    private readonly getMarkdown;
    private readonly getCode;
    private readonly willPreviewImage;
    private readonly willPreviewMarkdown;
    private readonly willPreviewCode;
    private readonly titleToShow;
    private readonly options;
    private updateSelection(value);
    private validate();
    private toggleOptional;
    private collapseOrExpand;
}
