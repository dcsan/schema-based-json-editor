import { locale as markdownTipLocale } from "markdown-tip/locales/zh-CN";
/**
 * @public
 */
export var locale = {
    button: {
        collapse: "折叠",
        expand: "显示",
        add: "增加",
        delete: "删除",
    },
    error: {
        minLength: "要求至少 {0} 字符。",
        maxLength: "要求至多 {0} 字符。",
        pattern: "要求匹配模式 {0}。",
        minimum: "要求 >= {0}。",
        maximum: "要求 <= {0}。",
        largerThan: "要求 > {0}。",
        smallerThan: "要求 < {0}。",
        minItems: "数组的长度要求 >= {0}。",
        uniqueItems: "{0} 和 {1} 的项不应该相同。",
        multipleOf: "要求是 {0} 的整数倍。",
        minProperties: "要求属性个数 >= {0}。",
        maxProperties: "要求属性个数 <= {0}。",
    },
    info: {
        notExists: "不存在",
        true: "是",
        false: "否",
    },
    markdownTipLocale: markdownTipLocale,
};
