import React from 'react'

export default class PageA extends React.Component {
  handleClick() {
    // 异步导入组件
    import('./page_test.js').then(module=> {
      module.default();
    }).catch (err=> {
      console.log(err)
    })
  }
  handleClick2() {
    require.ensure([],function(require){
      const module =require("./page_test_1.js");
      module.default()
    }, 'pageId_123');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Async Import Component</button>
        <button onClick={this.handleClick2.bind(this)}>Async 22222</button>
      </div>
    )
  }
}