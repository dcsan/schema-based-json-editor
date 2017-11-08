/// <reference types="markdown-it" />
import * as toNumber from "lodash.tonumber";
import * as toInteger from "lodash.tointeger";
export { toNumber, toInteger };
/**
 * @public
 */
export declare type CommonSchema = {
    $schema?: string;
    title?: string;
    description?: string;
    default?: ValueType;
    readonly?: boolean;
    propertyOrder?: number;
};
export declare type ObjectSchema = CommonSchema & {
    type: "object";
    properties: {
        [name: string]: Schema;
    };
    required?: string[];
    maxProperties?: number;
    minProperties?: number;
    collapsed?: boolean;
};
export declare type ArraySchema = CommonSchema & {
    type: "array";
    items: Schema;
    minItems?: number;
    uniqueItems?: boolean;
    collapsed?: boolean;
};
export declare type NumberSchema = CommonSchema & {
    type: "number" | "integer";
    minimum?: number;
    exclusiveMinimum?: boolean;
    maximum?: number;
    exclusiveMaximum?: boolean;
    enum?: number[];
    multipleOf?: number;
};
export declare type StringSchema = CommonSchema & {
    type: "string";
    format?: "textarea" | "color" | "date" | "datetime" | "datetime-local" | "time" | "month" | "email" | "uri" | "url" | "week" | "hostname" | "ipv4" | "ipv6" | "code" | "markdown";
    enum?: string[];
    minLength?: number;
    maxLength?: number;
    pattern?: string;
};
export declare type BooleanSchema = CommonSchema & {
    type: "boolean";
};
export declare type NullSchema = CommonSchema & {
    type: "null";
};
export declare type Schema = ObjectSchema | ArraySchema | NumberSchema | StringSchema | BooleanSchema | NullSchema;
/**
 * @public
 */
export declare const themes: {
    [name: string]: Theme;
};
/**
 * @public
 */
export declare const defaultTheme: {
    rowContainer: string;
    row: string;
    formControl: string;
    button: string;
    help: string;
    errorRow: string;
    label: string;
    optionalCheckbox: string;
    buttonGroup: string;
    radiobox: string;
};
export declare type Theme = typeof defaultTheme;
export declare function getTheme(name: string | undefined | Theme): Theme;
/**
 * @public
 */
export declare const defaultLocale: {
    button: {
        collapse: string;
        expand: string;
        add: string;
        delete: string;
    };
    error: {
        minLength: string;
        maxLength: string;
        pattern: string;
        minimum: string;
        maximum: string;
        largerThan: string;
        smallerThan: string;
        minItems: string;
        uniqueItems: string;
        multipleOf: string;
        minProperties: string;
        maxProperties: string;
    };
    info: {
        notExists: string;
        true: string;
        false: string;
    };
    markdownTipLocale: {
        text: string;
        title: string;
    }[];
};
export declare type Locale = typeof defaultLocale;
/**
 * @public
 */
export declare const locales: {
    [name: string]: Locale;
};
export declare function getLocale(locale: undefined | null | Locale): Locale;
/**
 * @public
 */
export declare const bootstrap3Icon: {
    isText: boolean;
    collapse: string;
    expand: string;
    add: string;
    delete: string;
};
export declare type Icon = typeof bootstrap3Icon;
export declare function getIcon(name: string | undefined | Icon, locale: Locale): Icon;
export declare type ValueType = {
    [name: string]: any;
} | any[] | number | boolean | string | null;
export declare function getDefaultValue(required: boolean | undefined, schema: Schema, initialValue: ValueType | undefined): ValueType | undefined;
export declare const buttonGroupStyle: {
    marginLeft: string;
};
export declare const buttonGroupStyleString = "margin-left: 10px";
import { HLJS, Dragula, MarkdownIt, MarkdownItType } from "./libs";
export declare type Props<TSchema extends CommonSchema, TValue> = {
    schema: TSchema;
    initialValue: TValue;
    title?: string;
    updateValue: (value: TValue | undefined, isValid: boolean) => void;
    theme: Theme;
    icon: Icon;
    locale: Locale;
    onDelete?: () => void;
    readonly?: boolean;
    required?: boolean;
    dragula?: Dragula;
    md?: MarkdownIt;
    hljs?: HLJS;
    forceHttps?: boolean;
};
/**
 * @public
 */
export declare function isSame(value1: ValueType, value2: ValueType): boolean;
export declare function switchItem(value: any[], el: HTMLElement, sibling: HTMLElement | null): void;
export declare function getErrorMessageOfArray(value: any[] | undefined, schema: ArraySchema, locale: Locale): string;
export declare function getErrorMessageOfNumber(value: number | undefined, schema: NumberSchema, locale: Locale): string;
export declare function getErrorMessageOfString(value: string | undefined, schema: StringSchema, locale: Locale): string;
export declare function getErrorMessageOfObject(value: {
    [name: string]: ValueType;
} | undefined, schema: ObjectSchema, locale: Locale): string;
export declare function toggleOptional(value: ValueType | undefined, schema: Schema, initialValue: any): string | number | boolean | {
    [name: string]: any;
} | null | undefined;
export declare type ValidityValue<T> = {
    value: T;
    isValid: boolean;
};
export declare function recordInvalidPropertiesOfObject(invalidProperties: string[], isValid: boolean, property: string): void;
export declare function recordInvalidIndexesOfArray(invalidIndexes: number[], isValid: boolean, i: number): void;
export declare function isImageUrl(value?: string): boolean;
export declare function replaceProtocal(src: string): string;
export declare const imagePreviewStyleString = "display: block; height: auto; margin: 6px 0; max-width: 100%;";
export declare const imagePreviewStyle: {
    display: string;
    height: string;
    margin: string;
    maxWidth: string;
};
export declare function initializeMarkdown(markdownit: MarkdownItType | undefined, hljs: HLJS | undefined, forceHttps: boolean | undefined): MarkdownIt | undefined;
export declare function findTitle(value: {
    [name: string]: ValueType;
} | undefined, properties: {
    property: string;
    schema: Schema;
}[]): string | undefined;
export declare function getTitle(...titles: any[]): string;
export declare function compare(a: {
    property: string;
    schema: Schema;
}, b: {
    property: string;
    schema: Schema;
}): number;
export declare function filterObject({property, schema}: {
    property: string;
    schema: Schema;
}, filterValue: string): boolean;
export declare function filterArray(value: ValueType, index: number, schema: Schema, filterValue: string): boolean;
export declare const minItemCountIfNeedFilter = 6;
