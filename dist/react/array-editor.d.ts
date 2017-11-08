/// <reference types="dragula" />
/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare type Props = common.Props<common.ArraySchema, common.ValueType[]>;
/**
 * @public
 */
export declare type State = Partial<{
    renderSwitch: number;
    collapsed?: boolean;
    value?: common.ValueType[];
    drak?: dragula.Drake;
    errorMessage: string;
    invalidIndexes: number[];
    filter: string;
}>;
/**
 * @public
 */
export declare class ArrayEditor extends React.Component<Props, State> {
    private renderSwitch;
    private collapsed;
    private value?;
    private drak?;
    private errorMessage;
    private invalidIndexes;
    private filter;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private collapseOrExpand;
    private toggleOptional;
    private validate();
    private addItem;
    private onChange;
    private onFilterChange;
    private onDeleteFunction;
    private readonly isReadOnly;
    private readonly hasDeleteButtonFunction;
    private readonly hasAddButton;
    private readonly getValue;
    private readonly titleToShow;
    private readonly showFilter;
}
