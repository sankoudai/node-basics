/* 解构赋值 */
/*使用数组成员对变量赋值时，优先使用解构赋值。 */
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;


/* 函数的参数如果是对象的成员，优先使用解构赋值。 */
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
}

// good
function getFullName(obj) {
    const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}


/*如果函数返回多个值，优先使用对象的解构赋值*/
// bad
function processInput(input) {
    return [left, right, top, bottom];
}

// good
function processInput(input) {
    return {left, right, top, bottom};
}

const { left, right } = processInput(input);


/* 数组 */
/*使用扩展运算符（...）拷贝数组。 */
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];


/*那些需要使用函数表达式的场合，尽量用箭头函数代替*/
// bad
[1, 2, 3].map(function (x) {
    return x * x;
});

// good
[1, 2, 3].map((x) => {
    return x * x;
});

// best
[1, 2, 3].map(x => x * x);


/*所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。 */
// bad
function divide(a, b, option = false) {
}

// good
function divide(a, b, { option = false } = {}) {
}


/*使用默认值语法设置函数参数的默认值。*/
// bad
function handleThings(opts) {
    opts = opts || {};
}

// good
function handleThings(opts = {}) {
    // ...
}


/* k,v 的集合， 而非有意义的对象使用map*/
let map = new Map(arr);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let item of map.entries()) {
    console.log(item[0], item[1]);
}