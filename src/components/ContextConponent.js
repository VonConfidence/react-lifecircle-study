import React from 'react';
import { render, } from 'react-dom';
const NameContext = React.createContext('default_name');
const AgeContext = React.createContext({
  age: 20,
  gender: 'boy',
});

class Hello extends React.PureComponent {
  render() {
    return (
      <NameContext.Consumer>
        {name => <h1>Hello {name}</h1>}
      </NameContext.Consumer>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'FFF',
    };

    this.modify = this.modify.bind(this);
  }

  modify() {
    this.setState({
      name: this.state.name + '!',
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.modify}>Modify Context Value</button>
        <NameContext.Provider value={this.state.name}>
          {this.props.children}
        </NameContext.Provider>
        <AgeContext.Consumer>
          {ctx => <h1>age: {ctx.age} sex: {ctx.gender}</h1>}
        </AgeContext.Consumer>
      </div>
    );
  }
}

export default class ContextApp extends React.PureComponent {
  render() {
    return (
      <App>
        <Hello />
      </App>
    );
  }
}
