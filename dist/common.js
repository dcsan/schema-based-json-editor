import * as toNumber from "lodash.tonumber";
import * as toInteger from "lodash.tointeger";
import * as isObject from "lodash.isobject";
import * as isInteger from "lodash.isinteger";
import { defaultLocale as defaultMarkDownTipLocale } from "markdown-tip/common";
export { toNumber, toInteger };
import { __extends, __decorate, __assign } from "tslib";
window.__extends = __extends;
window.__decorate = __decorate;
window.__assign = __assign;
/**
 * @public
 */
export var themes = {
    bootstrap3: {
        rowContainer: "well bootstrap3-row-container",
        row: "row",
        formControl: "form-control",
        button: "btn btn-default",
        help: "help-block",
        errorRow: "row has-error",
        label: "control-label",
        optionalCheckbox: "checkbox pull-left",
        buttonGroup: "btn-group",
        radiobox: "radio-inline",
    },
};
/**
 * @public
 */
export var defaultTheme = {
    rowContainer: "",
    row: "",
    formControl: "",
    button: "",
    help: "",
    errorRow: "",
    label: "",
    optionalCheckbox: "",
    buttonGroup: "",
    radiobox: "",
};
export function getTheme(name) {
    if (name === undefined) {
        return defaultTheme;
    }
    if (typeof name === "string") {
        return themes[name] || defaultTheme;
    }
    return name;
}
/**
 * @public
 */
export var defaultLocale = {
    button: {
        collapse: "Collapse",
        expand: "Expand",
        add: "Add",
        delete: "Delete",
    },
    error: {
        minLength: "Value must be at least {0} characters long.",
        maxLength: "Value must be at most {0} characters long.",
        pattern: "Value doesn't match the pattern {0}.",
        minimum: "Value must be >= {0}.",
        maximum: "Value must be <= {0}.",
        largerThan: "Value must be > {0}.",
        smallerThan: "Value must be < {0}.",
        minItems: "The length of the array must be >= {0}.",
        uniqueItems: "The item in {0} and {1} must not be same.",
        multipleOf: "Value must be multiple value of {0}.",
        minProperties: "Properties count must be >= {0}.",
        maxProperties: "Properties count must be <= {0}.",
    },
    info: {
        notExists: "not exists",
        true: "true",
        false: "false",
    },
    markdownTipLocale: defaultMarkDownTipLocale,
};
/**
 * @public
 */
export var locales = {};
export function getLocale(locale) {
    return locale || defaultLocale;
}
/**
 * @public
 */
