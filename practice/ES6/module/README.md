### 【模块加载 】循环依赖的处理
CommonJS中的处理 // node中
Commonjs模块的重要特性是加载时执行，即代码在 require 的时候，就会全部执行。一旦出现某个模块被“循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。

### ES6的处理 
ES6模块是动态引用，如果使用import从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能取到值。


### require vs import
```shell
../../../node_modules/.bin/webpack require_vs_import-import.js bundle-require_vs_import-import.js
../../../node_modules/.bin/webpack require_vs_import-reqiure.js bundle-require_vs_import-require.js
```
