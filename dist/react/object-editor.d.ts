/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
/**
 * @public
 */
export declare type Props = common.Props<common.ObjectSchema, {
    [name: string]: common.ValueType;
}>;
/**
 * @public
 */
export declare type State = Partial<{
    collapsed?: boolean;
    value?: {
        [name: string]: common.ValueType;
    };
    invalidProperties: string[];
    errorMessage: string;
    properties: {
        property: string;
        schema: common.Schema;
    }[];
    filter: string;
}>;
/**
 * @public
 */
export declare class ObjectEditor extends React.Component<Props, State> {
    private collapsed;
    private value?;
    private invalidProperties;
    private errorMessage;
    private properties;
    private filter;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
    private collapseOrExpand;
    private toggleOptional;
    private onFilterChange;
    private onChange;
    private isRequired(property);
    private validate();
    private readonly isReadOnly;
    private readonly hasDeleteButtonFunction;
    private readonly titleToShow;
    private readonly showFilter;
}
