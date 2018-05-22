import React, {Component} from 'react'

export default class ChildComponent extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps - Child', nextProps, prevState)
    return null;
  }
  constructor(props) {
    super(props);
    console.log('Child constructor')
    this.state = {}
  }
  componentWillMount() {
    console.log('Child componentsWillMount')
  }
  componentDidMount() {
    console.log('Child componentDidMount')
  }
  componentWillUpdate() {
    console.log('Child componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }
  componentWillReceiveProps(nextProps) {
    console.warn('Child componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('Child shouldComponentUpdate')
    return true;
  }
  render() {
    console.log('Child render')
    const {name, age} = this.props;
    return (
      <div style={{backgroundColor: 'red', marginTop: '50px'}}>Children
        <br/>
        Name: {name}
        <br/>

        <button onClick={this.props.handleAgeClick}>点击修改Age (not change age): {age}</button>
      </div>
    )
  }
}

/**
 * 声明周期的探讨
 
 1. 项目启动的时候
      App constructor - Parent
      APP componentsWillMount - Parent
      App render - Parent
      Child constructor
      Child componentsWillMount
      Child render
      Child componentDidMount
      APP componentDidMount
  
  2. 点击button的时候 (当只有name属性的时候)
      APP shouldComponentUpdate
      APP componentWillUpdate
      App render
      Child componentWillReceiveProps
      Child shouldComponentUpdate
      Child componentWillUpdate
      Child render
      Child componentDidUpdate
      APP componentDidUpdate

  3. App.js中对age做判断, 如果相同即返回false
      APP shouldComponentUpdate false

  4. 使用新API
      App constructor - Parent
      APP componentsWillMount - Parent
      App render - Parent
      children constructor - Parent
      (警告 - Unsafe legacy lifecycles will not be called for components using new component APIs.)
      getDerivedStateFromProps {name: "ParentName Default", age: 22, handleAgeClick: ƒ} {}
      Child render
      Child componentDidMount
      APP componentDidMount

      分析: getDerivedStateFromProps在constructor之后执行, 并且会阻止componentWillMount的执行

  4. 点击子元素变化age之后 (在子元素中通过props调用父元素传递的方法, 修改父元素中的state和之前的state不一样)
      APP shouldComponentUpdate - Parent
      APP componentWillUpdate - Parent
      App render - Parent
      getDerivedStateFromProps {name: "修改之后", age: 33, handleAgeClick: ƒ} {}
      Child shouldComponentUpdate
      Child render
      Child componentDidUpdate
      APP componentDidUpdate - Parent

  5. 点击父元素修改age, 和之前的age一样 (这里在shouldComponentUpdate)
      APP shouldComponentUpdate return false - Parent

 */