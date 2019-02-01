## 生命周期的探讨

1. 项目启动的时候

   - App constructor(props) - Parent
   - APP componentsWillMount - Parent
   - App render - Parent
   - Child constructor(props)
   - Child componentsWillMount
   - Child render
   - Child componentDidMount
   - APP componentDidMount

2. 点击 button 的时候 (当只有 name 属性的时候)

   - APP shouldComponentUpdate(nextProps, nextState)
   - APP componentWillUpdate(nextProps, nextState)
   - App render
   - Child componentWillReceiveProps(nextProps)
   - Child shouldComponentUpdate(nextProps, nextState)
   - Child componentWillUpdate
   - Child render
   - Child componentDidUpdate(prevProps, prevState)
   - APP componentDidUpdate(prevProps, prevState)

3. App.js 中对 age 做判断, 如果相同即返回 false

   - APP shouldComponentUpdate false

4. 在 Children 中使用新 API

   - App constructor - Parent
   - APP componentsWillMount - Parent
   - App render - Parent
   - children constructor - Parent
   - (警告 - Unsafe legacy lifecycles will not be called for components using new component APIs.)
   - getDerivedStateFromProps(nextProps, prevState) {name: "ParentName Default", age: 22, - handleAgeClick: ƒ} {}
   - Child render
   - Child componentDidMount
   - APP componentDidMount

   - 分析: getDerivedStateFromProps 在 constructor 之后执行, 并且会阻止 componentWillMount 的执行

5. 点击子元素变化 age 之后 (在子元素中通过 props 调用父元素传递的方法, 修改父元素中的 state 和之前的 state 不一样)

   - APP shouldComponentUpdate - Parent
   - APP componentWillUpdate - Parent
   - App render - Parent
   - getDerivedStateFromProps {name: "修改之后", age: 33, handleAgeClick: ƒ} {}
   - Child shouldComponentUpdate
   - Child render
   - Child componentDidUpdate
   - APP componentDidUpdate - Parent

6. 点击父元素修改 age, 和之前的 age 一样 (这里在 shouldComponentUpdate)
   - APP shouldComponentUpdate return false - Parent