export var bootstrap3Icon = {
    isText: false,
    collapse: "glyphicon glyphicon-chevron-down",
    expand: "glyphicon glyphicon-chevron-right",
    add: "glyphicon glyphicon-plus",
    delete: "glyphicon glyphicon-remove",
};
var icons = {
    bootstrap3: bootstrap3Icon,
    fontawesome4: {
        isText: false,
        collapse: "fa fa-caret-square-o-down",
        expand: "fa fa-caret-square-o-right",
        add: "fa fa-plus",
        delete: "fa fa-times",
    },
};
export function getIcon(name, locale) {
    if (name === undefined) {
        return {
            isText: true,
            collapse: locale.button.collapse,
            expand: locale.button.expand,
            add: locale.button.add,
            delete: locale.button.delete,
        };
    }
    if (typeof name === "string") {
        return icons[name] || {
            isText: true,
            collapse: locale.button.collapse,
            expand: locale.button.expand,
            add: locale.button.add,
            delete: locale.button.delete,
        };
    }
    return name;
}
export function getDefaultValue(required, schema, initialValue) {
    if (initialValue !== undefined) {
        switch (schema.type) {
            case "object":
                if (isObject(initialValue)) {
                    return initialValue;
                }
                break;
            case "array":
                if (Array.isArray(initialValue)) {
                    return initialValue;
                }
                break;
            case "number":
            case "integer":
                if (typeof initialValue === "number") {
                    return initialValue;
                }
                break;
            case "boolean":
                if (typeof initialValue === "boolean") {
                    return initialValue;
                }
                break;
            case "string":
                if (typeof initialValue === "string") {
                    return initialValue;
                }
                break;
            case "null":
            default:
                if (initialValue === null) {
                    return initialValue;
                }
        }
    }
    if (!required) {
        return undefined;
    }
    if (schema.default !== undefined) {
        switch (schema.type) {
            case "object":
                if (isObject(schema.default)) {
                    return schema.default;
                }
                break;
            case "array":
                if (Array.isArray(schema.default)) {
                    return schema.default;
                }
                break;
            case "number":
            case "integer":
                if (typeof schema.default === "number") {
                    return schema.default;
                }
                break;
            case "boolean":
                if (typeof schema.default === "boolean") {
                    return schema.default;
                }
                break;
            case "string":
                if (typeof schema.default === "string") {
                    return schema.default;
                }
                break;
            case "null":
            default:
                if (schema.default === null) {
                    return schema.default;
                }
        }
    }
    switch (schema.type) {
        case "object":
            return {};
        case "array":
            return [];
        case "number":
        case "integer":
            if (schema.enum !== undefined && schema.enum.length > 0) {
                return schema.enum[0];
            }
            else {
                return 0;
            }
        case "boolean":
            return false;
        case "string":
            if (schema.enum !== undefined && schema.enum.length > 0) {
                return schema.enum[0];
            }
            else {
                return "";
            }
        case "null":
        default:
            return null;
    }
}
export var buttonGroupStyle = { marginLeft: "10px" };
export var buttonGroupStyleString = "margin-left: 10px";
/**
 * @public
 */
