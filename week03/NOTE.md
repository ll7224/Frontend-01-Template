# JavaScript标准中的所有对象

### Function Object
    - [[call]] 
    - [[Construct]] 

### Array Object
    - [[DefineOwnProperty]]


### Arguments Object
    - [[callee]]

### Object
    - [[Get]]
    - [[Set]]
    - [[GetPrototypeOf]]
    - [[SetPrototypeOf]]
    - [[GetOwnProperty]]
    - [[HasProperty]]
    - [[IsExtensible]]
    - [[PreventExtensions]]
    - [[DefineOwnProperty]]
    - [[Delete]]
    - [[OwnPropertyKeys]]
    - [[Call]]

### Module Namespece
    - [[Module]]
    - [[Exports]]


### JavaScript语句

* Atom
* Grammar
  * 简单语句
    * ExpressionStatement
    * EmptyStatement
    * DebuggerStatement
    * ThrowStatement
    * ContinueStatement
    * BreakStatement
    * ReturnStatement
  * 组合语句
    * BlockStatement
       * [[type]]: normal
       * [[value]]: --
       * [[target]]: --
    * IfStatement
    * SwitchStatement
    * IterationStatement
    * WithStatement
    * LabelledStatement
    * TryStatement
  * 声明
* Runtime
  * Completion Rencord
    * [[type]]: normal,break,continue, return, or throw
    * [[value]]: Types
    * [[target]]: label
  * Lexical Enviorment
    