/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare type Props = common.Props<common.NumberSchema, number>;
/**
 * @public
 */
export declare type State = Partial<{
    value?: number;
    errorMessage: string;
    willRender: boolean;
}>;
/**
 * @public
 */
export declare class NumberEditor extends React.Component<Props, State> {
    private value?;
    private errorMessage;
    private willRender;
    constructor(props: Props);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
    private onChange;
    private validate();
    private toggleOptional;
    private readonly useInput;
    private readonly useSelect;
    private readonly isReadOnly;
    private readonly hasDeleteButtonFunction;
    private readonly titleToShow;
    private readonly options;
    private updateSelection(value);
}