export function isSame(value1, value2) {
    if (typeof value1 === "string"
        || typeof value1 === "number"
        || typeof value1 === "boolean"
        || value1 === null
        || value1 === undefined) {
        return value1 === value2;
    }
    if (typeof value2 === "string"
        || typeof value2 === "number"
        || typeof value2 === "boolean"
        || value2 === null
        || value2 === undefined) {
        return false;
    }
    if (Array.isArray(value1)) {
        if (Array.isArray(value2) && value1.length === value2.length) {
            for (var i = 0; i < value1.length; i++) {
                if (!isSame(value1[i], value2[i])) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    if (Array.isArray(value2)
        || Object.keys(value1).length !== Object.keys(value1).length) {
        return false;
    }
    for (var key in value1) {
        if (value1.hasOwnProperty(key) && !isSame(value1[key], value2[key])) {
            return false;
        }
    }
    return true;
}
export function switchItem(value, el, sibling) {
    var fromIndex = +el.dataset.index;
    if (sibling) {
        var toIndex = +sibling.dataset.index;
        value.splice(toIndex, 0, value[fromIndex]);
        if (fromIndex > toIndex) {
            value.splice(fromIndex + 1, 1);
        }
        else {
            value.splice(fromIndex, 1);
        }
    }
    else {
        value.push(value[fromIndex]);
        value.splice(fromIndex, 1);
    }
}
export function getErrorMessageOfArray(value, schema, locale) {
    if (value !== undefined) {
        if (schema.minItems !== undefined) {
            if (value.length < schema.minItems) {
                return locale.error.minItems.replace("{0}", String(schema.minItems));
            }
        }
        if (schema.uniqueItems) {
            for (var i = 1; i < value.length; i++) {
                for (var j = 0; j < i; j++) {
                    if (isSame(value[i], value[j])) {
                        return locale.error.uniqueItems.replace("{0}", String(j)).replace("{1}", String(i));
                    }
                }
            }
        }
    }
    return "";
}
export function getErrorMessageOfNumber(value, schema, locale) {
    if (value !== undefined) {
        if (schema.minimum !== undefined) {
            if (schema.exclusiveMinimum) {
                if (value <= schema.minimum) {
                    return locale.error.largerThan.replace("{0}", String(schema.minimum));
                }
            }
            else {
                if (value < schema.minimum) {
                    return locale.error.minimum.replace("{0}", String(schema.minimum));
                }
            }
        }
        if (schema.maximum !== undefined) {
            if (schema.exclusiveMaximum) {
                if (value >= schema.maximum) {
                    return locale.error.smallerThan.replace("{0}", String(schema.maximum));
                }
            }
            else {
                if (value > schema.maximum) {
                    return locale.error.maximum.replace("{0}", String(schema.maximum));
                }
            }
        }
        if (schema.multipleOf && schema.multipleOf > 0) {
            if (!isInteger(value / schema.multipleOf)) {
                return locale.error.multipleOf.replace("{0}", String(schema.multipleOf));
            }
        }
    }
    return "";
}
export function getErrorMessageOfString(value, schema, locale) {
    if (value !== undefined) {
        if (schema.minLength !== undefined
            && value.length < schema.minLength) {
            return locale.error.minLength.replace("{0}", String(schema.minLength));
        }
        if (schema.maxLength !== undefined
            && value.length > schema.maxLength) {
            return locale.error.maxLength.replace("{0}", String(schema.maxLength));
        }
        if (schema.pattern !== undefined
            && !new RegExp(schema.pattern).test(value)) {
            return locale.error.pattern.replace("{0}", String(schema.pattern));
        }
    }
    return "";
}
export function getErrorMessageOfObject(value, schema, locale) {
    if (value !== undefined) {
        var length_1 = 0;
        for (var key in value) {
            if (value.hasOwnProperty(key) && value[key] !== undefined) {
                length_1++;
            }
        }
        if (schema.minProperties !== undefined
            && length_1 < schema.minProperties) {
            return locale.error.minProperties.replace("{0}", String(schema.minProperties));
        }
        if (schema.maxProperties !== undefined
            && length_1 > schema.maxProperties) {
            return locale.error.maxProperties.replace("{0}", String(schema.maxProperties));
        }
    }
    return "";
}
export function toggleOptional(value, schema, initialValue) {
    if (value === undefined) {
        return getDefaultValue(true, schema, initialValue);
    }
    else {
        return undefined;
    }
}
export function recordInvalidPropertiesOfObject(invalidProperties, isValid, property) {
    var index = invalidProperties.indexOf(property);
    if (isValid) {
        if (index !== -1) {
            invalidProperties.splice(index, 1);
        }
    }
    else {
        if (index === -1) {
            invalidProperties.push(property);
        }
    }
}
export function recordInvalidIndexesOfArray(invalidIndexes, isValid, i) {
    var index = invalidIndexes.indexOf(i);
    if (isValid) {
        if (index !== -1) {
            invalidIndexes.splice(index, 1);
        }
    }
    else {
        if (index === -1) {
            invalidIndexes.push(i);
        }
    }
}
var imageExtensions = [".png", ".jpg", ".bmp", ".gif"];
export function isImageUrl(value) {
    if (!value || value.length <= "https://".length) {
        return false;
    }
    if (value.substr(0, "http://".length) !== "http://"
        && value.substr(0, "https://".length) !== "https://") {
        return false;
    }
    var extensionName = value.substr(value.length - 4, 4);
    return imageExtensions.indexOf(extensionName) !== -1;
}
export function replaceProtocal(src) {
    if (src.indexOf("http://") === 0 && src.indexOf("http://localhost") !== 0) {
        return "https://" + src.substring("http://".length);
    }
    return src;
}
export var imagePreviewStyleString = "display: block; height: auto; margin: 6px 0; max-width: 100%;";
export var imagePreviewStyle = {
    display: "block",
    height: "auto",
    margin: "6px 0",
    maxWidth: "100%",
};
function printInConsole(message) {
    // tslint:disable-next-line:no-console
    console.log(message);
}
export function initializeMarkdown(markdownit, hljs, forceHttps) {
    if (!markdownit) {
        return undefined;
    }
    var md = markdownit({
        linkify: true,
        highlight: function (str, lang) {
            if (hljs) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return "<pre><code class=\"hljs " + lang + "\">" + hljs.highlight(lang, str).value + "</code></pre>";
                    }
                    catch (error) {
                        printInConsole(error);
                    }
                }
                else {
                    try {
                        return "<pre><code class=\"hljs\">" + hljs.highlightAuto(str).value + "</code></pre>";
                    }
                    catch (error) {
                        printInConsole(error);
                    }
                }
            }
            return "<pre><code class=\"hljs\">" + md.utils.escapeHtml(str) + "</code></pre>";
        },
    });
    md.renderer.rules.image = function (tokens, index, options, env, self) {
        var token = tokens[index];
        var aIndex = token.attrIndex("src");
        if (forceHttps) {
            token.attrs[aIndex][1] = replaceProtocal(token.attrs[aIndex][1]);
        }
        token.attrPush(["style", imagePreviewStyleString]);
        return md.renderer.rules.image(tokens, index, options, env, self);
    };
    var defaultLinkRender;
    if (md.renderer.rules.link_open) {
        defaultLinkRender = md.renderer.rules.link_open;
    }
    else {
        defaultLinkRender = function (tokens, index, options, env, self) {
            return self.renderToken(tokens, index, options);
        };
    }
    md.renderer.rules.link_open = function (tokens, index, options, env, self) {
        tokens[index].attrPush(["target", "_blank"]);
        tokens[index].attrPush(["rel", "nofollow"]);
        return defaultLinkRender(tokens, index, options, env, self);
    };
    return md;
}
export function findTitle(value, properties) {
    if (value) {
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i].property;
            var title = value[property];
            if (typeof title === "string" && title.length > 0) {
                if (title.length > 23) {
                    return title.substring(0, 20) + "...";
                }
                return title;
            }
            else {
                continue;
            }
        }
    }
    return undefined;
}
function findTitleFromSchema(value, schema) {
    if (value) {
        for (var property in schema.properties) {
            if (schema.properties.hasOwnProperty(property)) {
                var title = value[property];
                if (typeof title === "string" && title.length > 0) {
                    if (title.length > 23) {
                        return title.substring(0, 20) + "...";
                    }
                    return title;
                }
                else {
                    continue;
                }
            }
        }
    }
    return undefined;
}
export function getTitle() {
    var titles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        titles[_i] = arguments[_i];
    }
    for (var _a = 0, titles_1 = titles; _a < titles_1.length; _a++) {
        var title = titles_1[_a];
        if (title === undefined || title === null) {
            continue;
        }
        return String(title);
    }
    return "";
}
export function compare(a, b) {
    if (typeof a.schema.propertyOrder === "number") {
        if (typeof b.schema.propertyOrder === "number") {
            return a.schema.propertyOrder - b.schema.propertyOrder;
        }
        return -1;
    }
    if (typeof b.schema.propertyOrder === "number") {
        return 1;
    }
    return 0;
}
export function filterObject(_a, filterValue) {
    var property = _a.property, schema = _a.schema;
    return filterValue === ""
        || property.indexOf(filterValue) !== -1
        || (!!schema.title && schema.title.indexOf(filterValue) !== -1)
        || (!!schema.description && schema.description.indexOf(filterValue) !== -1);
}
export function filterArray(value, index, schema, filterValue) {
    var result = filterValue === ""
        || String(index).indexOf(filterValue) !== -1
        || (schema.type === "string" && value.indexOf(filterValue) !== -1)
        || ((schema.type === "number" || schema.type === "integer") && String(value).indexOf(filterValue) !== -1);
    if (result) {
        return true;
    }
    if (schema.type === "object") {
        var title = getTitle(findTitleFromSchema(value, schema), schema.title);
        return title.indexOf(filterValue) !== -1;
    }
    return false;
}
export var minItemCountIfNeedFilter = 6;
