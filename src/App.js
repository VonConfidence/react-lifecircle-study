import React, { Component } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';
import ContextConponent from './components/ContextConponent';
import CssCmp from './css-modules';

import PageA from './pages/PageA';
import SnapShotComponent from './components/SnapShotComponent';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('APP getDerivedStateFromProps', nextProps, prevState, this);
    return null;
  }
  constructor(props) {
    super(props);
    console.log('App constructor - Parent');
    this.state = {
      name: 'ParentName Default',
      age: 22,
    };
  }
  componentWillMount() {
    // let self = this;
    // setTimeout(() => {
    //   self.setState({age:20})
    // }, 5000);
    console.log('APP componentsWillMount- Parent');
  }
  componentDidMount() {
    // this.setState({name: 'fff'})
    console.log('APP componentDidMount - Parent');
  }
  componentWillReceiveProps(nextProps) {
    console.log('APP componentWillReceiveProps - Parent');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.age === this.state.age) {
    //   console.log('APP shouldComponentUpdate return false - Parent')
    //   return false;
    // }
    console.log('APP shouldComponentUpdate - Parent');
    return true;
  }
  componentWillUpdate() {
    console.log('APP componentWillUpdate - Parent');
  }
  componentDidUpdate() {
    console.log('APP componentDidUpdate - Parent');
  }

  handleClick() {
    this.setState({ name: 'App修改name之后' });

    this.setState({ age: 33 });
  }
  handleAgeClick() {
    this.setState({ age: 22 });
  }
  render() {
    console.log('App render - Parent');
    return (
      <div className="App" style={{ backgroundColor: 'yellow', marginTop: '30px' }}>
        <h2>Age: {this.state.age}</h2>
        <button onClick={this.handleClick.bind(this)}>点击修改名字 </button>
        <hr />
        <ChildComponent
          age={this.state.age}
          handleAgeClick={this.handleAgeClick.bind(this)}
          name={this.state.name}
        />
        <div style={{ marginTop: '100px', backgroundColor: 'dodgerblue' }}>
          <PageA />
        </div>
        <hr />
        <ContextConponent />

        <hr />
        <CssCmp />

        <hr />
        <SnapShotComponent />

        <hr />
        <ErrorBoundary>
          <div>Error Page Show</div>
          <p>{this.state.a}</p>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
