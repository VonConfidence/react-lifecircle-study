import React from 'react'

export default class PageA extends React.Component {
  handleClick() {
    // import('./page_test.js').then(module=> {
    //   module.default();
    //   console.log(' import success')
    // }).catch (err=> {
    //   console.log(err)
    // })
    // const path = encodeURIComponent('new/page')
    let pageId = 'page_123';
    require.ensure([],function(require){
      console.log('page____foo')
      const foo =require("./page_test.js");
      foo.default()
    }, 'pageId_123');
  }
  handleClick2() {
    require.ensure([],function(require){
      // console.log('page____bar')
      const bar =require("./page_test_1.js");
      bar.default()
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