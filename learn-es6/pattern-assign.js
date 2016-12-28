// 对象克隆: 复制自有属性
function clone(origin) {
    return Object.assign({}, origin);
}

// 指定默认值
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
};