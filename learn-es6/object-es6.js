const assert = require('assert');

// 属性简写
const birth = '2000/01/01';
const person = {
    name: '张三',

    // 等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() {
        console.log('我的名字是', this.name);
    },
};

person.hello();


/* [] 用于属性定义 */
const propKey = 'foo';
let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123,
};


/* 方法名 */
function test_f() {
}
obj = {
    f: test_f,
    g() {
    },
};
assert.equal(obj.f.name, 'test_f');
assert.equal(obj.g.name, 'g');


/* 是否是同一个对象 */
assert(Object.is('foo', 'foo'));
assert(!Object.is({}, {}));


/* 对象合并:  只复制属性 */
function test_assign() {
    const target = {
        a: 1,
        b: 2,
    };

    const obj = {
        c: 3,
        d: 4,
        f() {
        },
    };

    assert(Object.assign(target, obj) === target);
    console.log(target);
    console.log(obj);
}
test_assign();


/* 遍历对象 */
function test_iter() {
    let { keys, values, entries } = Object;
    const obj = {a: 1, b: 2, c: 3};

    for (const key of keys(obj)) {
        console.log(key); // 'a', 'b', 'c'
    }
}
test_iter();


/* 解构 */
let [head, ...tail] = [1, 2, 3, 4];
console.log(head);// 1
console.log(tail);// [2, 3, 4]

[x, y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 2
