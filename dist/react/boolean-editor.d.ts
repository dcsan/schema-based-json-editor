/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare type Props = common.Props<common.BooleanSchema, boolean>;
/**
 * @public
 */
export declare type State = Partial<{
    value?: boolean;
    willRender: boolean;
}>;
/**
 * @public
 */
export declare class BooleanEditor extends React.Component<Props, State> {
    private value?;
    private willRender;
    constructor(props: Props);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
    private onChange;
    private toggleOptional;
    private readonly isReadOnly;
    private readonly hasDeleteButtonFunction;
    private readonly titleToShow;
}
