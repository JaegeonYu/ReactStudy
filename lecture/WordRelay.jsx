const React = require("react");
const { Component } = React;

class WordRelay extends React.Component {
  state = {
    text: "Hello, World!",
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}

module.exports = WordRelay;
