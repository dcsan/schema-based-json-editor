/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare type Props = common.Props<common.NullSchema, null>;
/**
 * @public
 */
export declare type State = Partial<{
    value?: null;
}>;
/**
 * @public
 */
export declare class NullEditor extends React.Component<Props, State> {
    private value?;
    constructor(props: Props);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
    private toggleOptional;
    private readonly isReadOnly;
    private readonly hasDeleteButtonFunction;
    private readonly titleToShow;
}
