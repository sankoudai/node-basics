/* js函数中的this
 *    一般js函数中的this 指的是调用函数的那个对象。
 *    => 函数中的this 指的是定义所在对象的this,  其本身无this.
 */

/* 作为单纯的函数, this指的是全局对象Global:  很少这样用 */
var test = function () {
    this.x = 1;
    console.log(this.x);
};
test();
console.log(x);


/*作为方法， this绑定的对象:  很少这样用 */
test = function () {
    console.log(this.x);
};
var obj = {x: 2};
obj.test = test;
obj.test();


/* 作为构造函数, this指生成的对象 (deprecated, es6中尽量使用class) */
// es5
test = function () {
    this.x = 3;
};
obj = new test();
console.log(obj.x); //3

// es6
class Test {
    constructor(x) {
        this.x = x;
    }

    toString() {
        return `x=${x}`;
    }
}
obj = new Test(3.1);
console.log(obj.toString());


