## 声明周期的探讨
 
1. 项目启动的时候
    - app constructor
    - APP componentsWillMount
    - App render
    - children constructor
    - Child componentsWillMount
    - Child render
    - Child componentDidMount
    - APP componentDidMount

2. 点击button的时候 (当只有name属性的时候)
    - APP shouldComponentUpdate
    - APP componentWillUpdate
    - App render
    - Child componentWillReceiveProps
    - Child shouldComponentUpdate
    - Child componentWillUpdate
    - Child render
    - Child componentDidUpdate
    - APP componentDidUpdate

3. App.js中对age做判断, 如果相同即返回false
    - API shouldComponentUpdate false

4. 使用新API
    - app constructor
    - APP componentsWillMount
    - App render
    - children constructor
    - getDerivedStateFromProps {name: "fengzixin", age: 22,  handleAgeClick: ƒ} {}
    - Child render
    - Child componentDidMount
    - APP componentDidMount

    - 分析: getDerivedStateFromProps在constructor之后执行, 并且会阻止componentWillMount的执行

4. 点击变化之后
    - APP shouldComponentUpdate
    - APP componentWillUpdate
    - App render
    - getDerivedStateFromProps {name: "修改之后", age: 33, - handleAgeClick: ƒ} {}
    - Child shouldComponentUpdate
    - Child render
    - Child componentDidUpdate
    - App.js:24 APP componentDidUpdate