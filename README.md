## 声明周期的探讨
 
1. 项目启动的时候
    - App constructor(props) - Parent
    - APP componentsWillMount - Parent
    - App render - Parent
    - Child constructor(props)
    - Child componentsWillMount
    - Child render
    - Child componentDidMount
    - APP componentDidMount
  
2. 点击button的时候 (当只有name属性的时候)
    - APP shouldComponentUpdate(nextProps, nextState)
    - APP componentWillUpdate(nextProps, nextState)
    - App render
    - Child componentWillReceiveProps(nextProps)
    - Child shouldComponentUpdate(nextProps, nextState)
    - Child componentWillUpdate
    - Child render
    - Child componentDidUpdate(prevProps, prevState)
    - APP componentDidUpdate(prevProps, prevState)

3. App.js中对age做判断, 如果相同即返回false
    - APP shouldComponentUpdate false

4. 使用新API
    - App constructor - Parent
    - APP componentsWillMount - Parent
    - App render - Parent
    - children constructor - Parent
    - (警告 - Unsafe legacy lifecycles will not be called for components using new component APIs.)
    - getDerivedStateFromProps(nextProps, prevState) {name: "ParentName Default", age: 22, - handleAgeClick: ƒ} {}
    - Child render
    - Child componentDidMount
    - APP componentDidMount

    - 分析: getDerivedStateFromProps在constructor之后执行, 并且会阻止componentWillMount的执行

4. 点击子元素变化age之后 (在子元素中通过props调用父元素传递的方法, 修改父元素中的state和之前的state不一样)
    - APP shouldComponentUpdate - Parent
    - APP componentWillUpdate - Parent
    - App render - Parent
    - getDerivedStateFromProps {name: "修改之后", age: 33, handleAgeClick: ƒ} {}
    - Child shouldComponentUpdate
    - Child render
    - Child componentDidUpdate
    - APP componentDidUpdate - Parent

5. 点击父元素修改age, 和之前的age一样 (这里在shouldComponentUpdate)
    - APP shouldComponentUpdate return false - Parent