var assert = require('assert');

/* 构造 */
function test_construct() {
    var s = new Set([1, 1, 2, 3]);
    s.add(4);
    console.log(s);
}
test_construct();

/* 两个对象总是不等的 */
function test_elem_equal() {
    var s = new Set();
    s.add({});
    s.add({});
    assert(s.size == 2);
}
test_elem_equal();
