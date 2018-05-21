import React, { Component } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('app constructor');
    this.state = {
      name: 'fengzixin',
      age: 22
    }
  }
  componentWillMount() {
    console.log('APP componentsWillMount')
  }
  componentDidMount() {
    console.log('APP componentDidMount')
  }
  componentWillUpdate() {
    console.log('APP componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('APP componentDidUpdate')
  }
  componentWillReceiveProps(nextProps) {
    console.log('APP componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState) {
    if (nextState.age === this.state.age) {
      console.log('APP shouldComponentUpdate false')
      return false;
    }
    console.log('APP shouldComponentUpdate')
    return true;
  }

  handleClick() {
    this.setState({name: '修改之后'});

    this.setState({age: 33})
  }
  handleAgeClick() {
    this.setState({age: 22});
  }
  render() {
    console.log('App render')
    return (
      <div className="App" onClick={ () => { console.log('App clicked test') } }>
        <button onClick={this.handleClick.bind(this)}>点击修改名字 {this.state.age}</button>
        <hr/>
        <ChildComponent name={this.state.name} age={this.state.age} handleAgeClick={this.handleAgeClick.bind(this)}/>
        
      </div>
    );
  }
}

export default App;
