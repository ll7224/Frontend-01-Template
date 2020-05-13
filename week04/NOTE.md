# JavaScript结构化



一个宏任务只有一个微任务队列，微任务执行顺序，由微任务入队时间决定。

一个宏任务中的同步代码可以理解成一个微任务，比同一个宏任务中的异步代码的微任务，优先入队（一个宏任务必须入队一个微任务(同步代码)）

宏任务具有优先级，微任务没有优先级。

```

  js引擎内部执行的叫 微任务  
  js外部宿主执行的任务 宏任务

```

#### Realm

* JS Context => Realm

* 函数调用（Execution Context）

#### 结构

```
code evaluation state     Realm
Function                  LexicalEnvironment (词法环境)
Script or Module          VariableEnvironment (变量环境)
Generator

##### LexicalEnvironment
 * this
 * new.target
 * super
 * 变量

##### VariableEnviroment
VariableEnviroment是个历史遗留的包袱,仅仅用于处理var声明

##### Realm
   
```
 Excution Context  ExecutioN Context Execution Context（栈顶元素他特殊名称：Running Execution Context）

 ========================================>>>>>>>>

 Execution Context Stack（函数调用栈）

* 语句/声明 

* 表达式

* 直接量/变量/this....