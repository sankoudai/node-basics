/* Promise 是什么:
 *      异步 + 回调 => 深层嵌套
 *      promise 提供then等方法，  在资源加载完成后调用相应方法
 **/

// 异步方法
function asyncFunction(cb) {
    // ... lots of things go on here
  cb('asynchronous param', null);
}

/* 构造 */
const p = new Promise((resolve, reject) => {
  asyncFunction((val, err) => {
    if (err) {
      reject(err);
    } else {
      resolve(val);
    }
  });
});

p.then((val) => {
  console.log(`then resolved: ${val}`);
  return 'then1';
},
    (err) => {
      console.log(`then rejected: ${err}`);
    }).then((val) => {
      console.log(`then resolved: ${val}`);
    }).catch((err) => {
        // 前N个回调函数运行时发生的错误
      console.log(`exception thrown: ${err}`);
    });

// p= Promise.resolve()
