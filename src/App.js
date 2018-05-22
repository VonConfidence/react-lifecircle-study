import React, { Component } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent'

import PageA from './pages/PageA'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App constructor - Parent');
    this.state = {
      name: 'ParentName Default',
      age: 22
    }
  }
  componentWillMount() {
    console.log('APP componentsWillMount- Parent')
  }
  componentDidMount() {
    console.log('APP componentDidMount - Parent')
  }
  componentWillUpdate() {
    console.log('APP componentWillUpdate - Parent')
  }
  componentDidUpdate() {
    console.log('APP componentDidUpdate - Parent')
  }
  componentWillReceiveProps(nextProps) {
    console.log('APP componentWillReceiveProps - Parent')
  }
  shouldComponentUpdate(nextProps,nextState) {
    if (nextState.age === this.state.age) {
      console.log('APP shouldComponentUpdate return false - Parent')
      return false;
    }
    console.log('APP shouldComponentUpdate - Parent')
    return true;
  }

  handleClick() {
    this.setState({name: 'App修改name之后'});

    this.setState({age: 33})
  }
  handleAgeClick() {
    this.setState({age: 22});
  }
  render() {
    console.log('App render - Parent')
    return (
      <div className="App" style={{backgroundColor: 'yellow', marginTop: '30px'}}>
        <h2>Age: {this.state.age}</h2>
        <button onClick={this.handleClick.bind(this)}>点击修改名字 </button>
        <hr/>
        <ChildComponent name={this.state.name} age={this.state.age} handleAgeClick={this.handleAgeClick.bind(this)}/>
        <div style={{marginTop: '100px', backgroundColor: 'dodgerblue'}}>
          <PageA />
        </div>
      </div>
    );
  }
}

export default App;
